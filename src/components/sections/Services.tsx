import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const services = [
  {
    title: 'Контент-стратегия',
    description: 'Разрабатываем системный подход к контенту: аудит, позиционирование, воронки и медиа-архитектуру бренда',
    icon: 'Target',
    features: ['Аудит контента', 'Позиционирование', 'Контент-воронки', 'Медиа-архитектура'],
    color: '#81D8D0'
  },
  {
    title: 'SMM и сообщества',
    description: 'Создаём живые сообщества в Telegram, VK и других платформах. Контент, который вовлекает и продаёт',
    icon: 'Users',
    features: ['Telegram-каналы', 'VK сообщества', 'Контент-планы', 'Вовлечение'],
    color: '#70F0DC'
  },
  {
    title: 'Визуальный контент',
    description: 'Разрабатываем визуальную систему бренда: от креативов до видео. Истории, которые запоминаются',
    icon: 'Sparkles',
    features: ['Stories', 'Reels', 'Дизайн-система', 'Видео-контент'],
    color: '#2D5F6E'
  },
  {
    title: 'Таргет и воронки',
    description: 'Настраиваем таргетированную рекламу с применением нейромаркетинга и поведенческих триггеров',
    icon: 'TrendingUp',
    features: ['VK Реклама', 'MyTarget', 'Воронки продаж', 'Триггеры'],
    color: '#EADAC1'
  },
  {
    title: 'Копирайтинг',
    description: 'Пишем тексты, которые продают и создают доверие. От постов до лонгридов и PR-материалов',
    icon: 'PenTool',
    features: ['Посты', 'Лонгриды', 'Сценарии', 'PR-тексты'],
    color: '#81D8D0'
  },
  {
    title: 'Аналитика и рост',
    description: 'Отслеживаем метрики, анализируем результаты, оптимизируем стратегию для максимального эффекта',
    icon: 'BarChart',
    features: ['Метрики', 'A/B тесты', 'Отчёты', 'Оптимизация'],
    color: '#70F0DC'
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
    <section id="services" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#F8F7F5] to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#81D8D0]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-5 py-2.5 bg-[#81D8D0]/10 border border-[#81D8D0]/20 rounded-full text-sm font-medium mb-4 text-[#2D5F6E] uppercase tracking-wide">
            Что мы делаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D5F6E] leading-tight">
            Комплексные{' '}
            <span className="bg-gradient-to-r from-[#81D8D0] to-[#2D5F6E] bg-clip-text text-transparent">
              решения
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#474C50] max-w-3xl mx-auto">
            От стратегии и производства контента до таргета и аналитики. Каждый материал работает на цель
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: service.color }} />
              
              <div className="relative bg-white/70 backdrop-blur-sm border border-[#E6E6EB] rounded-2xl p-6 md:p-8 hover:border-[#81D8D0]/40 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all" style={{ backgroundColor: `${service.color}20` }}>
                    <Icon name={service.icon} size={28} style={{ color: service.color }} />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#2D5F6E] group-hover:text-[#81D8D0] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#474C50] leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-[#F8F7F5] border border-[#E6E6EB] rounded-full text-[#474C50]">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
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
                  <div className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-2xl blur-lg opacity-20`} />
                    
                    <div className="relative bg-card border border-border/50 rounded-2xl p-5">
                      <div className="mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                          <Icon name={service.icon} size={24} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-[10px] px-2 py-1 bg-muted/50 rounded-full text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
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
              className="rounded-full h-9 w-9"
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
              className="rounded-full h-9 w-9"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button size="lg" variant="outline" className="border-2 hover:border-primary group" asChild>
            <a href="#contact">
              Обсудить проект
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}