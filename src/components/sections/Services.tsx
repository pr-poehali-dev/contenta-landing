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
    <section id="services" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="absolute inset-0 opacity-50" style={{ background: `linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-alt), var(--theme-bg))` }} />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-5 py-2.5 rounded-full text-sm font-medium mb-4 uppercase tracking-wide" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', borderWidth: '1px', borderStyle: 'solid', color: 'var(--theme-text-dark)' }}>
            Что мы делаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--theme-text-dark)' }}>
            Комплексные{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}>
              решения
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--theme-text)' }}>
            От стратегии и производства контента до таргета и аналитики. Каждый материал работает на цель
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: 'var(--theme-primary)' }} />
              
              <div className="relative backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all h-full flex flex-col" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)' }}>
                    <Icon name={service.icon} size={28} style={{ color: 'var(--theme-primary)' }} />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors" style={{ color: 'var(--theme-text-dark)' }}>
                  {service.title}
                </h3>
                
                <p className="leading-relaxed mb-5 flex-1" style={{ color: 'var(--theme-text)' }}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--theme-bg-alt)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid', color: 'var(--theme-text)' }}>
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