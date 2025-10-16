import { useState } from 'react';
import { Button } from '@/components/ui/button';

const cases = [
  {
    id: 1,
    category: 'fashion',
    title: 'Fashion',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    metrics: '+180%',
    description: 'Увеличили продажи бутика на 180% за 4 месяца',
    color: '#81D8D0'
  },
  {
    id: 2,
    category: 'auto',
    title: 'Авто',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/3cc11819-dfb7-42d1-8d66-76aef0254e86.jpg',
    metrics: '+240%',
    description: 'Рост заявок в детейлинг-студию на 240%',
    color: '#70F0DC'
  },
  {
    id: 3,
    category: 'legal',
    title: 'Юридические',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/f7255a3b-0be3-4e18-8327-21ce251bd89d.jpg',
    metrics: '+95',
    description: 'Новых клиентов для юридического сервиса',
    color: '#2D5F6E'
  },
  {
    id: 4,
    category: 'charity',
    title: 'НКО',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/513542d9-0b0f-46c6-be5a-72fed9b63645.jpg',
    metrics: '+300%',
    description: 'Увеличили охваты благотворительного фонда',
    color: '#EADAC1'
  },
  {
    id: 5,
    category: 'food',
    title: 'HoReCa',
    image: 'https://cdn.poehali.dev/projects/0fa58d5a-5be2-4481-9265-3f7bfedad1ff/files/3cc11819-dfb7-42d1-8d66-76aef0254e86.jpg',
    metrics: '+165%',
    description: 'Рост выручки ресторана через SMM',
    color: '#81D8D0'
  }
];

const categories = [
  { id: 'all', label: 'Все проекты' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'auto', label: 'Авто' },
  { id: 'legal', label: 'Юридические' },
  { id: 'charity', label: 'НКО' },
  { id: 'food', label: 'HoReCa' }
];

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <section id="cases" className="py-12 md:py-24 px-4 overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', color: 'var(--theme-text-dark)' }}>
            Наши результаты
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6" style={{ color: 'var(--theme-text-dark)' }}>Кейсы и результаты</h2>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-10 max-w-2xl mx-auto px-4" style={{ color: 'var(--theme-text)' }}>
            Реальные проекты с измеримыми результатами
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
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

        <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-4 md:gap-2 md:mx-10 md:transform md:skew-x-3 md:h-[75vmin]">
          {filteredCases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`relative overflow-hidden rounded-[20px] transition-all duration-1000 ease-in-out cursor-pointer flex-1`}
              style={{ 
                flexGrow: hoveredCase === caseItem.id ? 10 : 1,
                marginRight: index !== filteredCases.length - 1 ? '1rem' : '0',
                minHeight: '300px'
              }}
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  hoveredCase === caseItem.id ? 'filter-none' : 'grayscale'
                }`}
              />
              
              <div className="absolute inset-0 opacity-60 mix-blend-multiply transition-opacity duration-500" style={{ backgroundColor: 'var(--theme-primary)' }} />
              
              <div
                className={`absolute bottom-0 left-0 text-white font-bold whitespace-nowrap transition-all duration-500 ease-in-out ${
                  hoveredCase === caseItem.id
                    ? 'md:top-auto md:bottom-0 md:left-0 md:w-full md:text-center md:transform-none md:-skew-x-3 md:bg-[#2D5F6E]/80 md:text-2xl md:py-4'
                    : 'md:origin-top-left md:-rotate-90 md:bottom-0 md:left-0 md:text-base md:py-2 md:px-4 md:min-w-full'
                } py-2 px-4 text-base w-full text-center`}
                style={{ backgroundColor: hoveredCase === caseItem.id ? undefined : `${caseItem.color}CC` }}
              >
                {hoveredCase === caseItem.id ? (
                  <div className="md:block hidden">
                    <div className="text-4xl font-bold mb-2" style={{ color: 'var(--theme-accent)' }}>
                      {caseItem.metrics}
                    </div>
                    <div className="text-sm text-white/90">{caseItem.description}</div>
                  </div>
                ) : (
                  caseItem.title
                )}
                <span className="md:hidden">{caseItem.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}