import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Method() {
  const steps = [
    {
      number: '01',
      title: 'Анализ и стратегия',
      description: 'Изучаем бизнес, аудиторию, конкурентов. Выстраиваем контент-воронку и медиа-архитектуру',
      icon: 'Search',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      number: '02',
      title: 'Бренд-редакция',
      description: 'Создаём уникальный голос бренда: стиль речи, визуальную систему, рубрики и тональность',
      icon: 'Pen',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      number: '03',
      title: 'Производство контента',
      description: 'Запускаем контент-систему: посты, статьи, Stories, Reels — всё работает на результат',
      icon: 'Sparkles',
      gradient: 'from-indigo-500 to-pink-500'
    },
    {
      number: '04',
      title: 'Масштабирование',
      description: 'Анализируем результаты, оптимизируем, расширяем охваты. Растём вместе с вашим бизнесом',
      icon: 'TrendingUp',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-4 text-primary">
            Как мы работаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            От стратегии до{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              результата
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Проверенный процесс, который превращает контент в актив, приносящий узнаваемость, трафик и продажи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500" 
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': step.gradient.split(' ')[1], '--tw-gradient-to': step.gradient.split(' ')[3] } as any} />
              
              <div className="relative bg-card border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all h-full">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-10 flex items-center justify-center relative group-hover:scale-110 transition-transform`}>
                    <Icon name={step.icon} size={32} className={`absolute text-transparent bg-gradient-to-br ${step.gradient} bg-clip-text`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } as any} />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-sm font-bold mb-2 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex-1 text-left">
              <p className="text-lg md:text-xl font-bold mb-2">Готовы перестать «постить» и начать говорить?</p>
              <p className="text-muted-foreground">Запросите бесплатную консультацию по контент-стратегии</p>
            </div>
            <Button size="lg" className="w-full md:w-auto group" asChild>
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
