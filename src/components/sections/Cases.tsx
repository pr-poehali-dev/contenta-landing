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

        <div className="accordion-gallery max-w-7xl mx-auto">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className={`accordion-item ${expandedCase === caseItem.id ? 'expanded' : ''}`}
              onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
            >
              <div className="accordion-item-inner">
                <div 
                  className="accordion-image"
                  style={{ backgroundImage: `url(${caseItem.image})` }}
                >
                  <div className="accordion-overlay" />
                </div>
                
                <div className="accordion-content">
                  <div className="accordion-compact">
                    <div className="flex gap-2 mb-3">
                      {caseItem.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{caseItem.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold">{caseItem.metrics}</span>
                      <span className="text-sm opacity-90">{caseItem.subMetrics}</span>
                    </div>
                  </div>

                  <div className="accordion-expanded">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${caseItem.gradient} text-white rounded-full text-xs font-semibold mb-3 uppercase tracking-wider`}>
                      {caseItem.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{caseItem.title}</h3>
                    <p className="text-sm md:text-base mb-4 opacity-90 leading-relaxed">
                      {caseItem.description}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div>
                        <div className="text-4xl md:text-5xl font-bold">{caseItem.metrics}</div>
                        <div className="text-sm opacity-90">{caseItem.subMetrics}</div>
                      </div>
                      <div className="h-12 w-px bg-white/30" />
                      <div className="text-sm opacity-90">{caseItem.details}</div>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
                    >
                      Читать кейс полностью
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="accordion-icon">
                  <Icon name={expandedCase === caseItem.id ? 'Minimize2' : 'Maximize2'} size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .accordion-gallery {
          display: flex;
          gap: 1rem;
          height: 600px;
          perspective: 1000px;
        }

        @media (max-width: 768px) {
          .accordion-gallery {
            flex-direction: column;
            height: auto;
            min-height: 800px;
          }
        }

        .accordion-item {
          position: relative;
          flex: 1;
          min-width: 80px;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .accordion-item {
            min-height: 100px;
            flex: 1;
          }
        }

        .accordion-item:hover {
          flex: 1.1;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
        }

        @media (max-width: 768px) {
          .accordion-item:hover {
            transform: translateX(-4px);
          }
        }

        .accordion-item.expanded {
          flex: 3;
          box-shadow: 0 25px 80px rgba(139, 92, 246, 0.4);
        }

        .accordion-item-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .accordion-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.expanded .accordion-image {
          transform: scale(1.05);
        }

        .accordion-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
          transition: background 0.4s ease;
        }

        .accordion-item.expanded .accordion-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%);
        }

        .accordion-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          color: white;
          z-index: 10;
        }

        .accordion-compact {
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .accordion-item.expanded .accordion-compact {
          opacity: 0;
          pointer-events: none;
        }

        .accordion-expanded {
          opacity: 0;
          transition: opacity 0.4s ease 0.2s;
          pointer-events: none;
        }

        .accordion-item.expanded .accordion-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        .accordion-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 20;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .accordion-item:hover .accordion-icon,
        .accordion-item.expanded .accordion-icon {
          opacity: 1;
        }

        .accordion-icon:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
          .accordion-gallery {
            flex-direction: column;
            height: auto;
            gap: 1rem;
          }

          .accordion-item {
            min-height: 300px;
            flex: none;
          }

          .accordion-item.expanded {
            min-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .accordion-content {
            padding: 1.5rem;
          }

          .accordion-item {
            min-height: 250px;
          }

          .accordion-item.expanded {
            min-height: 450px;
          }
        }
      `}</style>
    </section>
  );
}