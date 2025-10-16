import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-32 -right-32 rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }} />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-secondary) 10%, transparent)', animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-warm) 20%, transparent)', animationDelay: '4s' }} />
        
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full animate-float-gentle" style={{ borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', borderWidth: '1px', borderStyle: 'solid' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 rotate-45" style={{ borderColor: 'color-mix(in srgb, var(--theme-accent) 15%, transparent)', borderWidth: '1px', borderStyle: 'solid', animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-sm rounded-full text-sm font-medium mb-6 md:mb-8" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--theme-primary) 30%, transparent)', borderWidth: '1px', borderStyle: 'solid', color: 'var(--theme-text-dark)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--theme-primary)' }} />
            Стратегическое агентство контент-маркетинга
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight" style={{ color: 'var(--theme-text-dark)' }}>
            Контент, который строит{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary), var(--theme-accent))` }}>
                доверие
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6C100 2 200 2 298 6" stroke="url(#gradient-hero)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--theme-primary)' }} />
                    <stop offset="50%" style={{ stopColor: 'var(--theme-secondary)' }} />
                    <stop offset="100%" style={{ stopColor: 'var(--theme-accent)' }} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}и продаёт
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--theme-text)' }}>
            Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации.{' '}
            <span className="font-semibold" style={{ color: 'var(--theme-text-dark)' }}>Без шаблонов. С результатом.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Button size="lg" className="group w-full sm:w-auto text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: 'var(--theme-accent)', color: 'white' }} asChild>
              <a href="#cases">
                Посмотреть кейсы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-2" style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-text-dark)' }} asChild>
              <a href="#contact" className="hover:opacity-80" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }}>Запросить стратегию</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'Проектов' },
              { value: '180%', label: 'Рост продаж' },
              { value: '5 лет', label: 'Опыта' },
              { value: '100%', label: 'Доверие' }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 rounded-xl blur-lg transition-all" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 5%, transparent)' }} />
                <div className="relative backdrop-blur-sm rounded-xl p-5 md:p-7 hover:shadow-lg transition-all" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', borderWidth: '1px', borderStyle: 'solid' }}>
                  <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: 'var(--theme-text-dark)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--theme-text)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}