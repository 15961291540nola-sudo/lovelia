
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Audio Decoding helper
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * @param text The phonetic symbol or text to pronounce.
 * @param voiceName Voice profile.
 * @param isPhonetic If true, instructs the model to produce ONLY the isolated phoneme sound.
 */
export async function speakText(text: string, voiceName: string = 'Kore', isPhonetic: boolean = false): Promise<void> {
  try {
    // We keep the symbols because a linguistically aware model understands /æ/ better than 'æ'.
    const targetText = text.trim();

    // High-precision prompt for phonics. We explicitly tell it NOT to say letter names.
    const prompt = isPhonetic 
      ? `You are an expert linguistics engine. Vocalize the isolated English speech sound (the phoneme) for the IPA symbol: ${targetText}. 
         IMPORTANT RULES:
         1. Produce ONLY the raw acoustic sound.
         2. DO NOT say the name of the letter (e.g., for /b/, do not say 'bee').
         3. DO NOT say any words or introductions.
         4. If it is a consonant like /p/ or /t/, make the aspirated or unaspirated sound as appropriate for an isolated phoneme.
         5. If it is a vowel like /æ/ or /ɪ/, produce the pure vowel sound.
         6. NO EXPLANATIONS. JUST THE SOUND.` 
      : `Clearly and naturally pronounce the word: ${targetText}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            // Puck and Zephyr are also good alternatives if Kore struggles.
            prebuiltVoiceConfig: { voiceName },
          },
        },
        // We can add a system instruction to further constrain the behavior
        systemInstruction: "You are a professional phonetician. You produce perfectly accurate isolated phonemes without any conversational speech.",
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio data received");

    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const audioBuffer = await decodeAudioData(
      decode(base64Audio),
      audioCtx,
      24000,
      1,
    );

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();

    return new Promise((resolve) => {
      source.onended = () => {
        audioCtx.close();
        resolve();
      };
      // Safety timeout based on buffer duration
      setTimeout(() => {
        if (audioCtx.state !== 'closed') audioCtx.close();
        resolve();
      }, (audioBuffer.duration * 1000) + 300);
    });
  } catch (error) {
    console.error("TTS Error:", error);
    // Standard fallback
    const utterance = new SpeechSynthesisUtterance(text.replace(/\//g, ''));
    utterance.lang = 'en-US';
    utterance.rate = 0.7; // Slower for better clarity
    window.speechSynthesis.speak(utterance);
  }
}
