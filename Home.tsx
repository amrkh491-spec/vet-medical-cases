import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, BookOpen, Users, Award, ChevronLeft, BookOpen as BookIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// استورد بياناتك هنا
// import { veterinaryCases, articles, testimonials } from '@/data/cases';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  // عدل هذه البيانات حسب المحتوى المتاح
  const stats = {
    cases: 0,
    articles: 0,
    students: 0,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-vet.jpg"
            alt="Veterinary care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#06474a]/90 via-[#06474a]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-[#49c48c]/20 text-[#49c48c] border-[#49c48c]/30 px-4 py-1.5 text-sm">
                منصة تعليمية بيطرية
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                أفضل مصدر تعليمي
                <span className="block text-[#49c48c]">للطلاب البيطريين</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                نقدم حالات بيطرية حقيقية مفصلة للطلاب والخريجين، مع بروتوكولات
                علاجية شاملة ونصائح عملية لتطوير مهاراتك المهنية.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#49c48c] hover:bg-[#3db37d] text-white font-semibold px-8 py-6 text-lg"
                >
                  <Link to="/cases">
                    استكشف الحالات
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  <Link to="/about">تعرف علينا</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#49c48c]">
                    +{stats.cases}
                  </p>
                  <p className="text-white/70 text-sm">حالة بيطرية</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#49c48c]">
                    +{stats.articles}
                  </p>
                  <p className="text-white/70 text-sm">مقال تعليمي</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#49c48c]">
                    +{stats.students}
                  </p>
                  <p className="text-white/70 text-sm">طالب مستفيد</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">ما نقدمه</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#06474a] mb-4">
              خدماتنا التعليمية المتخصصة
            </h2>
            <p className="text-[#717171]">
              نقدم محتوى تعليمي شامل يغطي جميع جوانب الطب البيطري للطلاب والخريجين
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: 'حالات سريرية',
                description: 'حالات بيطرية حقيقية مع تفاصيل تشخيصية وعلاجية شاملة',
              },
              {
                icon: BookOpen,
                title: 'محتوى تعليمي',
                description: 'مقالات ودروس تعليمية في جميع تخصصات الطب البيطري',
              },
              {
                icon: Users,
                title: 'نصائح عملية',
                description: 'نصائح من خبراء للتعامل مع المواقف السريرية',
              },
              {
                icon: Award,
                title: 'شهادات معتمدة',
                description: 'احصل على شهادات إتمام للدورات التعليمية',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="reveal opacity-0 card-hover border-[#eaeaea] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#f0f9f4] flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-[#49c48c]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#06474a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#717171] text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="reveal opacity-0">
              <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">حالات مميزة</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06474a]">
                أحدث الحالات البيطرية
              </h2>
            </div>
            <Link
              to="/cases"
              className="reveal opacity-0 inline-flex items-center gap-2 text-[#49c48c] hover:text-[#3db37d] font-medium mt-4 md:mt-0"
            >
              عرض جميع الحالات
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* سيتم عرض الحالات هنا عند إضافتها */}
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#eaeaea]">
            <Stethoscope className="w-16 h-16 text-[#49c48c] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#06474a] mb-2">
              سيتم إضافة الحالات قريباً
            </h3>
            <p className="text-[#717171]">
              الحالات البيطرية ستظهر هنا بمجرد إضافتها
            </p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#f0f9f4] h-[500px] flex items-center justify-center">
                <Award className="w-32 h-32 text-[#49c48c]" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#49c48c]/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#06474a]/10 rounded-full" />
            </div>

            <div className="reveal opacity-0 space-y-6">
              <Badge className="bg-[#f0f9f4] text-[#06474a]">من نحن</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06474a]">
                نحن نسعى لرفع مستوى التعليم البيطري
              </h2>
              <p className="text-[#717171] leading-relaxed">
                VetMed هي منصة تعليمية متخصصة تهدف إلى نشر المعرفة البيطرية للطلاب
                والخريجين. نقدم حالات سريرية حقيقية مع تفاصيل تشخيصية وعلاجية شاملة،
                بالإضافة إلى نصائح عملية من خبراء في المجال.
              </p>
              <p className="text-[#717171] leading-relaxed">
                نؤمن بأن التعلم العملي هو المفتاح لبناء جيل من الأطباء البيطريين
                المؤهلين القادرين على تقديم أفضل رعاية صحية للحيوانات.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f9f4] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#49c48c]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#06474a]">محتوى موثوق</p>
                    <p className="text-sm text-[#717171]">من خبراء معتمدين</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f9f4] flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#49c48c]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#06474a]">مجتمع نشط</p>
                    <p className="text-sm text-[#717171]">تفاعل وتعلم مع الآخرين</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-[#06474a] hover:bg-[#0a5a5e] text-white font-semibold px-8"
              >
                <Link to="/about">
                  تعرف علينا أكثر
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#06474a]">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0">
            <Badge className="bg-white/10 text-white mb-4">آراء المستخدمين</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ماذا يقول عنا مستخدمونا
            </h2>
            <p className="text-white/70">
              آراء حقيقية من طلاب وخريجي الطب البيطري الذين استفادوا من منصتنا
            </p>
          </div>

          {/* سيتم عرض الآراء هنا عند إضافتها */}
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-dashed border-white/20">
            <Users className="w-16 h-16 text-[#49c48c] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              سيتم إضافة آراء المستخدمين قريباً
            </h3>
            <p className="text-white/70">
              آراء الطلاب والخريجين ستظهر هنا
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="reveal opacity-0">
              <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">المقالات</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06474a]">
                أحدث المقالات التعليمية
              </h2>
            </div>
            <Link
              to="/articles"
              className="reveal opacity-0 inline-flex items-center gap-2 text-[#49c48c] hover:text-[#3db37d] font-medium mt-4 md:mt-0"
            >
              عرض جميع المقالات
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* سيتم عرض المقالات هنا عند إضافتها */}
          <div className="text-center py-16 bg-[#f9f9fa] rounded-2xl border border-dashed border-[#eaeaea]">
            <BookIcon className="w-16 h-16 text-[#49c48c] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#06474a] mb-2">
              سيتم إضافة المقالات قريباً
            </h3>
            <p className="text-[#717171]">
              المقالات التعليمية ستظهر هنا بمجرد إضافتها
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#f0f9f4]">
        <div className="container-custom mx-auto">
          <div className="reveal opacity-0 bg-[#06474a] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#49c48c]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#49c48c]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل أنت مستعد لتطوير مهاراتك البيطرية؟
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                انضم إلى آلاف الطلاب والخريجين الذين يستخدمون منصتنا لتعلم
                المزيد عن الحالات البيطرية
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#49c48c] hover:bg-[#3db37d] text-white font-semibold px-8"
                >
                  <Link to="/cases">
                    ابدأ التعلم الآن
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                >
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
