import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Контент-стратегия',
    description: 'Разрабатываем системный подход к контенту: аудит, позиционирование, воронки и медиа-архитектуру бренда',
    icon: 'Target',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'SMM и управление сообществами',
    description: 'Создаём живые сообщества в Telegram, VK и других платформах. Контент, который вовлекает и продаёт',
    icon: 'Users',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Визуальный контент и сторителлинг',
    description: 'Разрабатываем визуальную систему бренда: от креативов до видео. Рассказываем истории, которые запоминаются',
    icon: 'Sparkles',
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    title: 'Telegram / VK продвижение',
    description: 'Превращаем каналы в медиа-активы бренда с контент-воронками и стратегией привлечения аудитории',
    icon: 'MessageCircle',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Таргет и воронки',
    description: 'Настраиваем таргетированную рекламу с применением нейромаркетинга и поведенческих триггеров',
    icon: 'TrendingUp',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Копирайтинг и медиатексты',
    description: 'Пишем тексты, которые продают и создают доверие. От постов до лонгридов и PR-материалов',
    icon: 'PenTool',
    gradient: 'from-orange-500 to-pink-500'
  }
];

const cases = [
  {
    id: 1,
    category: 'fashion',
    title: 'Бутик премиальной одежды',
    description: 'Увеличили продажи на 180% за 4 месяца через контент-воронки в Instagram и Telegram',
    metrics: '+180% продаж, +5.2K подписчиков',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg'
  },
  {
    id: 2,
    category: 'auto',
    title: 'Детейлинг-студия премиум класса',
    description: 'Создали узнаваемый бренд через визуальный сторителлинг и SMM-стратегию',
    metrics: '+240% заявок, ER 12.4%',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/3cc11819-dfb7-42d1-8d66-76aef0254e86.jpg'
  },
  {
    id: 3,
    category: 'legal',
    title: 'Юридический сервис для бизнеса',
    description: 'Разработали экспертный контент для VC.ru и Telegram, привлекли целевых клиентов',
    metrics: '+95 клиентов, 8.7K просмотров',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/f7255a3b-0be3-4e18-8327-21ce251bd89d.jpg'
  },
  {
    id: 4,
    category: 'charity',
    title: 'Благотворительный фонд',
    description: 'Выстроили коммуникационную стратегию и увеличили охваты в 3 раза',
    metrics: '+300% охватов, 15K+ вовлечений',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg'
  }
];

const blogPosts = [
  {
    title: 'Жёсткий SMM: как контент продаёт, а не развлекает',
    category: 'SMM',
    readTime: '7 мин',
    date: '15 октября 2024'
  },
  {
    title: 'От постов к медиа-активу: как создать контент-систему',
    category: 'Стратегия',
    readTime: '12 мин',
    date: '8 октября 2024'
  },
  {
    title: 'Нейромаркетинг в соцсетях: триггеры, которые работают',
    category: 'Стратегия',
    readTime: '9 мин',
    date: '1 октября 2024'
  },
  {
    title: 'Telegram-каналы для бизнеса: от нуля до первых продаж',
    category: 'SMM',
    readTime: '10 мин',
    date: '24 сентября 2024'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">ContenTA Studio</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
            <Button asChild>
              <a href="#contact">Связаться</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
              Стратегическое агентство контент-маркетинга
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Контент, который строит{' '}
              <span className="gradient-text">доверие и продаёт</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации. 
              Без шаблонов. С результатом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#cases">Посмотреть кейсы</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#contact">Запросить стратегию</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша философия</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ContenTA Studio — это не SMM-фабрика, а <strong>стратегический контент-партнёр</strong>. 
              Мы не «ведём соцсети», а входим в команду бренда как стратег, копирайтер и арт-директор в одном лице. 
              Создаём живой контент, который строит доверие, узнаваемость и продажи.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для вашего бренда</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover-lift cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы и результаты</h2>
            <p className="text-xl text-muted-foreground mb-8">Реальные проекты с измеримым эффектом</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'fashion', 'auto', 'legal', 'charity'].map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                  className="capitalize"
                >
                  {cat === 'all' ? 'Все проекты' : 
                   cat === 'fashion' ? 'Fashion' :
                   cat === 'auto' ? 'Авто' :
                   cat === 'legal' ? 'Юридические' : 'Благотворительность'}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">
                    {caseItem.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary">{caseItem.metrics}</span>
                    <Button variant="ghost" size="sm">
                      Читать кейс <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О студии</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">ContenTA Studio</strong> — стратегическое агентство контент-маркетинга и SMM.
                </p>
                <p>
                  Мы помогаем брендам среднего бизнеса говорить с аудиторией по-настоящему: 
                  через контент, эмоции и смыслы — без шаблонов и фальши.
                </p>
                <p>
                  Используем методики <strong>«Жёсткого SMM»</strong>, нейромаркетинг и редакционный подход. 
                  Каждый бренд получает свой уникальный голос: стиль речи, визуальную систему, тональность.
                </p>
                <p>
                  Работали с fashion-бутиками, автосервисами, юридическими компаниями, благотворительными фондами — 
                  понимаем, как говорить с любой аудиторией.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Успешных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">180%</div>
                  <div className="text-sm text-muted-foreground">Средний рост продаж</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                  <Icon name="Sparkles" size={120} className="text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-lg">
                «Контент как союз»
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог и экспертиза</h2>
            <p className="text-xl text-muted-foreground">Делимся знаниями о контент-маркетинге и SMM</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm">
                    Читать <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Готовы создать контент-систему, которая работает? Оставьте заявку, и мы обсудим ваш проект.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">hello@contenta.studio</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@contenta_studio</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Share2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">VK</div>
                    <div className="text-muted-foreground">vk.com/contenta.studio</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Ссылка на проект (необязательно)
                  </label>
                  <Input
                    id="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder="instagram.com/yourbrand"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Расскажите о вашем проекте
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, чем занимается ваш бизнес и какие задачи хотите решить"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold gradient-text">ContenTA Studio</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Share2" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm mt-8">
            © 2024 ContenTA Studio. Стратегическое агентство контент-маркетинга и SMM
          </div>
        </div>
      </footer>
    </div>
  );
}
