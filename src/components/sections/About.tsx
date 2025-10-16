import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

export default function About() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const slideWidth = slider.scrollWidth / 3;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      
      if (scrollAmount >= slideWidth) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="order-1 lg:order-1">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm text-primary font-medium mb-4 md:mb-6">
              О студии
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">
              Мы создаём контент,<br />который <span className="gradient-text">работает</span>
            </h2>
            
            <div className="space-y-3 md:space-y-6 text-sm md:text-base lg:text-lg">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">ContenTA Studio</strong> — стратегическое агентство контент-маркетинга и SMM.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Мы помогаем брендам среднего бизнеса говорить с аудиторией по-настоящему: 
                через контент, эмоции и смыслы — <strong className="text-foreground">без шаблонов и фальши</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Используем методики <strong className="text-foreground font-semibold">«Жёсткого SMM»</strong>, 
                нейромаркетинг и редакционный подход. Каждый бренд получает свой уникальный голос: 
                стиль речи, визуальную систему, тональность.
              </p>
              
              <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <p className="text-foreground font-semibold italic text-sm md:text-base leading-relaxed">
                  «Работали с fashion-бутиками, автосервисами, юридическими компаниями, 
                  благотворительными фондами — понимаем, как говорить с любой аудиторией»
                </p>
              </div>

              <div className="lg:hidden mt-4 md:mt-6">
                <div className="aspect-[4/3] md:aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-1 shadow-xl shadow-purple-500/20">
                  <div className="w-full h-full bg-card rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
                    <Icon name="Sparkles" size={60} className="text-primary/20 mb-3" />
                    <div className="text-center relative z-10">
                      <div className="text-lg md:text-xl font-bold mb-1.5">Контент как союз</div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Мы не ведём соцсети,<br />мы входим в команду
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-12">
              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Успешных проектов', icon: 'Target' },
                  { value: '180%', label: 'Средний рост продаж', icon: 'TrendingUp' },
                  { value: '5 лет', label: 'На рынке', icon: 'Award' }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                      <Icon name={stat.icon} size={24} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div 
                ref={sliderRef}
                className="md:hidden flex gap-3 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { value: '50+', label: 'Успешных проектов', icon: 'Target' },
                  { value: '180%', label: 'Средний рост продаж', icon: 'TrendingUp' },
                  { value: '5 лет', label: 'На рынке', icon: 'Award' },
                  { value: '50+', label: 'Успешных проектов', icon: 'Target' },
                  { value: '180%', label: 'Средний рост продаж', icon: 'TrendingUp' },
                  { value: '5 лет', label: 'На рынке', icon: 'Award' }
                ].map((stat, i) => (
                  <div key={i} className="flex-shrink-0 w-[240px] snap-start">
                    <div className="bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-xl p-4">
                      <Icon name={stat.icon} size={20} className="text-primary mb-2" />
                      <div className="text-2xl font-bold gradient-text mb-1.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative hidden lg:block">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/20">
                <div className="w-full h-full bg-card rounded-3xl flex flex-col items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
                  <Icon name="Sparkles" size={140} className="text-primary/20 mb-6 animate-float" />
                  <div className="text-center relative z-10">
                    <div className="text-2xl font-bold mb-2">Контент как союз</div>
                    <p className="text-sm text-muted-foreground">
                      Мы не ведём соцсети,<br />мы входим в команду
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-purple-500/30 hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={24} />
                  <span>Без шаблонов</span>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-pink-500/30 hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={24} />
                  <span>С результатом</span>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -inset-8 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}