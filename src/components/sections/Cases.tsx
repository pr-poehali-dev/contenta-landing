import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    category: 'fashion',
    title: 'Бутик премиальной одежды',
    challenge: 'Низкая узнаваемость бренда и отсутствие системного подхода к контенту',
    solution: 'Разработали контент-стратегию с фокусом на Stories и Reels, создали воронки продаж через контент',
    result: '+180% к продажам за 4 месяца, +5.2K целевых подписчиков, ER 8.3%',
    metrics: [
      { value: '+180%', label: 'Рост продаж' },
      { value: '5.2K', label: 'Подписчиков' },
      { value: '8.3%', label: 'Вовлечённость' }
    ],
    tags: ['SMM', 'Контент-воронки', 'Визуальный контент'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    category: 'auto',
    title: 'Детейлинг-студия',
    challenge: 'Нет отстройки от конкурентов, слабый визуальный контент',
    solution: 'Создали уникальную визуальную систему, запустили Telegram-канал с экспертным контентом',
    result: '+240% к заявкам, 12.4% вовлечённость, узнаваемый бренд в премиум-сегменте',
    metrics: [
      { value: '+240%', label: 'Рост заявок' },
      { value: '12.4%', label: 'Вовлечённость' },
      { value: '3.8K', label: 'Подписчиков' }
    ],
    tags: ['Визуальный контент', 'Telegram', 'Бренд-редакция'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    category: 'legal',
    title: 'Юридический сервис',
    challenge: 'Сложная тема для коммуникации, нет доверия аудитории',
    solution: 'Запустили экспертный контент на VC.ru и в Telegram, выстроили репутацию через полезные материалы',
    result: '+95 целевых клиентов за 6 месяцев, 8.7K просмотров статей, рост узнаваемости',
    metrics: [
      { value: '+95', label: 'Клиентов' },
      { value: '8.7K', label: 'Просмотров' },
      { value: '4.2K', label: 'Подписчиков' }
    ],
    tags: ['Копирайтинг', 'PR', 'Экспертный контент'],
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    category: 'charity',
    title: 'Благотворительный фонд',
    challenge: 'Низкие охваты, слабая вовлечённость аудитории',
    solution: 'Разработали эмоциональный сторителлинг, запустили контент-стратегию с фокусом на истории',
    result: '+300% к охватам, 15K+ вовлечений, рост пожертвований на 120%',
    metrics: [
      { value: '+300%', label: 'Охватов' },
      { value: '15K+', label: 'Вовлечений' },
      { value: '+120%', label: 'Пожертвований' }
    ],
    tags: ['Сторителлинг', 'SMM', 'Контент-стратегия'],
    gradient: 'from-emerald-500 to-teal-500'
  }
];

const categories = [
  { id: 'all', label: 'Все проекты', icon: 'Briefcase' },
  { id: 'fashion', label: 'Fashion', icon: 'ShoppingBag' },
  { id: 'auto', label: 'Авто', icon: 'Car' },
  { id: 'legal', label: 'Юридические', icon: 'Scale' },
  { id: 'charity', label: 'Благотворительность', icon: 'Heart' }
];

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCase, setExpandedCase] = useState<number | null>(1);

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <section id="cases" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-4 text-primary">
            Наши результаты
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Кейсы с{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              цифрами
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Реальные проекты, измеримые результаты. От локальных бутиков до крупных сервисов
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={`transition-all ${
                  selectedCategory === cat.id 
                    ? 'shadow-lg' 
                    : 'hover:border-primary/50'
                }`}
              >
                <Icon name={cat.icon} size={16} className="mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${caseItem.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              <div 
                className={`relative bg-card border border-border/50 rounded-3xl overflow-hidden transition-all cursor-pointer ${
                  expandedCase === caseItem.id 
                    ? 'border-primary/30' 
                    : 'hover:border-primary/20'
                }`}
                onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {caseItem.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-muted/50 rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${caseItem.gradient} flex items-center justify-center flex-shrink-0 ml-4`}>
                      <Icon 
                        name={expandedCase === caseItem.id ? 'ChevronUp' : 'ChevronDown'} 
                        size={20} 
                        className="text-white" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {caseItem.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${caseItem.gradient} bg-clip-text text-transparent mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {expandedCase === caseItem.id && (
                    <div className="pt-6 border-t border-border/50 space-y-4 animate-in fade-in slide-in-from-top-2">
                      <div>
                        <p className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Target" size={16} className="text-primary" />
                          Задача
                        </p>
                        <p className="text-muted-foreground">{caseItem.challenge}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Lightbulb" size={16} className="text-primary" />
                          Решение
                        </p>
                        <p className="text-muted-foreground">{caseItem.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="TrendingUp" size={16} className="text-primary" />
                          Результат
                        </p>
                        <p className="text-muted-foreground">{caseItem.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl font-bold mb-2">Хотите таких же результатов?</p>
              <p className="text-muted-foreground">Запросите разбор вашего проекта и план действий</p>
            </div>
            <Button size="lg" className="w-full md:w-auto group" asChild>
              <a href="#contact">
                Получить план
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
