
import React, { useState } from 'react';
import { PhonicsItem, LessonCategory } from '../types';
import { speakText } from '../services/tts';

interface Props {
  item: PhonicsItem;
}

const PhonicsCard: React.FC<Props> = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      // For all cards, we focus strictly on the 'ipa' field which contains the phonetic symbols.
      if (item.category === LessonCategory.CVC) {
        // CVC pattern: Play each symbol individually with a delay
        const phonemes = item.ipa.split('+').map(p => p.trim());
        for (let i = 0; i < phonemes.length; i++) {
          await speakText(phonemes[i], 'Kore', true);
          if (i < phonemes.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 600)); // Standard phonics pause
          }
        }
      } else {
        // All other categories: Play the single phonetic sound
        await speakText(item.ipa, 'Kore', true);
      }
    } catch (err) {
      console.error("Phonics playback failed:", err);
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={`${item.color} p-6 rounded-3xl shadow-sm hover:shadow-md transition-all transform hover:scale-105 flex flex-col items-center justify-center border-b-4 border-black/10 active:border-b-0 active:translate-y-1 relative group overflow-hidden`}
      aria-label={`Play sound for ${item.display}`}
    >
      {/* Decorative speaker icon */}
      <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      </div>
      
      {/* Main Display (e.g., Aa, fun, etc.) */}
      <span className="text-4xl font-bold text-gray-800 mb-1 cute-font">{item.display}</span>
      
      {/* IPA Representation */}
      <span className="text-lg text-gray-500 font-mono mb-2 bg-white/40 px-2 rounded">{item.ipa}</span>
      
      {/* Example Word (No sound played for this now) */}
      {item.example && (
        <div className="mt-2 bg-white/60 px-3 py-1 rounded-full text-xs font-medium text-gray-600 flex items-center gap-1 border border-white/40">
          <span className="text-pink-500">✨</span> {item.example}
        </div>
      )}

      {/* Visual active state */}
      {isPlaying && (
        <div className="absolute inset-0 bg-white/20 flex items-center justify-center pointer-events-none">
            <div className="animate-ping h-12 w-12 rounded-full bg-pink-400 opacity-40"></div>
        </div>
      )}
    </button>
  );
};

export default PhonicsCard;
