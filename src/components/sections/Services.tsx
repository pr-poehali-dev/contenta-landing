import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
            Что мы делаем
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для вашего бренда. Каждый материал работает на цель
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </div>
    </section>
  );
}
