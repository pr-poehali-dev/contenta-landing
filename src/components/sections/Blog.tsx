import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const blogPosts = [
  {
    title: 'Жёсткий SMM: как контент продаёт, а не развлекает',
    category: 'SMM',
    categoryColor: 'purple',
    readTime: '7 мин',
    date: '15 октября 2025',
    icon: 'TrendingUp'
  },
  {
    title: 'От постов к медиа-активу: как создать контент-систему',
    category: 'Стратегия',
    categoryColor: 'blue',
    readTime: '12 мин',
    date: '8 октября 2025',
    icon: 'Target'
  },
  {
    title: 'Нейромаркетинг в соцсетях: триггеры, которые работают',
    category: 'Стратегия',
    categoryColor: 'blue',
    readTime: '9 мин',
    date: '1 октября 2025',
    icon: 'Zap'
  },
  {
    title: 'Telegram-каналы для бизнеса: от нуля до первых продаж',
    category: 'SMM',
    categoryColor: 'purple',
    readTime: '10 мин',
    date: '24 сентября 2025',
    icon: 'MessageCircle'
  }
];

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="blog" className="py-12 md:py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm text-primary font-medium mb-3 md:mb-4">
            Экспертиза
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6">Блог и статьи</h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Делимся знаниями о контент-маркетинге, SMM и digital-стратегиях
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-3xl p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={post.icon} size={28} className="text-primary" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  post.categoryColor === 'purple' 
                    ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' 
                    : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                }`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center justify-between pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  {post.date}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary transition-colors p-0 h-auto font-semibold"
                >
                  Читать
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>

              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="relative bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-2xl p-5">
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Icon name={post.icon} size={20} className="text-primary" />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                        post.categoryColor === 'purple' 
                          ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' 
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Icon name="Clock" size={12} />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-base font-bold mb-3 leading-tight pr-10">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        {post.date}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary p-0 h-auto font-semibold text-xs"
                      >
                        Читать
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 h-9 w-9"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <div className="flex gap-1.5">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 h-9 w-9"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="sm"
            className="md:text-base"
            variant="outline" 
          >
            Все статьи блога
            <Icon name="ExternalLink" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}