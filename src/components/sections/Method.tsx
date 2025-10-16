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
    <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-[#F8F7F5]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(129, 216, 208, 0.08)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(112, 240, 220, 0.08)' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#81D8D0]/10 rounded-full text-sm font-medium mb-4 text-[#2D5F6E]">
            Как мы работаем
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D5F6E]">
            От стратегии до{' '}
            <span className="text-[#81D8D0]">
              результата
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#474C50] max-w-3xl mx-auto">
            Проверенный процесс, который превращает контент в актив, приносящий узнаваемость, трафик и продажи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" 
                   style={{ backgroundColor: step.color }} />
              
              <div className="relative bg-white/70 backdrop-blur-sm border border-[#E6E6EB] rounded-2xl p-6 md:p-8 hover:border-[#81D8D0]/40 hover:shadow-lg transition-all h-full">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center relative group-hover:scale-110 transition-transform" style={{ backgroundColor: `${step.color}20` }}>
                    <Icon name={step.icon} size={32} style={{ color: step.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-bold mb-2" style={{ color: step.color }}>
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#2D5F6E] group-hover:text-[#81D8D0] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#474C50] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/70 backdrop-blur-sm border border-[#81D8D0]/30 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex-1 text-left">
              <p className="text-lg md:text-xl font-bold mb-2 text-[#2D5F6E]">Готовы перестать «постить» и начать говорить?</p>
              <p className="text-[#474C50]">Запросите бесплатную консультацию по контент-стратегии</p>
            </div>
            <Button size="lg" className="w-full md:w-auto group bg-[#81D8D0] hover:bg-[#70F0DC] text-white" asChild>
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