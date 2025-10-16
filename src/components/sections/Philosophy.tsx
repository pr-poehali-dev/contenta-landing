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
    <section id="philosophy" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#F8F7F5] to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EADAC1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#81D8D0]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block px-5 py-2.5 bg-[#81D8D0]/10 border border-[#81D8D0]/20 rounded-full text-sm font-medium mb-4 text-[#2D5F6E] uppercase tracking-wide">
            Наш подход
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D5F6E] leading-tight">
            ContenTA Studio — это не SMM-фабрика, а{' '}
            <span className="bg-gradient-to-r from-[#81D8D0] to-[#2D5F6E] bg-clip-text text-transparent">
              стратегический партнёр
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#474C50]">
            Мы создаём живой контент, который строит доверие и продаёт. 
            С ContenTA бренд становится узнаваемым, узнаваемость — деньгами, а аудитория — сообществом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-[#81D8D0]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/70 backdrop-blur-sm border border-[#E6E6EB] rounded-2xl p-6 md:p-8 hover:border-[#81D8D0]/40 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-xl bg-[#81D8D0]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={value.icon} size={28} className="text-[#2D5F6E]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#2D5F6E] group-hover:text-[#81D8D0] transition-colors">
                  {value.title}
                </h3>
                <p className="text-[#474C50] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-[#EADAC1]/20 border border-[#81D8D0]/20 rounded-2xl p-6 md:p-8 max-w-4xl">
            <p className="text-lg md:text-xl font-semibold text-[#2D5F6E] mb-2">
              Многоуровневый опыт
            </p>
            <p className="text-[#474C50]">
              Работали с фондами, юридическими сервисами, бутиками одежды, детейлинг-студиями, автосервисами — 
              понимаем, как говорить с любой аудиторией: от мам в декрете до владельцев Porsche
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}