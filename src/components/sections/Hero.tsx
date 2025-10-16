import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-bl from-purple-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-[600px] h-[600px] -bottom-40 -left-40 bg-gradient-to-tr from-pink-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium mb-6 md:mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Стратегическое агентство контент-маркетинга
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            Контент, который строит{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                доверие
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6C100 2 200 2 298 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}и продаёт
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto">
            Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации.{' '}
            <span className="text-foreground font-semibold">Без шаблонов. С результатом.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Button size="lg" className="group w-full sm:w-auto text-base" asChild>
              <a href="#cases">
                Посмотреть кейсы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-2" asChild>
              <a href="#contact">Запросить стратегию</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Проектов' },
              { value: '180%', label: 'Рост продаж' },
              { value: '5 лет', label: 'Опыта' },
              { value: '100%', label: 'Доверие' }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
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
