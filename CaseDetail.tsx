import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Stethoscope, Activity, Pill, Lightbulb, BookOpen, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { veterinaryCases } from '@/data/cases';

export function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const caseItem = veterinaryCases.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  if (!caseItem) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold text-[#06474a]">الحالة غير موجودة</h1>
        <Button asChild className="mt-4">
          <Link to="/cases">العودة للحالات</Link>
        </Button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'مبتدئ';
      case 'intermediate':
        return 'متوسط';
      case 'advanced':
        return 'متقدم';
      default:
        return difficulty;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#f9f9fa]">
      {/* Header */}
      <section className="bg-white border-b border-[#eaeaea]">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="reveal opacity-0">
            <Button
              asChild
              variant="ghost"
              className="mb-4 text-[#717171] hover:text-[#06474a]"
            >
              <Link to="/cases">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للحالات
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#06474a] text-white">{caseItem.animalTypeAr}</Badge>
              <Badge className={getDifficultyColor(caseItem.difficulty)}>
                {getDifficultyLabel(caseItem.difficulty)}
              </Badge>
              <Badge variant="outline" className="text-[#49c48c] border-[#49c48c]">
                {caseItem.category}
              </Badge>
              <Badge variant="outline" className="text-[#06474a] border-[#06474a]">
                {caseItem.system}
              </Badge>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#06474a] mb-4">
              {caseItem.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#717171]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{caseItem.veterinarian}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{caseItem.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>{caseItem.breed}</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>{caseItem.age}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Case Image */}
              <Card className="reveal opacity-0 overflow-hidden border-0 shadow-lg">
                <img
                  src={caseItem.images[0]}
                  alt={caseItem.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </Card>

              {/* History */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#f0f9f4] border-b border-[#eaeaea]">
                  <CardTitle className="flex items-center gap-2 text-[#06474a]">
                    <BookOpen className="w-5 h-5 text-[#49c48c]" />
                    التاريخ المرضي (History)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#282828] leading-relaxed">
                    {caseItem.history}
                  </p>
                </CardContent>
              </Card>

              {/* Clinical Signs */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#f0f9f4] border-b border-[#eaeaea]">
                  <CardTitle className="flex items-center gap-2 text-[#06474a]">
                    <Activity className="w-5 h-5 text-[#49c48c]" />
                    الأعراض السريرية (Clinical Signs)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">العربية</h4>
                      <ul className="space-y-2">
                        {caseItem.clinicalSigns.map((sign, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[#282828]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#49c48c] mt-2 flex-shrink-0" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">English</h4>
                      <ul className="space-y-2">
                        {caseItem.clinicalSignsEn.map((sign, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[#717171] text-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#06474a] mt-2 flex-shrink-0" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diagnosis */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#06474a] text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-[#49c48c]" />
                    التشخيص (Diagnosis)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-2">التشخيص النهائي</h4>
                      <p className="text-[#282828]">{caseItem.diagnosis}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-2">Final Diagnosis</h4>
                      <p className="text-[#717171] text-sm">{caseItem.diagnosisEn}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Differential Diagnosis */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#fff8e1] border-b border-[#ffe082]">
                  <CardTitle className="flex items-center gap-2 text-[#f57c00]">
                    <AlertCircle className="w-5 h-5" />
                    التشخيص التفريقي (Differential Diagnosis)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">العربية</h4>
                      <ul className="space-y-2">
                        {caseItem.differentialDiagnosis.map((diff, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[#282828]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#f57c00] mt-2 flex-shrink-0" />
                            {diff}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">English</h4>
                      <ul className="space-y-2">
                        {caseItem.differentialDiagnosisEn.map((diff, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[#717171] text-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#f57c00] mt-2 flex-shrink-0" />
                            {diff}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Protocol */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#e8f5e9] border-b border-[#a5d6a7]">
                  <CardTitle className="flex items-center gap-2 text-[#2e7d32]">
                    <Pill className="w-5 h-5" />
                    بروتوكول العلاج (Treatment Protocol)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">بروتوكول العلاج</h4>
                      <div className="bg-white rounded-lg p-4 border border-[#eaeaea]">
                        <pre className="text-[#282828] whitespace-pre-wrap font-sans text-sm leading-relaxed">
                          {caseItem.treatmentProtocol}
                        </pre>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-[#06474a] mb-3">Treatment Protocol</h4>
                      <div className="bg-[#f9f9fa] rounded-lg p-4 border border-[#eaeaea]">
                        <pre className="text-[#717171] whitespace-pre-wrap font-sans text-sm leading-relaxed">
                          {caseItem.treatmentProtocolEn}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Practical Tips */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#e3f2fd] border-b border-[#90caf9]">
                  <CardTitle className="flex items-center gap-2 text-[#1565c0]">
                    <Lightbulb className="w-5 h-5" />
                    نصائح عملية للخريجين (Practical Tips for Graduates)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Alert className="bg-[#e3f2fd] border-[#90caf9]">
                    <Lightbulb className="w-5 h-5 text-[#1565c0]" />
                    <AlertDescription className="text-[#282828] leading-relaxed">
                      {caseItem.practicalTips}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Educational Notes */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#f3e5f5] border-b border-[#ce93d8]">
                  <CardTitle className="flex items-center gap-2 text-[#7b1fa2]">
                    <BookOpen className="w-5 h-5" />
                    ملاحظات تعليمية للطلاب (Educational Notes for Students)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Alert className="bg-[#f3e5f5] border-[#ce93d8]">
                    <BookOpen className="w-5 h-5 text-[#7b1fa2]" />
                    <AlertDescription className="text-[#282828] leading-relaxed">
                      {caseItem.educationalNotes}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Case Info */}
              <Card className="reveal opacity-0 border-0 shadow-lg sticky top-28">
                <CardHeader className="bg-[#06474a] text-white">
                  <CardTitle>معلومات الحالة</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-[#717171]">نوع الحيوان</p>
                    <p className="font-semibold text-[#06474a]">{caseItem.animalTypeAr}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">السلالة</p>
                    <p className="font-semibold text-[#06474a]">{caseItem.breed}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">العمر</p>
                    <p className="font-semibold text-[#06474a]">{caseItem.age}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">الجنس</p>
                    <p className="font-semibold text-[#06474a]">
                      {caseItem.gender === 'male' ? 'ذكر' : 'أنثى'}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">التصنيف</p>
                    <p className="font-semibold text-[#06474a]">{caseItem.category}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">الجهاز</p>
                    <p className="font-semibold text-[#06474a]">{caseItem.system}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-[#717171]">المستوى</p>
                    <Badge className={getDifficultyColor(caseItem.difficulty)}>
                      {getDifficultyLabel(caseItem.difficulty)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Related Cases */}
              <Card className="reveal opacity-0 border-0 shadow-lg">
                <CardHeader className="bg-[#f0f9f4] border-b border-[#eaeaea]">
                  <CardTitle className="text-[#06474a]">حالات ذات صلة</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {veterinaryCases
                      .filter(
                        (c) =>
                          c.id !== caseItem.id &&
                          (c.category === caseItem.category || c.animalType === caseItem.animalType)
                      )
                      .slice(0, 3)
                      .map((relatedCase) => (
                        <Link
                          key={relatedCase.id}
                          to={`/cases/${relatedCase.id}`}
                          className="block p-3 rounded-lg hover:bg-[#f9f9fa] transition-colors"
                        >
                          <p className="font-medium text-[#06474a] text-sm line-clamp-2">
                            {relatedCase.title}
                          </p>
                          <p className="text-xs text-[#717171] mt-1">
                            {relatedCase.category}
                          </p>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
