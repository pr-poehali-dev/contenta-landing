import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/40 z-50">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-sm">CT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">ContenTA</span>
            <span className="text-xs text-muted-foreground -mt-1">Studio</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </a>
          <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Кейсы
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            О нас
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Блог
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </a>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all" asChild>
            <a href="#contact">Связаться</a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </nav>
    </header>
  );
}
