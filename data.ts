
import { Lesson, LessonCategory } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'basic-26',
    title: '26个字母基本音',
    description: '自然拼读最核心的基础：学习字母在单词中的基本发音。',
    tips: '重点：只发音标代表的纯拼读音（Phonetic Sound）。',
    items: [
      { id: 'a', display: 'Aa', ipa: '/æ/', example: 'apple', color: 'bg-rose-100', category: LessonCategory.BASIC },
      { id: 'b', display: 'Bb', ipa: '/b/', example: 'bat', color: 'bg-orange-100', category: LessonCategory.BASIC },
      { id: 'c', display: 'Cc', ipa: '/k/', example: 'cat', color: 'bg-amber-100', category: LessonCategory.BASIC },
      { id: 'd', display: 'Dd', ipa: '/d/', example: 'dog', color: 'bg-yellow-100', category: LessonCategory.BASIC },
      { id: 'e', display: 'Ee', ipa: '/e/', example: 'egg', color: 'bg-lime-100', category: LessonCategory.BASIC },
      { id: 'f', display: 'Ff', ipa: '/f/', example: 'fish', color: 'bg-green-100', category: LessonCategory.BASIC },
      { id: 'g', display: 'Gg', ipa: '/g/', example: 'goat', color: 'bg-emerald-100', category: LessonCategory.BASIC },
      { id: 'h', display: 'Hh', ipa: '/h/', example: 'hat', color: 'bg-teal-100', category: LessonCategory.BASIC },
      { id: 'i', display: 'Ii', ipa: '/ɪ/', example: 'ink', color: 'bg-cyan-100', category: LessonCategory.BASIC },
      { id: 'j', display: 'Jj', ipa: '/dʒ/', example: 'jam', color: 'bg-sky-100', category: LessonCategory.BASIC },
      { id: 'k', display: 'Kk', ipa: '/k/', example: 'kite', color: 'bg-blue-100', category: LessonCategory.BASIC },
      { id: 'l', display: 'Ll', ipa: '/l/', example: 'lion', color: 'bg-indigo-100', category: LessonCategory.BASIC },
      { id: 'm', display: 'Mm', ipa: '/m/', example: 'man', color: 'bg-violet-100', category: LessonCategory.BASIC },
      { id: 'n', display: 'Nn', ipa: '/n/', example: 'net', color: 'bg-purple-100', category: LessonCategory.BASIC },
      { id: 'o', display: 'Oo', ipa: '/ɒ/', example: 'ox', color: 'bg-fuchsia-100', category: LessonCategory.BASIC },
      { id: 'p', display: 'Pp', ipa: '/p/', example: 'pen', color: 'bg-pink-100', category: LessonCategory.BASIC },
      { id: 'q', display: 'Qq', ipa: '/kw/', example: 'queen', color: 'bg-rose-200', category: LessonCategory.BASIC },
      { id: 'r', display: 'Rr', ipa: '/r/', example: 'red', color: 'bg-orange-200', category: LessonCategory.BASIC },
      { id: 's', display: 'Ss', ipa: '/s/', example: 'sun', color: 'bg-amber-200', category: LessonCategory.BASIC },
      { id: 't', display: 'Tt', ipa: '/t/', example: 'top', color: 'bg-yellow-200', category: LessonCategory.BASIC },
      { id: 'u', display: 'Uu', ipa: '/ʌ/', example: 'up', color: 'bg-lime-200', category: LessonCategory.BASIC },
      { id: 'v', display: 'Vv', ipa: '/v/', example: 'van', color: 'bg-green-200', category: LessonCategory.BASIC },
      { id: 'w', display: 'Ww', ipa: '/w/', example: 'wet', color: 'bg-teal-200', category: LessonCategory.BASIC },
      { id: 'x', display: 'Xx', ipa: '/ks/', example: 'box', color: 'bg-blue-200', category: LessonCategory.BASIC },
      { id: 'y', display: 'Yy', ipa: '/j/', example: 'yes', color: 'bg-purple-200', category: LessonCategory.BASIC },
      { id: 'z', display: 'Zz', ipa: '/z/', example: 'zoo', color: 'bg-pink-200', category: LessonCategory.BASIC },
    ]
  },
  {
    id: 'cvc-words',
    title: 'CVC 结构拼读',
    description: '辅音 + 元音 + 辅音，根据字母基本音直接拼读。',
    tips: '点击发音：系统会拆分发音。例如：/b/ -> /æ/ -> /t/。',
    items: [
      { id: 'fun', display: 'fun', ipa: '/f/ + /ʌ/ + /n/', example: '有趣', color: 'bg-rose-100', category: LessonCategory.CVC },
      { id: 'bat', display: 'bat', ipa: '/b/ + /æ/ + /t/', example: '蝙蝠/球棒', color: 'bg-orange-100', category: LessonCategory.CVC },
      { id: 'fox', display: 'fox', ipa: '/f/ + /ɒ/ + /k/ + /s/', example: '狐狸', color: 'bg-amber-100', category: LessonCategory.CVC },
      { id: 'mud', display: 'mud', ipa: '/m/ + /ʌ/ + /d/', example: '泥巴', color: 'bg-yellow-100', category: LessonCategory.CVC },
    ]
  },
  {
    id: 'consonant-digraphs',
    title: '常见辅音字母组合',
    description: '两个字母合并成一个新音。',
    items: [
      { id: 'sh', display: 'sh', ipa: '/ʃ/', example: 'ship', color: 'bg-sky-100', category: LessonCategory.CONSONANTS },
      { id: 'ch', display: 'ch', ipa: '/tʃ/', example: 'chair', color: 'bg-indigo-100', category: LessonCategory.CONSONANTS },
      { id: 'th-1', display: 'th', ipa: '/θ/', example: 'think', color: 'bg-violet-100', category: LessonCategory.CONSONANTS },
      { id: 'th-2', display: 'th', ipa: '/ð/', example: 'this', color: 'bg-purple-100', category: LessonCategory.CONSONANTS },
      { id: 'ph', display: 'ph', ipa: '/f/', example: 'phone', color: 'bg-fuchsia-100', category: LessonCategory.CONSONANTS },
      { id: 'wh', display: 'wh', ipa: '/w/', example: 'what', color: 'bg-rose-100', category: LessonCategory.CONSONANTS },
      { id: 'ck', display: 'ck', ipa: '/k/', example: 'back', color: 'bg-orange-100', category: LessonCategory.CONSONANTS },
    ]
  },
  {
    id: 'long-vowels',
    title: '长元音 (Magic e)',
    description: '当 e 在结尾时，它不发音，但会把前面的元音变长。',
    items: [
      { id: 'a_e', display: 'a_e', ipa: '/eɪ/', example: 'cake', color: 'bg-amber-100', category: LessonCategory.VOWELS },
      { id: 'i_e', display: 'i_e', ipa: '/aɪ/', example: 'bike', color: 'bg-lime-100', category: LessonCategory.VOWELS },
      { id: 'o_e', display: 'o_e', ipa: '/əʊ/', example: 'home', color: 'bg-green-100', category: LessonCategory.VOWELS },
      { id: 'u_e', display: 'u_e', ipa: '/juː/', example: 'cute', color: 'bg-teal-100', category: LessonCategory.VOWELS },
      { id: 'e_e', display: 'e_e', ipa: '/iː/', example: 'these', color: 'bg-cyan-100', category: LessonCategory.VOWELS },
    ]
  },
  {
    id: 'vowel-teams',
    title: '元音组合',
    description: '两组元音字母在一起时的发音规律。',
    items: [
      { id: 'ai', display: 'ai', ipa: '/eɪ/', example: 'rain', color: 'bg-rose-100', category: LessonCategory.VOWELS },
      { id: 'ay', display: 'ay', ipa: '/eɪ/', example: 'day', color: 'bg-orange-100', category: LessonCategory.VOWELS },
      { id: 'ee', display: 'ee', ipa: '/iː/', example: 'see', color: 'bg-amber-100', category: LessonCategory.VOWELS },
      { id: 'ea', display: 'ea', ipa: '/iː/', example: 'eat', color: 'bg-yellow-100', category: LessonCategory.VOWELS },
      { id: 'oa', display: 'oa', ipa: '/əʊ/', example: 'boat', color: 'bg-lime-100', category: LessonCategory.VOWELS },
      { id: 'ow', display: 'ow', ipa: '/aʊ/', example: 'cow', color: 'bg-emerald-100', category: LessonCategory.VOWELS },
    ]
  },
  {
    id: 'r-controlled',
    title: 'R 控制元音',
    description: '当 R 出现时，元音会带上卷舌音。',
    items: [
      { id: 'ar', display: 'ar', ipa: '/ɑːr/', example: 'car', color: 'bg-teal-100', category: LessonCategory.R_CONTROLLED },
      { id: 'er', display: 'er', ipa: '/ɜːr/', example: 'her', color: 'bg-cyan-100', category: LessonCategory.R_CONTROLLED },
      { id: 'ir', display: 'ir', ipa: '/ɜːr/', example: 'bird', color: 'bg-sky-100', category: LessonCategory.R_CONTROLLED },
      { id: 'ur', display: 'ur', ipa: '/ɜːr/', example: 'nurse', color: 'bg-indigo-100', category: LessonCategory.R_CONTROLLED },
      { id: 'or', display: 'or', ipa: '/ɔːr/', example: 'fork', color: 'bg-violet-100', category: LessonCategory.R_CONTROLLED },
    ]
  },
  {
    id: 'ipa-vowels',
    title: '常见音标：元音',
    description: '精选 10 个最常用的元音音标。',
    items: [
      { id: 'ipa-ae', display: '/æ/', ipa: '/æ/', example: 'cat', color: 'bg-rose-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-e', display: '/e/', ipa: '/e/', example: 'bed', color: 'bg-orange-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-i', display: '/ɪ/', ipa: '/ɪ/', example: 'sit', color: 'bg-amber-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-o', display: '/ɒ/', ipa: '/ɒ/', example: 'dog', color: 'bg-yellow-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-u', display: '/ʌ/', ipa: '/ʌ/', example: 'cup', color: 'bg-lime-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-i-long', display: '/iː/', ipa: '/iː/', example: 'see', color: 'bg-emerald-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-a-long', display: '/ɑː/', ipa: '/ɑː/', example: 'car', color: 'bg-teal-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-o-long', display: '/ɔː/', ipa: '/ɔː/', example: 'door', color: 'bg-sky-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-u-long', display: '/uː/', ipa: '/uː/', example: 'food', color: 'bg-indigo-200', category: LessonCategory.IPA_VOWELS },
      { id: 'ipa-er-long', display: '/ɜː/', ipa: '/ɜː/', example: 'her', color: 'bg-violet-200', category: LessonCategory.IPA_VOWELS },
    ]
  }
];
