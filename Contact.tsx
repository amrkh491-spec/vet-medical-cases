import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// عدل بيانات التواصل هنا
const contactInfo = {
  phone: '', // أضف رقم الهاتف
  email: '', // أضف البريد الإلكتروني
  address: '', // أضف العنوان
  workingHours: 'الأحد - الخميس: 9:00 ص - 5:00 م',
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('تم إرسال رسالتك بنجاح!');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-[#06474a] text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto reveal opacity-0">
            <Badge className="bg-white/10 text-white mb-4">تواصل معنا</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نحن هنا لمساعدتك
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              لديك سؤال أو اقتراح؟ لا تتردد في التواصل معنا. فريقنا جاهز
              لمساعدتك في أي وقت.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: 'الهاتف',
                content: contactInfo.phone || 'سيتم إضافة رقم الهاتف',
                subContent: 'متاح 24/7',
              },
              {
                icon: Mail,
                title: 'البريد الإلكتروني',
                content: contactInfo.email || 'سيتم إضافة البريد الإلكتروني',
                subContent: 'نرد خلال 24 ساعة',
              },
              {
                icon: MapPin,
                title: 'العنوان',
                content: contactInfo.address || 'سيتم إضافة العنوان',
                subContent: '',
              },
              {
                icon: Clock,
                title: 'ساعات العمل',
                content: contactInfo.workingHours.split(':')[0],
                subContent: contactInfo.workingHours.split(':')[1] || '',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="reveal opacity-0 card-hover border-[#eaeaea] text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#f0f9f4] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#49c48c]" />
                  </div>
                  <h3 className="font-semibold text-[#06474a] mb-2">{item.title}</h3>
                  <p className="text-[#282828]">{item.content}</p>
                  {item.subContent && (
                    <p className="text-sm text-[#717171]">{item.subContent}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#f9f9fa]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="reveal opacity-0">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-[#f0f9f4] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-[#49c48c]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#06474a] mb-2">
                        تم إرسال رسالتك بنجاح!
                      </h3>
                      <p className="text-[#717171] mb-6">
                        شكرًا لتواصلك معنا. سنعود إليك في أقرب وقت ممكن.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="bg-[#06474a] hover:bg-[#0a5a5e] text-white"
                      >
                        إرسال رسالة أخرى
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#06474a] mb-6">
                        أرسل لنا رسالة
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-[#06474a]">
                              الاسم الكامل
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="أدخل اسمك"
                              required
                              className="border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-[#06474a]">
                              البريد الإلكتروني
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                              className="border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c]"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-[#06474a]">
                            الموضوع
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="موضوع الرسالة"
                            required
                            className="border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-[#06474a]">
                            الرسالة
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="اكتب رسالتك هنا..."
                            required
                            rows={6}
                            className="border-[#eaeaea] focus:border-[#49c48c] focus:ring-[#49c48c] resize-none"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#49c48c] hover:bg-[#3db37d] text-white font-semibold py-6"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              جاري الإرسال...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              إرسال الرسالة
                              <Send className="w-5 h-5" />
                            </span>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="reveal opacity-0 space-y-8">
              <div>
                <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">
                  لماذا تتواصل معنا؟
                </Badge>
                <h2 className="text-3xl font-bold text-[#06474a] mb-4">
                  نحن نستمع إليك
                </h2>
                <p className="text-[#717171] leading-relaxed">
                  نحن نقدر ملاحظاتك واقتراحاتك. سواء كنت طالبًا بيطريًا تبحث عن
                  مساعدة في حالة معينة، أو لديك اقتراح لتحسين المنصة، أو ترغب في
                  المشاركة كطبيب بيطري متخصص، فريقنا جاهز لمساعدتك.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-[#06474a]">
                  يمكنك التواصل معنا للآتي:
                </h3>
                <ul className="space-y-3">
                  {[
                    'الاستفسارات حول الحالات البيطرية',
                    'اقتراحات لتحسين المنصة',
                    'الانضمام كطبيب بيطري متخصص',
                    'الشراكات والتعاون',
                    'الدعم الفني',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[#282828]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#49c48c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-64 bg-[#f0f9f4] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#49c48c] mx-auto mb-2" />
                    <p className="text-[#06474a] font-semibold">سيتم إضافة الموقع</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal opacity-0">
            <Badge className="bg-[#f0f9f4] text-[#06474a] mb-4">الأسئلة الشائعة</Badge>
            <h2 className="text-3xl font-bold text-[#06474a] mb-4">
              أسئلة متكررة
            </h2>
            <p className="text-[#717171]">
              إليك بعض الأسئلة الشائعة التي قد تهمك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'هل المحتوى مجاني؟',
                a: 'نعم، جميع الحالات والمقالات متاحة مجانًا للطلاب والخريجين.',
              },
              {
                q: 'كيف يمكنني المشاركة كطبيب بيطري؟',
                a: 'يمكنك التواصل معنا عبر النموذج أعلاه وسنرشدك لخطوات المشاركة.',
              },
              {
                q: 'هل يمكنني استخدام الحالات للتدريس؟',
                a: 'نعم، مع ذكر المصدر. نحن نشجع استخدام محتوانا للأغراض التعليمية.',
              },
              {
                q: 'هل هناك تطبيق للهاتف؟',
                a: 'نعمل حاليًا على تطوير تطبيق للهاتف. تابعنا للتحديثات.',
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="reveal opacity-0 border-[#eaeaea]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#06474a] mb-2">{faq.q}</h3>
                  <p className="text-[#717171] text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
