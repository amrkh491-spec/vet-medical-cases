import type { VeterinaryCase, Article, Category, Testimonial } from '@/types';

// أضف حالاتك البيطرية هنا
export const veterinaryCases: VeterinaryCase[] = [
  // مثال على هيكل الحالة (يمكنك حذفه أو تعديله):
  /*
  {
    id: '1',
    title: 'عنوان الحالة بالعربية',
    titleEn: 'Case Title in English',
    animalType: 'dog', // dog, cat, rabbit, bird, horse, other
    animalTypeAr: 'كلب',
    breed: 'السلالة',
    age: 'العمر',
    gender: 'male', // male, female
    history: 'التاريخ المرضي...',
    clinicalSigns: ['العرض 1', 'العرض 2'],
    clinicalSignsEn: ['Sign 1', 'Sign 2'],
    diagnosis: 'التشخيص بالعربية',
    diagnosisEn: 'Diagnosis in English',
    differentialDiagnosis: ['تشخيص تفريقي 1', 'تشخيص تفريقي 2'],
    differentialDiagnosisEn: ['Differential 1', 'Differential 2'],
    treatmentProtocol: 'بروتوكول العلاج...',
    treatmentProtocolEn: 'Treatment Protocol...',
    practicalTips: 'نصائح عملية للخريجين...',
    educationalNotes: 'ملاحظات تعليمية للطلاب...',
    images: ['/case-image.jpg'],
    category: 'التصنيف',
    categoryEn: 'Category',
    system: 'الجهاز',
    systemEn: 'System',
    date: '2024-01-01',
    veterinarian: 'اسم الطبيب',
    difficulty: 'intermediate', // beginner, intermediate, advanced
  },
  */
];

// أضف مقالاتك هنا
export const articles: Article[] = [
  // مثال على هيكل المقال:
  /*
  {
    id: '1',
    title: 'عنوان المقال',
    titleEn: 'Article Title',
    excerpt: 'ملخص المقال...',
    content: 'محتوى المقال الكامل...',
    category: 'التصنيف',
    author: 'اسم الكاتب',
    date: '2024-01-01',
    image: '/article-image.jpg',
    tags: ['وسم1', 'وسم2'],
  },
  */
];

// أضف تصنيفاتك هنا
export const categories: Category[] = [
  {
    id: '1',
    name: 'أمراض الكلى',
    nameEn: 'Nephrology',
    description: 'حالات متعلقة بالجهاز البولي والكلى',
    icon: 'Kidney',
    count: 0,
  },
  {
    id: '2',
    name: 'جراحة العظام',
    nameEn: 'Orthopedic Surgery',
    description: 'إجراءات جراحية للعظام والمفاصل',
    icon: 'Bone',
    count: 0,
  },
  {
    id: '3',
    name: 'أمراض الجلد',
    nameEn: 'Dermatology',
    description: 'حالات الجلد والأمراض الجلدية',
    icon: 'Sparkles',
    count: 0,
  },
  {
    id: '4',
    name: 'الجهاز الهضمي',
    nameEn: 'Gastroenterology',
    description: 'أمراض المعدة والأمعاء والبنكرياس',
    icon: 'Activity',
    count: 0,
  },
  {
    id: '5',
    name: 'الغدد الصماء',
    nameEn: 'Endocrinology',
    description: 'اضطرابات الهرمونات والغدد',
    icon: 'Zap',
    count: 0,
  },
  {
    id: '6',
    name: 'أمراض الأذن',
    nameEn: 'Otolaryngology',
    description: 'حالات الأذن والأنف والحنجرة',
    icon: 'Ear',
    count: 0,
  },
];

// أضف آراء المستخدمين هنا
export const testimonials: Testimonial[] = [
  /*
  {
    id: '1',
    name: 'اسم المستخدم',
    role: 'طالب بيطري',
    content: 'رأي المستخدم...',
    image: '/user-image.jpg',
    rating: 5,
  },
  */
];

export const animalTypes = [
  { value: 'all', label: 'جميع الحيوانات', labelEn: 'All Animals' },
  { value: 'dog', label: 'كلاب', labelEn: 'Dogs' },
  { value: 'cat', label: 'قطط', labelEn: 'Cats' },
  { value: 'rabbit', label: 'أرانب', labelEn: 'Rabbits' },
  { value: 'bird', label: 'طيور', labelEn: 'Birds' },
  { value: 'horse', label: 'خيول', labelEn: 'Horses' },
  { value: 'other', label: 'أخرى', labelEn: 'Other' },
];

export const difficultyLevels = [
  { value: 'all', label: 'جميع المستويات', labelEn: 'All Levels' },
  { value: 'beginner', label: 'مبتدئ', labelEn: 'Beginner' },
  { value: 'intermediate', label: 'متوسط', labelEn: 'Intermediate' },
  { value: 'advanced', label: 'متقدم', labelEn: 'Advanced' },
];

export const bodySystems = [
  { value: 'all', label: 'جميع الأجهزة', labelEn: 'All Systems' },
  { value: 'Urinary System', label: 'الجهاز البولي', labelEn: 'Urinary System' },
  { value: 'Musculoskeletal System', label: 'الجهاز الحركي', labelEn: 'Musculoskeletal System' },
  { value: 'Integumentary System', label: 'الجهاز اللحافي', labelEn: 'Integumentary System' },
  { value: 'Digestive System', label: 'الجهاز الهضمي', labelEn: 'Digestive System' },
  { value: 'Endocrine System', label: 'الجهاز الصمائي', labelEn: 'Endocrine System' },
  { value: 'Auditory System', label: 'الجهاز السمعي', labelEn: 'Auditory System' },
];
