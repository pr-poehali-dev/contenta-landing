import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4" style={{ backgroundColor: 'var(--theme-bg-alt)', borderColor: 'var(--theme-border)' }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--theme-primary)' }}>
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--theme-text-dark)' }}>ContenTA</span>
                <span className="text-xs -mt-1" style={{ color: 'var(--theme-text)' }}>Studio</span>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'var(--theme-text)' }}>
              Стратегическое агентство контент-маркетинга и SMM
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--theme-text-dark)' }}>Навигация</h3>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block transition-colors" style={{ color: 'var(--theme-text)' }}>Услуги</a>
              <a href="#cases" className="block transition-colors" style={{ color: 'var(--theme-text)' }}>Кейсы</a>
              <a href="#about" className="block transition-colors" style={{ color: 'var(--theme-text)' }}>О нас</a>
              <a href="#blog" className="block transition-colors" style={{ color: 'var(--theme-text)' }}>Блог</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--theme-text-dark)' }}>Контакты</h3>
            <div className="space-y-3">
              <a href="mailto:hello@contenta.studio" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--theme-text)' }}>
                <Icon name="Mail" size={16} />
                hello@contenta.studio
              </a>
              <a href="https://t.me/contenta_studio" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--theme-text)' }}>
                <Icon name="MessageCircle" size={16} />
                @contenta_studio
              </a>
              <a href="https://vk.com/contenta.studio" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--theme-text)' }}>
                <Icon name="Share2" size={16} />
                vk.com/contenta.studio
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t" style={{ borderColor: 'var(--theme-border)' }}>
          <div className="text-center text-sm" style={{ color: 'var(--theme-text)' }}>
            © 2025 ContenTA Studio
          </div>
          <div className="flex gap-3">
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
      </div>
    </footer>
  );
}