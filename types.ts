
export interface PhonicsItem {
  id: string;
  display: string;
  ipa: string;
  example?: string;
  translation?: string;
  category: string;
  color: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  items: PhonicsItem[];
  tips?: string;
}

export enum LessonCategory {
  BASIC = 'BASIC',
  CVC = 'CVC',
  CONSONANTS = 'CONSONANTS',
  VOWELS = 'VOWELS',
  R_CONTROLLED = 'R_CONTROLLED',
  IPA_VOWELS = 'IPA_VOWELS',
  IPA_CONSONANTS = 'IPA_CONSONANTS'
}
