import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ContenTA</span>
                <span className="text-xs text-muted-foreground -mt-1">Studio</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Стратегическое агентство контент-маркетинга и SMM
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="block text-muted-foreground hover:text-primary transition-colors">Кейсы</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#blog" className="block text-muted-foreground hover:text-primary transition-colors">Блог</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="mailto:hello@contenta.studio" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                hello@contenta.studio
              </a>
              <a href="https://t.me/contenta_studio" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={16} />
                @contenta_studio
              </a>
              <a href="https://vk.com/contenta.studio" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Share2" size={16} />
                vk.com/contenta.studio
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/40">
          <div className="text-center text-muted-foreground text-sm">
            © 2025 ContenTA Studio
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Share2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}