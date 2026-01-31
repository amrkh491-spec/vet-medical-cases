import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// عدل بيانات التواصل والروابط هنا
const contactInfo = {
  phone: '', // رقم الهاتف
  email: '', // البريد الإلكتروني
  address: '', // العنوان
};

const quickLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عن الموقع' },
  { path: '/cases', label: 'الحالات البيطرية' },
  { path: '/categories', label: 'التصنيفات' },
  { path: '/articles', label: 'المقالات' },
  { path: '/contact', label: 'تواصل معنا' },
];

const categories = [
  { name: 'أمراض الكلى', path: '/categories' },
  { name: 'جراحة العظام', path: '/categories' },
  { name: 'أمراض الجلد', path: '/categories' },
  { name: 'الجهاز الهضمي', path: '/categories' },
];

export function Footer() {
  return (
    <footer className="bg-[#06474a] text-white">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#49c48c] transition-colors duration-300">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  VetMed
                </span>
                <span className="text-xs text-white/70">التعليم البيطري</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              منصة تعليمية متخصصة في نشر الحالات البيطرية للطلاب والخريجين،
              بهدف رفع مستوى الرعاية الصحية للحيوانات.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#49c48c] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#49c48c] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#49c48c] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#49c48c] transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#49c48c]"></span>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#49c48c] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#49c48c] transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#49c48c]"></span>
              التصنيفات
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    className="text-white/80 hover:text-[#49c48c] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#49c48c] transition-colors"></span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#49c48c]"></span>
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#49c48c]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">الهاتف</p>
                  <p className="text-white text-sm">
                    {contactInfo.phone || 'سيتم إضافة رقم الهاتف'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#49c48c]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">البريد الإلكتروني</p>
                  <p className="text-white text-sm">
                    {contactInfo.email || 'سيتم إضافة البريد'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#49c48c]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">العنوان</p>
                  <p className="text-white text-sm">
                    {contactInfo.address || 'سيتم إضافة العنوان'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-right">
              © 2024 VetMed. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
