import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عن الموقع' },
  { path: '/cases', label: 'الحالات البيطرية' },
  { path: '/categories', label: 'التصنيفات' },
  { path: '/articles', label: 'المقالات' },
  { path: '/contact', label: 'تواصل معنا' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#06474a] flex items-center justify-center group-hover:bg-[#49c48c] transition-colors duration-300">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#06474a] leading-tight">
                VetMed
              </span>
              <span className="text-xs text-[#717171]">التعليم البيطري</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#06474a] bg-[#f0f9f4]'
                    : 'text-[#717171] hover:text-[#06474a] hover:bg-[#f0f9f4]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#49c48c] hover:bg-[#3db37d] text-white font-medium px-6"
            >
              <Link to="/cases">استكشف الحالات</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#06474a] hover:bg-[#f0f9f4] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white rounded-xl shadow-lg mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#06474a] bg-[#f0f9f4] border-r-4 border-[#49c48c]'
                    : 'text-[#717171] hover:text-[#06474a] hover:bg-[#f9f9fa]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button
                asChild
                className="w-full bg-[#49c48c] hover:bg-[#3db37d] text-white"
              >
                <Link to="/cases">استكشف الحالات</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
