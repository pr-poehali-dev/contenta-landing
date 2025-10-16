import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const services = [
  {
    title: 'Контент-стратегия',
    description: 'Разрабатываем системный подход к контенту: аудит, позиционирование, воронки и медиа-архитектуру бренда',
    icon: 'Target',
    gradient: 'from-purple-500 to-pink-500',
    color: 'purple'
  },
  {
    title: 'SMM и управление сообществами',
    description: 'Создаём живые сообщества в Telegram, VK и других платформах. Контент, который вовлекает и продаёт',
    icon: 'Users',
    gradient: 'from-blue-500 to-purple-500',
    color: 'blue'
  },
  {
    title: 'Визуальный контент и сторителлинг',
    description: 'Разрабатываем визуальную систему бренда: от креативов до видео. Рассказываем истории, которые запоминаются',
    icon: 'Sparkles',
    gradient: 'from-pink-500 to-orange-500',
    color: 'pink'
  },
  {
    title: 'Telegram / VK продвижение',
    description: 'Превращаем каналы в медиа-активы бренда с контент-воронками и стратегией привлечения аудитории',
    icon: 'MessageCircle',
    gradient: 'from-indigo-500 to-blue-500',
    color: 'indigo'
  },
  {
    title: 'Таргет и воронки',
    description: 'Настраиваем таргетированную рекламу с применением нейромаркетинга и поведенческих триггеров',
    icon: 'TrendingUp',
    gradient: 'from-purple-500 to-indigo-500',
    color: 'purple'
  },
  {
    title: 'Копирайтинг и медиатексты',
    description: 'Пишем тексты, которые продают и создают доверие. От постов до лонгридов и PR-материалов',
    icon: 'PenTool',
    gradient: 'from-orange-500 to-pink-500',
    color: 'orange'
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-12 md:py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm text-primary font-medium mb-3 md:mb-4">
            Что мы делаем
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6">Наши услуги</h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Комплексные решения для вашего бренда. Каждый материал работает на цель
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-3xl p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-${service.color}-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500`} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary transition-colors p-0 h-auto font-semibold"
                >
                  Подробнее 
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>

              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="relative bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-2xl p-5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03] rounded-2xl`} />
                    
                    <div className="relative z-10">
                      <div className="mb-4 relative">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon name={service.icon} size={24} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <Button 
                        variant="ghost" 
                        className="text-primary p-0 h-auto font-semibold text-sm"
                      >
                        Подробнее 
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 h-9 w-9"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <div className="flex gap-1.5">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 h-9 w-9"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}