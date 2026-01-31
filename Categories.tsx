import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Stethoscope, Bone, Sparkles, Activity, Zap, Ear, Heart, Brain, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// استورد بياناتك هنا
// import { veterinaryCases } from '@/data/cases';

const systemCategories = [
  {
    id: '1',
    name: 'الجهاز البولي',
    nameEn: 'Urinary System',
    description: 'أمراض الكلى والمثانة والمسالك البولية',
    icon: Activity,
    count: 0,
  },
  {
    id: '2',
    name: 'الجهاز الحركي',
    nameEn: 'Musculoskeletal System',
    description: 'عظام، مفاصل، عضلات، وأربطة',
    icon: Bone,
    count: 0,
  },
  {
    id: '3',
    name: 'الجهاز اللحافي',
    nameEn: 'Integumentary System',
    description: 'جلد، فراء، ومشاكل الأظافر',
    icon: Sparkles,
    count: 0,
  },
  {
    id: '4',
    name: 'الجهاز الهضمي',
    nameEn: 'Digestive System',
    description: 'معدة، أمعاء، كبد، وبنكرياس',
    icon: Stethoscope,
    count: 0,
  },
  {
    id: '5',
    name: 'الجهاز الصمائي',
    nameEn: 'Endocrine System',
    description: 'غدد صماء وهرمونات',
    icon: Zap,
    count: 0,
  },
  {
    id: '6',
    name: 'الجهاز السمعي',
    nameEn: 'Auditory System',
    description: 'أذن، أنف، وحنجرة',
    icon: Ear,
    count: 0,
  },
  {
    id: '7',
    name: 'الجهاز القلبي',
    nameEn: 'Cardiovascular System',
    description: 'قلب وأوعية دموية',
    icon: Heart,
    count: 0,
  },
  {
    id: '8',
    name: 'الجهاز العصبي',
    nameEn: 'Nervous System',
    description: 'دماغ، نخاع شوكي، وأعصاب',
    icon: Brain,
    count: 0,
  },
  {
    id: '9',
    name: 'الجهاز البصري',
    nameEn: 'Ocular System',
    description: 'عيون ومشاكل الرؤية',
    icon: Eye,
    count: 0,
  },
];

const diseaseCategories = [
  {
    id: '1',
    name: 'أمراض الكلى',
    nameEn: 'Nephrology',
    description: 'الفشل الكلوي، التهاب الكلى، الحصيات',
    count: 0,
  },
  {
    id: '2',
    name: 'جراحة العظام',
    nameEn: 'Orthopedic Surgery',
    description: 'كسور العظام، خلع المفاصل، استبدال المفاصل',
    count: 0,
  },
  {
    id: '3',
    name: 'أمراض الجلد',
    nameEn: 'Dermatology',
    description: 'التهاب الجلد، الفطريات، الحساسية',
    count: 0,
  },
  {
    id: '4',
    name: 'أمراض الجهاز الهضمي',
    nameEn: 'Gastroenterology',
    description: 'التهاب المعدة، الانسداد، التهاب البنكرياس',
    count: 0,
  },
  {
    id: '5',
    name: 'أمراض الغدد الصماء',
    nameEn: 'Endocrinology',
    description: 'السكري، أمراض الغدة الدرقية، متلازمة كوشينغ',
    count: 0,
  },
  {
    id: '6',
    name: 'أمراض الأذن',
    nameEn: 'Otolaryngology',
    description: 'التهاب الأذن، جسم غريب، الصمم',
    count: 0,
  },
];

export function Categories() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-[#06474a] text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto reveal opacity-0">
            <Badge className="bg-white/10 text-white mb-4">التصنيفات</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تصفح الحالات حسب التصنيف
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              استكشف الحالات البيطرية من خلال التصنيفات المختلفة: نوع الحيوان،
              الجهاز العضوي، أو نوع المرض
            </p>
          </div>
        </div>
      </section>

      {/* Animal Types */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">نوع الحيوان</Badge>
            <h2 className="text-3xl font-bold text-[#06474a]">
              تصفح حسب نوع الحيوان
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'كلاب', nameEn: 'Dogs', icon: '🐕', count: 0 },
              { name: 'قطط', nameEn: 'Cats', icon: '🐈', count: 0 },
              { name: 'أرانب', nameEn: 'Rabbits', icon: '🐇', count: 0 },
              { name: 'طيور', nameEn: 'Birds', icon: '🦜', count: 0 },
              { name: 'خيول', nameEn: 'Horses', icon: '🐴', count: 0 },
              { name: 'أخرى', nameEn: 'Other', icon: '🐾', count: 0 },
            ].map((animal, index) => (
              <Link
                key={index}
                to="/cases"
                className="reveal opacity-0 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="card-hover border-[#eaeaea] h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{animal.icon}</div>
                    <h3 className="font-semibold text-[#06474a] mb-1">{animal.name}</h3>
                    <p className="text-xs text-[#717171]">{animal.nameEn}</p>
                    <p className="text-sm text-[#49c48c] mt-2">{animal.count} حالة</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body Systems */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">الأجهزة العضوية</Badge>
            <h2 className="text-3xl font-bold text-[#06474a]">
              تصفح حسب الجهاز العضوي
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCategories.map((system, index) => (
              <Link
                key={system.id}
                to="/cases"
                className="reveal opacity-0 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="card-hover border-[#eaeaea] h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#f0f9f4] flex items-center justify-center flex-shrink-0">
                        <system.icon className="w-7 h-7 text-[#49c48c]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#06474a] mb-1">
                          {system.name}
                        </h3>
                        <p className="text-xs text-[#717171] mb-2">
                          {system.nameEn}
                        </p>
                        <p className="text-sm text-[#717171]">
                          {system.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-[#49c48c]">
                            {system.count} حالة
                          </span>
                          <ChevronLeft className="w-5 h-5 text-[#49c48c] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disease Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">نوع المرض</Badge>
            <h2 className="text-3xl font-bold text-[#06474a]">
              تصفح حسب نوع المرض
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseaseCategories.map((disease, index) => (
              <Link
                key={disease.id}
                to="/cases"
                className="reveal opacity-0 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="card-hover border-[#eaeaea] h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-[#06474a]">
                        {disease.name}
                      </h3>
                      <Badge variant="outline" className="text-[#49c48c] border-[#49c48c]">
                        {disease.count}
                      </Badge>
                    </div>
                    <p className="text-xs text-[#717171] mb-2">{disease.nameEn}</p>
                    <p className="text-sm text-[#717171]">{disease.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-[#49c48c]">
                      <span className="text-sm">عرض الحالات</span>
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">مستوى الصعوبة</Badge>
            <h2 className="text-3xl font-bold text-[#06474a]">
              تصفح حسب مستوى الصعوبة
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: 'مبتدئ',
                levelEn: 'Beginner',
                description: 'حالات مناسبة للطلاب والخريجين الجدد',
                color: 'bg-green-100 text-green-700',
                count: 0,
              },
              {
                level: 'متوسط',
                levelEn: 'Intermediate',
                description: 'حالات تتطلب بعض الخبرة السريرية',
                color: 'bg-yellow-100 text-yellow-700',
                count: 0,
              },
              {
                level: 'متقدم',
                levelEn: 'Advanced',
                description: 'حالات معقدة للأطباء ذوي الخبرة',
                color: 'bg-red-100 text-red-700',
                count: 0,
              },
            ].map((item, index) => (
              <Link
                key={index}
                to="/cases"
                className="reveal opacity-0 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="card-hover border-[#eaeaea] h-full">
                  <CardContent className="p-6 text-center">
                    <Badge className={`${item.color} mb-4 text-lg px-4 py-1`}>
                      {item.level}
                    </Badge>
                    <p className="text-xs text-[#717171] mb-4">{item.levelEn}</p>
                    <p className="text-[#282828] mb-4">{item.description}</p>
                    <p className="text-2xl font-bold text-[#49c48c]">{item.count}</p>
                    <p className="text-sm text-[#717171]">حالة</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
