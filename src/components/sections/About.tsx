import Icon from '@/components/ui/icon';

export default function About() {
  const stats = [
    { icon: 'Users', value: '50+', label: 'Успешных проектов', gradient: 'from-purple-500 to-pink-500' },
    { icon: 'TrendingUp', value: '180%', label: 'Средний рост продаж', gradient: 'from-blue-500 to-purple-500' },
    { icon: 'Clock', value: '5 лет', label: 'Опыта в SMM', gradient: 'from-pink-500 to-orange-500' },
    { icon: 'Award', value: '100%', label: 'Довольных клиентов', gradient: 'from-indigo-500 to-blue-500' }
  ];

  const team = [
    {
      name: 'Анастасия',
      role: 'Стратег и основатель',
      description: '7 лет в контент-маркетинге, работала с премиум-брендами и стартапами',
      icon: 'Sparkles'
    },
    {
      name: 'Дмитрий',
      role: 'Креативный директор',
      description: 'Визуальный сторителлинг и дизайн контента для социальных сетей',
      icon: 'Palette'
    },
    {
      name: 'Мария',
      role: 'Копирайтер',
      description: 'Тексты, которые продают. Эксперт в нейромаркетинге и триггерах',
      icon: 'PenTool'
    }
  ];

  const clients = [
    'Бутики одежды',
    'Автосервисы и детейлинг',
    'Юридические компании',
    'Благотворительные фонды',
    'Beauty и медицинские клиники',
    'Образовательные проекты'
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-4 text-primary">
              О студии
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              ContenTA Studio —{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                команда экспертов
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы помогаем брендам среднего бизнеса говорить с аудиторией по-настоящему: 
              через контент, эмоции и смыслы — без шаблонов и фальши
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all`} />
                <div className="relative bg-card border border-border/50 rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-all">
                  <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-card border border-border/50 rounded-3xl p-6 hover:border-primary/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={member.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">С кем мы работаем</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-br from-card to-muted/30 border border-border/50 rounded-full text-sm md:text-base font-medium hover:border-primary/30 hover:scale-105 transition-all"
                >
                  {client}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              География: Москва, Санкт-Петербург, Екатеринбург, Казань, Пермь + клиенты в ближнем зарубежье
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
