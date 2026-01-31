import { useEffect } from 'react';
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// أضف أعضاء فريقك هنا
interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  // {
  //   name: 'اسم الطبيب',
  //   role: 'المنصب',
  //   specialty: 'التخصص',
  //   image: '/team-member.jpg',
  // },
];

const values = [
  {
    icon: Target,
    title: 'الدقة العلمية',
    description: 'نقدم محتوى دقيق ومبني على أحدث الأدلة العلمية والبروتوكولات الطبية المعتمدة.',
  },
  {
    icon: Eye,
    title: 'الشفافية',
    description: 'نؤمن بأن المعرفة يجب أن تكون متاحة للجميع بشكل واضح وشفاف.',
  },
  {
    icon: Heart,
    title: 'الشغف',
    description: 'نحن نحب ما نفعله ونسعى دائمًا لتحسين تجربة التعلم للطلاب.',
  },
  {
    icon: Users,
    title: 'المجتمع',
    description: 'نبني مجتمعًا من الأطباء البيطريين المتعلمين والمتحمسين.',
  },
];

export function About() {
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
            <Badge className="bg-white/10 text-white mb-4">عن الموقع</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نحن نبني مستقبل التعليم البيطري
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              منصة تعليمية متخصصة تهدف إلى رفع مستوى التعليم البيطري
              في العالم العربي من خلال تقديم محتوى تعليمي عالي الجودة للطلاب
              والخريجين.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="reveal opacity-0 border-[#eaeaea] overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#f0f9f4] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#49c48c]" />
                </div>
                <h2 className="text-2xl font-bold text-[#06474a] mb-4">رسالتنا</h2>
                <p className="text-[#717171] leading-relaxed">
                  تقديم تعليم بيطري عالي الجودة يجمع بين النظرية والتطبيق العملي،
                  لبناء جيل من الأطباء البيطريين المؤهلين القادرين على تقديم
                  أفضل رعاية صحية للحيوانات في العالم العربي.
                </p>
              </CardContent>
            </Card>

            <Card className="reveal opacity-0 border-[#eaeaea] overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#f0f9f4] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#49c48c]" />
                </div>
                <h2 className="text-2xl font-bold text-[#06474a] mb-4">رؤيتنا</h2>
                <p className="text-[#717171] leading-relaxed">
                  أن نكون المنصة التعليمية البيطرية الرائدة في العالم العربي،
                  وأن نساهم في رفع مستوى الرعاية الصحية للحيوانات من خلال
                  تعليم متميز ومحتوى علمي موثوق.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">قيمنا</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#06474a] mb-4">
              المبادئ التي نؤمن بها
            </h2>
            <p className="text-[#717171]">
              هذه هي القيم الأساسية التي توجه عملنا وتفاعلنا مع مجتمعنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="reveal opacity-0 card-hover border-[#eaeaea] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#f0f9f4] flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#49c48c]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#06474a] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#717171] text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-[#06474a]">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '0', label: 'حالة بيطرية' },
              { number: '0', label: 'مقال تعليمي' },
              { number: '0', label: 'طالب مستفيد' },
              { number: '0', label: 'طبيب بيطري' },
            ].map((stat, index) => (
              <div
                key={index}
                className="reveal opacity-0 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-[#49c48c] mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">فريقنا</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#06474a] mb-4">
              نخبة من الأطباء البيطريين
            </h2>
            <p className="text-[#717171]">
              فريقنا مكون من أطباء بيطريين متخصصين ذوي خبرة واسعة في مختلف المجالات
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="reveal opacity-0 card-hover overflow-hidden border-[#eaeaea]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#06474a] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#49c48c] text-sm mb-1">{member.role}</p>
                    <p className="text-[#717171] text-sm">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#f9f9fa] rounded-2xl">
              <Users className="w-16 h-16 text-[#49c48c] mx-auto mb-4" />
              <p className="text-[#717171]">سيتم إضافة فريق العمل قريباً</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0">
              <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">لماذا نحن</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#06474a] mb-6">
                لماذا تختار منصتنا؟
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: 'محتوى شامل ومفصل',
                    description:
                      'كل حالة تشمل التاريخ المرضي، الأعراض السريرية، التشخيص، التشخيص التفريقي، وبروتوكول العلاج.',
                  },
                  {
                    icon: Award,
                    title: 'محتوى من خبراء معتمدين',
                    description:
                      'جميع الحالات والمقالات تتم مراجعتها من قبل أطباء بيطريين متخصصين ذوي خبرة.',
                  },
                  {
                    icon: Users,
                    title: 'مناسب للطلاب والخريجين',
                    description:
                      'نقدم محتوى يناسب جميع المستويات من المبتدئين إلى المتقدمين.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f9f4] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#49c48c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#06474a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#717171] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#f0f9f4] h-[500px] flex items-center justify-center">
                <Award className="w-32 h-32 text-[#49c48c]" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#49c48c]/10 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#06474a]/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
