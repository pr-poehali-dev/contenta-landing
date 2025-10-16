import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#F8F7F5] via-background to-background">
        <div className="absolute w-[600px] h-[600px] -top-32 -right-32 bg-[#81D8D0]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-[#70F0DC]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#EADAC1]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-20 right-10 w-32 h-32 border border-[#81D8D0]/20 rounded-full animate-float-gentle" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-[#2D5F6E]/15 rotate-45" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#81D8D0]/10 backdrop-blur-sm border border-[#81D8D0]/30 rounded-full text-sm font-medium mb-6 md:mb-8 text-[#2D5F6E]">
            <span className="w-2 h-2 bg-[#81D8D0] rounded-full animate-pulse" />
            Стратегическое агентство контент-маркетинга
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight text-[#2D5F6E]">
            Контент, который строит{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#81D8D0] via-[#70F0DC] to-[#2D5F6E] bg-clip-text text-transparent">
                доверие
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6C100 2 200 2 298 6" stroke="url(#gradient-hero)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#81D8D0" />
                    <stop offset="50%" stopColor="#70F0DC" />
                    <stop offset="100%" stopColor="#2D5F6E" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}и продаёт
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#474C50] mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации.{' '}
            <span className="text-[#2D5F6E] font-semibold">Без шаблонов. С результатом.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Button size="lg" className="group w-full sm:w-auto text-base h-12 px-8 bg-[#2D5F6E] hover:bg-[#2D5F6E]/90 shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="#cases">
                Посмотреть кейсы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-2 border-[#81D8D0] text-[#2D5F6E] hover:bg-[#81D8D0]/10" asChild>
              <a href="#contact">Запросить стратегию</a>
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
                <div className="absolute inset-0 bg-[#81D8D0]/5 rounded-xl blur-lg group-hover:bg-[#81D8D0]/10 transition-all" />
                <div className="relative bg-white/60 backdrop-blur-sm border border-[#81D8D0]/20 rounded-xl p-5 md:p-7 hover:border-[#81D8D0]/40 hover:shadow-lg transition-all">
                  <div className="text-3xl md:text-5xl font-bold text-[#2D5F6E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#474C50] font-medium uppercase tracking-wide">{stat.label}</div>
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