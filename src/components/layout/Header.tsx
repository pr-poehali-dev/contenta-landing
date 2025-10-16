import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-0 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-lg' 
          : 'bottom-8 bg-transparent'
      }`}
    >
      <nav className={`container mx-auto px-4 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        <div className={`transition-all duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">ContenTA</span>
              <span className="text-xs text-muted-foreground -mt-1">Studio</span>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-1 sm:gap-2 md:gap-6 rounded-full px-3 sm:px-4 md:px-8 py-3 transition-all duration-500 ${
          isScrolled 
            ? 'bg-transparent' 
            : 'bg-background/40 backdrop-blur-2xl border border-border/50 shadow-2xl'
        }`}>
          <a href="#services" className="nav-link">
            Услуги
            <span className="nav-underline" />
          </a>
          <a href="#cases" className="nav-link">
            Кейсы
            <span className="nav-underline" />
          </a>
          <a href="#about" className="nav-link">
            О нас
            <span className="nav-underline" />
          </a>
          <a href="#blog" className="nav-link hidden sm:block">
            Блог
            <span className="nav-underline" />
          </a>
          <Button 
            size={isScrolled ? "default" : "lg"}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all ml-2 text-xs sm:text-sm" 
            asChild
          >
            <a href="#contact">Связаться</a>
          </Button>
        </div>

        <div className={`transition-all duration-500 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="w-20" />
        </div>
      </nav>

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
          color: hsl(var(--primary));
        }

        .nav-underline {
          position: absolute;
          bottom: 0.25rem;
          left: 0.75rem;
          right: 0.75rem;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
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
      `}</style>
    </header>
  );
}
