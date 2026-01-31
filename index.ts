export interface VeterinaryCase {
  id: string;
  title: string;
  titleEn: string;
  animalType: 'dog' | 'cat' | 'rabbit' | 'bird' | 'horse' | 'other';
  animalTypeAr: string;
  breed: string;
  age: string;
  gender: 'male' | 'female';
  history: string;
  clinicalSigns: string[];
  clinicalSignsEn: string[];
  diagnosis: string;
  diagnosisEn: string;
  differentialDiagnosis: string[];
  differentialDiagnosisEn: string[];
  treatmentProtocol: string;
  treatmentProtocolEn: string;
  practicalTips: string;
  educationalNotes: string;
  images: string[];
  category: string;
  categoryEn: string;
  system: string;
  systemEn: string;
  date: string;
  veterinarian: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}
