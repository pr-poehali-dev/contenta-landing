import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const services = [
  {
    title: 'Контент-стратегия',
    description: 'Разрабатываем системный подход к контенту: аудит, позиционирование, воронки и медиа-архитектуру бренда',
    icon: 'Target',
    features: ['Аудит контента', 'Позиционирование', 'Контент-воронки', 'Медиа-архитектура'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'SMM и сообщества',
    description: 'Создаём живые сообщества в Telegram, VK и других платформах. Контент, который вовлекает и продаёт',
    icon: 'Users',
    features: ['Telegram-каналы', 'VK сообщества', 'Контент-планы', 'Вовлечение'],
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Визуальный контент',
    description: 'Разрабатываем визуальную систему бренда: от креативов до видео. Истории, которые запоминаются',
    icon: 'Sparkles',
    features: ['Stories', 'Reels', 'Дизайн-система', 'Видео-контент'],
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    title: 'Таргет и воронки',
    description: 'Настраиваем таргетированную рекламу с применением нейромаркетинга и поведенческих триггеров',
    icon: 'TrendingUp',
    features: ['VK Реклама', 'MyTarget', 'Воронки продаж', 'Триггеры'],
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Копирайтинг',
    description: 'Пишем тексты, которые продают и создают доверие. От постов до лонгридов и PR-материалов',
    icon: 'PenTool',
    features: ['Посты', 'Лонгриды', 'Сценарии', 'PR-тексты'],
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    title: 'Аналитика и рост',
    description: 'Отслеживаем метрики, анализируем результаты, оптимизируем стратегию для максимального эффекта',
    icon: 'BarChart',
    features: ['Метрики', 'A/B тесты', 'Отчёты', 'Оптимизация'],
    gradient: 'from-indigo-500 to-blue-500'
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
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-4 text-primary">
            Что мы делаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Комплексные{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              решения
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            От стратегии и производства контента до таргета и аналитики. Каждый материал работает на цель
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              <div className="relative bg-card border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-muted/50 rounded-full text-muted-foreground">
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
