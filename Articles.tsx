import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, BookOpen, Clock, User } from 'lucide-react';
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

// استورد مقالاتك هنا
// import { articles } from '@/data/cases';

const articleCategories = [
  { value: 'all', label: 'جميع التصنيفات' },
  { value: 'الوقاية', label: 'الوقاية' },
  { value: 'التغذية', label: 'التغذية' },
  { value: 'تعليمي', label: 'تعليمي' },
  { value: 'صحة عامة', label: 'صحة عامة' },
];

// بيانات مؤقتة - استبدلها ببياناتك
const articles: any[] = [];

export function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(articles);

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
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory]);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-[#06474a] text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto reveal opacity-0">
            <Badge className="bg-white/10 text-white mb-4">المقالات التعليمية</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              مقالات تعليمية في الطب البيطري
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              مجموعة من المقالات التعليمية الشاملة في مختلف تخصصات الطب البيطري
              للطلاب والخريجين
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-[#eaeaea] sticky top-16 md:top-20 z-40">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717171]" />
              <Input
                placeholder="البحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c]"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px] border-[#eaeaea]">
                <SelectValue placeholder="التصنيف" />
              </SelectTrigger>
              <SelectContent>
                {articleCategories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="border-[#eaeaea] text-[#717171]"
              >
                إعادة ضبط
              </Button>
            )}
          </div>
          <div className="mt-4 text-sm text-[#717171]">
            تم العثور على {filteredArticles.length} مقال
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {!searchQuery && selectedCategory === 'all' && featuredArticle && (
        <section className="section-padding bg-[#f9f9fa]">
          <div className="container-custom mx-auto">
            <div className="mb-8 reveal opacity-0">
              <Badge className="bg-[#f0f9f4] text-[#06474a]">مقال مميز</Badge>
            </div>
            <Card className="reveal opacity-0 overflow-hidden border-0 shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-[#49c48c] text-white">
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-sm text-[#717171]">{featuredArticle.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#06474a] mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-[#717171] mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#717171]" />
                      <span className="text-sm text-[#717171]">{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#717171]" />
                      <span className="text-sm text-[#717171]">5 دقائق قراءة</span>
                    </div>
                  </div>
                  <Button className="bg-[#06474a] hover:bg-[#0a5a5e] text-white w-fit">
                    قراءة المقال
                    <ChevronLeft className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="mb-8 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a]">جميع المقالات</Badge>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="reveal opacity-0 card-hover overflow-hidden border-[#eaeaea]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-[#49c48c] border-[#49c48c]">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-[#717171]">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#06474a] mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[#717171] text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#717171]" />
                        <span className="text-sm text-[#717171]">{article.author}</span>
                      </div>
                      <Link
                        to="#"
                        className="text-[#49c48c] hover:text-[#3db37d] text-sm font-medium inline-flex items-center gap-1"
                      >
                        قراءة
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#f9f9fa] rounded-2xl border border-dashed border-[#eaeaea]">
              <BookOpen className="w-16 h-16 text-[#49c48c] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[#06474a] mb-2">
                لا توجد مقالات
              </h3>
              <p className="text-[#717171]">
                سيتم إضافة المقالات قريباً
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">التصنيفات</Badge>
            <h2 className="text-3xl font-bold text-[#06474a] mb-4">
              تصفح المقالات حسب التصنيف
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {articleCategories.slice(1).map((cat, index) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="card-hover border-[#eaeaea] h-full">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-8 h-8 text-[#49c48c] mx-auto mb-3" />
                    <h3 className="font-semibold text-[#06474a]">{cat.label}</h3>
                    <p className="text-sm text-[#49c48c] mt-2">
                      0 مقال
                    </p>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#06474a]">
        <div className="container-custom mx-auto">
          <div className="reveal opacity-0 text-center max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-[#49c48c] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="text-white/80 mb-8">
              احصل على أحدث المقالات والحالات البيطرية مباشرة إلى بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#49c48c] hover:bg-[#3db37d] text-white whitespace-nowrap">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
