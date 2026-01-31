import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronLeft, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { veterinaryCases, animalTypes, difficultyLevels, bodySystems } from '@/data/cases';

export function Cases() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedSystem, setSelectedSystem] = useState('all');
  const [filteredCases, setFilteredCases] = useState(veterinaryCases);

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

  useEffect(() => {
    let filtered = veterinaryCases;

    if (searchQuery) {
      filtered = filtered.filter(
        (caseItem) =>
          caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.diagnosis.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedAnimal !== 'all') {
      filtered = filtered.filter((caseItem) => caseItem.animalType === selectedAnimal);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((caseItem) => caseItem.difficulty === selectedDifficulty);
    }

    if (selectedSystem !== 'all') {
      filtered = filtered.filter((caseItem) => caseItem.systemEn === selectedSystem);
    }

    setFilteredCases(filtered);
  }, [searchQuery, selectedAnimal, selectedDifficulty, selectedSystem]);

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-[#06474a] text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto reveal opacity-0">
            <Badge className="bg-white/10 text-white mb-4">الحالات البيطرية</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              استكشف الحالات السريرية
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              مجموعة من الحالات البيطرية الحقيقية مع تفاصيل تشخيصية وعلاجية شاملة،
              مصممة للطلاب والخريجين
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-[#eaeaea] sticky top-16 md:top-20 z-40">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717171]" />
              <Input
                placeholder="البحث في الحالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c]"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
                <SelectTrigger className="w-[140px] border-[#eaeaea]">
                  <Filter className="w-4 h-4 ml-2" />
                  <SelectValue placeholder="نوع الحيوان" />
                </SelectTrigger>
                <SelectContent>
                  {animalTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSystem} onValueChange={setSelectedSystem}>
                <SelectTrigger className="w-[160px] border-[#eaeaea]">
                  <Stethoscope className="w-4 h-4 ml-2" />
                  <SelectValue placeholder="الجهاز" />
                </SelectTrigger>
                <SelectContent>
                  {bodySystems.map((system) => (
                    <SelectItem key={system.value} value={system.value}>
                      {system.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[140px] border-[#eaeaea]">
                  <SelectValue placeholder="المستوى" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(searchQuery || selectedAnimal !== 'all' || selectedDifficulty !== 'all' || selectedSystem !== 'all') && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedAnimal('all');
                    setSelectedDifficulty('all');
                    setSelectedSystem('all');
                  }}
                  className="border-[#eaeaea] text-[#717171]"
                >
                  إعادة ضبط
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-[#717171]">
            تم العثور على {filteredCases.length} حالة
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          {filteredCases.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem, index) => (
                <Card
                  key={caseItem.id}
                  className="reveal opacity-0 card-hover overflow-hidden border-0 shadow-lg bg-white"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={caseItem.images[0]}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-[#06474a] text-white">
                        {caseItem.animalTypeAr}
                      </Badge>
                      <Badge className={getDifficultyColor(caseItem.difficulty)}>
                        {getDifficultyLabel(caseItem.difficulty)}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className="text-[#49c48c] border-[#49c48c]">
                        {caseItem.category}
                      </Badge>
                      <Badge variant="outline" className="text-[#06474a] border-[#06474a]">
                        {caseItem.system}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-[#06474a] mb-2 line-clamp-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-[#717171] text-sm mb-2">
                      <span className="font-medium">التشخيص:</span>{' '}
                      {caseItem.diagnosis}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#eaeaea]">
                      <div className="text-sm text-[#717171]">
                        <p>{caseItem.veterinarian}</p>
                        <p className="text-xs">{caseItem.date}</p>
                      </div>
                      <Link
                        to={`/cases/${caseItem.id}`}
                        className="text-[#49c48c] hover:text-[#3db37d] text-sm font-medium inline-flex items-center gap-1"
                      >
                        عرض التفاصيل
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-[#f0f9f4] flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-[#49c48c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#06474a] mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-[#717171]">
                لم نجد أي حالات تطابق معايير البحث. جرب تعديل الفلاتر.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
