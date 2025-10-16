import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Method() {
  const steps = [
    {
      number: '01',
      title: 'Анализ и стратегия',
      description: 'Изучаем бизнес, аудиторию, конкурентов. Выстраиваем контент-воронку и медиа-архитектуру',
      icon: 'Search',
      color: '#81D8D0'
    },
    {
      number: '02',
      title: 'Бренд-редакция',
      description: 'Создаём уникальный голос бренда: стиль речи, визуальную систему, рубрики и тональность',
      icon: 'Pen',
      color: '#70F0DC'
    },
    {
      number: '03',
      title: 'Производство контента',
      description: 'Запускаем контент-систему: посты, статьи, Stories, Reels — всё работает на результат',
      icon: 'Sparkles',
      color: '#2D5F6E'
    },
    {
      number: '04',
      title: 'Масштабирование',
      description: 'Анализируем результаты, оптимизируем, расширяем охваты. Растём вместе с вашим бизнесом',
      icon: 'TrendingUp',
      color: '#EADAC1'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg-alt)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 8%, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-secondary) 8%, transparent)' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', color: 'var(--theme-text-dark)' }}>
            Как мы работаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--theme-text-dark)' }}>
            От стратегии до{' '}
            <span style={{ color: 'var(--theme-primary)' }}>
              результата
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--theme-text)' }}>
            Проверенный процесс, который превращает контент в актив, приносящий узнаваемость, трафик и продажи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" 
                   style={{ backgroundColor: 'var(--theme-primary)' }} />
              
              <div className="relative backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all h-full" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center relative group-hover:scale-110 transition-transform" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)' }}>
                    <Icon name={step.icon} size={32} style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-bold mb-2" style={{ color: 'var(--theme-primary)' }}>
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors" style={{ color: 'var(--theme-text-dark)' }}>
                      {step.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--theme-text)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'color-mix(in srgb, var(--theme-primary) 30%, transparent)', borderWidth: '1px', borderStyle: 'solid' }}>
            <div className="flex-1 text-left">
              <p className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--theme-text-dark)' }}>Готовы перестать «постить» и начать говорить?</p>
              <p style={{ color: 'var(--theme-text)' }}>Запросите бесплатную консультацию по контент-стратегии</p>
            </div>
            <Button size="lg" className="w-full md:w-auto group text-white" style={{ backgroundColor: 'var(--theme-accent)' }} asChild>
              <a href="#contact">
                Запросить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}