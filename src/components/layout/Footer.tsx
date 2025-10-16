import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t border-[#E6E6EB] py-12 px-4 bg-[#F8F7F5]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#81D8D0' }}>
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#2D5F6E]">ContenTA</span>
                <span className="text-xs text-[#474C50] -mt-1">Studio</span>
              </div>
            </div>
            <p className="text-sm text-[#474C50]">
              Стратегическое агентство контент-маркетинга и SMM
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#2D5F6E]">Навигация</h3>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-[#474C50] hover:text-[#81D8D0] transition-colors">Услуги</a>
              <a href="#cases" className="block text-[#474C50] hover:text-[#81D8D0] transition-colors">Кейсы</a>
              <a href="#about" className="block text-[#474C50] hover:text-[#81D8D0] transition-colors">О нас</a>
              <a href="#blog" className="block text-[#474C50] hover:text-[#81D8D0] transition-colors">Блог</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#2D5F6E]">Контакты</h3>
            <div className="space-y-3">
              <a href="mailto:hello@contenta.studio" className="flex items-center gap-2 text-sm text-[#474C50] hover:text-[#81D8D0] transition-colors">
                <Icon name="Mail" size={16} />
                hello@contenta.studio
              </a>
              <a href="https://t.me/contenta_studio" className="flex items-center gap-2 text-sm text-[#474C50] hover:text-[#81D8D0] transition-colors">
                <Icon name="MessageCircle" size={16} />
                @contenta_studio
              </a>
              <a href="https://vk.com/contenta.studio" className="flex items-center gap-2 text-sm text-[#474C50] hover:text-[#81D8D0] transition-colors">
                <Icon name="Share2" size={16} />
                vk.com/contenta.studio
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#E6E6EB]">
          <div className="text-center text-[#474C50] text-sm">
            © 2025 ContenTA Studio
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-[#81D8D0]/10 hover:text-[#81D8D0]">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-[#81D8D0]/10 hover:text-[#81D8D0]">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-[#81D8D0]/10 hover:text-[#81D8D0]">
              <Icon name="Share2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}