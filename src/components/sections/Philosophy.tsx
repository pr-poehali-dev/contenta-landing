import Icon from '@/components/ui/icon';

export default function Philosophy() {
  const values = [
    {
      icon: 'Target',
      title: 'Стратегия, а не лента постов',
      description: 'Контент-воронки и медиа-архитектура от Telegram и VK до PR и VC.ru'
    },
    {
      icon: 'Zap',
      title: 'Жёсткий SMM + нейромаркетинг',
      description: 'Методики Дэна Кеннеди и поведенческие триггеры для реакции, а не пролистываний'
    },
    {
      icon: 'MessageCircle',
      title: 'Редакционный подход',
      description: 'Свой голос для каждого бренда: стиль речи, визуальная система, тональность'
    },
    {
      icon: 'Users',
      title: 'Контент как союз',
      description: 'Мы не «ведём соцсети», а входим в команду — как стратег, копирайтер и арт-директор'
    }
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="absolute inset-0 opacity-50" style={{ background: `linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-alt), var(--theme-bg))` }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-warm) 20%, transparent)' }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block px-5 py-2.5 rounded-full text-sm font-medium mb-4 uppercase tracking-wide" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', borderWidth: '1px', borderStyle: 'solid', color: 'var(--theme-text-dark)' }}>
            Наш подход
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--theme-text-dark)' }}>
            ContenTA Studio — это не SMM-фабрика, а{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}>
              стратегический партнёр
            </span>
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--theme-text)' }}>
            Мы создаём живой контент, который строит доверие и продаёт. 
            С ContenTA бренд становится узнаваемым, узнаваемость — деньгами, а аудитория — сообществом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 5%, transparent)' }} />
              <div className="relative backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all h-full" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }}>
                  <Icon name={value.icon} size={28} style={{ color: 'var(--theme-text-dark)' }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors" style={{ color: 'var(--theme-text-dark)' }}>
                  {value.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--theme-text)' }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block rounded-2xl p-6 md:p-8 max-w-4xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-warm) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)', borderWidth: '1px', borderStyle: 'solid' }}>
            <p className="text-lg md:text-xl font-semibold mb-2" style={{ color: 'var(--theme-text-dark)' }}>
              Многоуровневый опыт
            </p>
            <p style={{ color: 'var(--theme-text)' }}>
              Работали с фондами, юридическими сервисами, бутиками одежды, детейлинг-студиями, автосервисами — 
              понимаем, как говорить с любой аудиторией: от мам в декрете до владельцев Porsche
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}