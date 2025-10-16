import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#cases', label: 'Кейсы' },
    { href: '#about', label: 'О студии' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-0 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-lg' 
            : 'md:bottom-8 bottom-0 bg-transparent'
        }`}
      >
        <nav className={`container mx-auto px-4 flex items-center transition-all duration-500 ${
          isScrolled ? 'h-16 justify-between' : 'h-20 justify-between'
        }`}>
          <div className={`flex items-center gap-3 transition-all duration-500 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#81D8D0] to-[#2D5F6E] flex items-center justify-center shadow-lg shadow-[#81D8D0]/20">
              <span className="text-white font-bold text-base">CT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">ContenTA</span>
              <span className="text-xs text-muted-foreground -mt-1">Studio</span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-1 sm:gap-2 md:gap-6 px-3 sm:px-4 md:px-8 py-3 transition-all duration-500 ${
            isScrolled 
              ? 'bg-transparent rounded-none' 
              : 'bg-white/50 backdrop-blur-2xl border border-[#81D8D0]/20 shadow-lg rounded-full'
          }`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
                <span className="nav-underline" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size={isScrolled ? "default" : "lg"}
              className="hidden md:flex bg-[#2D5F6E] hover:bg-[#2D5F6E]/90 hover:shadow-lg hover:shadow-[#81D8D0]/20 transition-all text-sm" 
              asChild
            >
              <a href="#contact">Связаться</a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="container mx-auto px-4 pt-32 pb-8 flex flex-col h-full">
          <nav className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span className="text-2xl font-bold">{link.label}</span>
                <Icon name="ChevronRight" size={24} className="opacity-50" />
              </a>
            ))}
          </nav>

          <Button 
            size="lg"
            className="bg-[#2D5F6E] hover:bg-[#2D5F6E]/90 hover:shadow-lg hover:shadow-[#81D8D0]/30 transition-all text-lg h-14 w-full" 
            asChild
          >
            <a href="#contact" onClick={handleLinkClick}>
              Связаться
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </a>
          </Button>

          <div className="mt-auto pt-8 border-t border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#81D8D0] to-[#2D5F6E] flex items-center justify-center shadow-lg shadow-[#81D8D0]/20">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ContenTA</span>
                <span className="text-xs text-muted-foreground -mt-1">Studio</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Стратегическое агентство контент-маркетинга
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .nav-link {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }

        @media (min-width: 768px) {
          .nav-link {
            font-size: 0.875rem;
            padding: 0.5rem 1.25rem;
          }
        }

        .nav-link:hover {
          color: #2D5F6E;
        }

        .nav-underline {
          position: absolute;
          bottom: 0.25rem;
          left: 0.75rem;
          right: 0.75rem;
          height: 2px;
          background: linear-gradient(90deg, #81D8D0, #70F0DC);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        @media (min-width: 640px) {
          .nav-underline {
            left: 1rem;
            right: 1rem;
          }
        }

        @media (min-width: 768px) {
          .nav-underline {
            left: 1.25rem;
            right: 1.25rem;
          }
        }

        .nav-link:hover .nav-underline {
          transform: scaleX(1);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(139, 92, 246, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:active {
          transform: scale(0.98);
          background: linear-gradient(135deg, rgba(129, 216, 208, 0.1), rgba(112, 240, 220, 0.1));
          border-color: rgba(129, 216, 208, 0.4);
        }
      `}</style>
    </>
  );
}