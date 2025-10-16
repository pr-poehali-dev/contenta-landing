import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    category: 'fashion',
    title: 'Бутик премиальной одежды',
    description: 'Увеличили продажи на 180% за 4 месяца через контент-воронки в Instagram и Telegram',
    metrics: '+180% продаж',
    subMetrics: '+5.2K подписчиков',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    tags: ['SMM', 'Контент-стратегия']
  },
  {
    id: 2,
    category: 'auto',
    title: 'Детейлинг-студия премиум класса',
    description: 'Создали узнаваемый бренд через визуальный сторителлинг и SMM-стратегию',
    metrics: '+240% заявок',
    subMetrics: 'ER 12.4%',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/3cc11819-dfb7-42d1-8d66-76aef0254e86.jpg',
    tags: ['Визуальный контент', 'SMM']
  },
  {
    id: 3,
    category: 'legal',
    title: 'Юридический сервис для бизнеса',
    description: 'Разработали экспертный контент для VC.ru и Telegram, привлекли целевых клиентов',
    metrics: '+95 клиентов',
    subMetrics: '8.7K просмотров',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/f7255a3b-0be3-4e18-8327-21ce251bd89d.jpg',
    tags: ['Копирайтинг', 'PR']
  },
  {
    id: 4,
    category: 'charity',
    title: 'Благотворительный фонд',
    description: 'Выстроили коммуникационную стратегию и увеличили охваты в 3 раза',
    metrics: '+300% охватов',
    subMetrics: '15K+ вовлечений',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    tags: ['Стратегия', 'SMM']
  }
];

const categories = [
  { id: 'all', label: 'Все проекты', color: 'primary' },
  { id: 'fashion', label: 'Fashion', color: 'pink' },
  { id: 'auto', label: 'Авто', color: 'blue' },
  { id: 'legal', label: 'Юридические', color: 'purple' },
  { id: 'charity', label: 'Благотворительность', color: 'indigo' }
];

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <section id="cases" className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
            Наши результаты
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Кейсы и результаты</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Реальные проекты с измеримым эффектом
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className={`capitalize transition-all ${
                  selectedCategory === cat.id 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30' 
                    : 'hover:border-primary/50'
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group relative bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {caseItem.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold rounded-full border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-semibold mb-3 uppercase tracking-wider">
                  {caseItem.category}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {caseItem.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-2xl font-bold gradient-text">{caseItem.metrics}</div>
                    <div className="text-xs text-muted-foreground mt-1">{caseItem.subMetrics}</div>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary transition-colors p-0 h-auto font-semibold"
                >
                  Читать кейс полностью
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>

              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
