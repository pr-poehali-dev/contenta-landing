import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-primary font-medium mb-4 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
            Стратегическое агентство контент-маркетинга
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Контент, который<br className="hidden md:block" /> строит{' '}
            <span className="relative inline-block">
              <span className="gradient-text">доверие</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C100 2 200 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}и продаёт
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации. 
            <span className="text-foreground font-semibold"> Без шаблонов. С результатом.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-lg px-8 h-14 bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all group" asChild>
              <a href="#cases">
                Посмотреть кейсы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 hover:border-primary hover:bg-primary/5 transition-all" asChild>
              <a href="#contact">Запросить стратегию</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {[
              { value: '50+', label: 'Проектов' },
              { value: '180%', label: 'Рост продаж' },
              { value: '5 лет', label: 'Опыта' },
              { value: '100%', label: 'Доверие' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
