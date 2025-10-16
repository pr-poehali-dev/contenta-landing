import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    category: 'fashion',
    title: 'Бутик премиальной одежды',
    description: 'Увеличили продажи на 180% за 4 месяца через контент-воронки в Instagram и Telegram',
    metrics: '+180%',
    subMetrics: 'продаж',
    details: '+5.2K подписчиков за 4 месяца',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    tags: ['SMM', 'Контент-стратегия'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    category: 'auto',
    title: 'Детейлинг-студия премиум класса',
    description: 'Создали узнаваемый бренд через визуальный сторителлинг и SMM-стратегию',
    metrics: '+240%',
    subMetrics: 'заявок',
    details: 'ER 12.4% вовлечённости',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/3cc11819-dfb7-42d1-8d66-76aef0254e86.jpg',
    tags: ['Визуальный контент', 'SMM'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    category: 'legal',
    title: 'Юридический сервис для бизнеса',
    description: 'Разработали экспертный контент для VC.ru и Telegram, привлекли целевых клиентов',
    metrics: '+95',
    subMetrics: 'клиентов',
    details: '8.7K просмотров статей',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/f7255a3b-0be3-4e18-8327-21ce251bd89d.jpg',
    tags: ['Копирайтинг', 'PR'],
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    category: 'charity',
    title: 'Благотворительный фонд',
    description: 'Выстроили коммуникационную стратегию и увеличили охваты в 3 раза',
    metrics: '+300%',
    subMetrics: 'охватов',
    details: '15K+ вовлечений',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    tags: ['Стратегия', 'SMM'],
    gradient: 'from-emerald-500 to-teal-500'
  }
];

const categories = [
  { id: 'all', label: 'Все проекты' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'auto', label: 'Авто' },
  { id: 'legal', label: 'Юридические' },
  { id: 'charity', label: 'Благотворительность' }
];

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCase, setExpandedCase] = useState<number | null>(1);

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <section id="cases" className="py-12 md:py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm text-primary font-medium mb-3 md:mb-4">
            Наши результаты
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6">Кейсы и результаты</h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto px-4">
            Реальные проекты с измеримыми результатами
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className="text-xs md:text-sm"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 cursor-pointer ${
                expandedCase === caseItem.id 
                  ? 'min-h-[180px] md:min-h-[220px]' 
                  : 'min-h-[180px] md:min-h-[220px]'
              }`}
              onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${caseItem.image})`,
                  filter: 'brightness(0.4)'
                }}
              />
              
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-60 mix-blend-multiply`} />
              
              <div className="relative h-full flex flex-col justify-between p-5 md:p-8 text-white">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    {caseItem.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">{caseItem.title}</h3>
                  <p className="text-sm md:text-base text-white/90 mb-3 md:mb-4 max-w-2xl">
                    {caseItem.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl md:text-5xl font-bold">{caseItem.metrics}</div>
                    <div className="text-xs md:text-sm text-white/80">{caseItem.subMetrics}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                    <Icon name="TrendingUp" size={16} />
                    <span className="hidden md:inline">{caseItem.details}</span>
                  </div>
                </div>

                {expandedCase === caseItem.id && (
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20 animate-in fade-in slide-in-from-top-2">
                    <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3">
                      <strong>Детали проекта:</strong> {caseItem.details}
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white text-xs md:text-sm"
                    >
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon 
                  name={expandedCase === caseItem.id ? 'ChevronUp' : 'ChevronDown'} 
                  size={20} 
                  className="text-white" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 hover:border-primary hover:bg-primary/5 transition-all"
          >
            Смотреть все кейсы
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
