import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов',
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@contenta.studio',
      link: 'mailto:hello@contenta.studio',
      color: '#81D8D0'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@contenta_studio',
      link: 'https://t.me/contenta_studio',
      color: '#70F0DC'
    },
    {
      icon: 'Share2',
      title: 'VK',
      value: 'vk.com/contenta.studio',
      link: 'https://vk.com/contenta.studio',
      color: '#2D5F6E'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-[#F8F7F5]">
      <div className="absolute inset-0" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(129, 216, 208, 0.1)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(112, 240, 220, 0.1)' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#81D8D0]/10 rounded-full text-sm font-medium mb-4 text-[#2D5F6E]">
            Свяжитесь с нами
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D5F6E]">
            Готовы{' '}
            <span className="text-[#81D8D0]">
              начать?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#474C50] max-w-3xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта и возможностей сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#2D5F6E]">Контакты</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all" style={{ backgroundColor: info.color }} />
                    <div className="relative flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm border border-[#E6E6EB] rounded-2xl hover:border-[#81D8D0]/40 hover:shadow-lg transition-all">
                      <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${info.color}20` }}>
                        <Icon name={info.icon} size={24} style={{ color: info.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#474C50] mb-1">
                          {info.title}
                        </div>
                        <div className="text-base font-semibold text-[#2D5F6E] group-hover:text-[#81D8D0] transition-colors truncate">
                          {info.value}
                        </div>
                      </div>
                      <Icon name="ExternalLink" size={20} className="text-[#474C50] group-hover:text-[#81D8D0] transition-colors flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl blur-lg" style={{ backgroundColor: 'rgba(129, 216, 208, 0.2)' }} />
              <div className="relative bg-white/70 backdrop-blur-sm border border-[#81D8D0]/30 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#81D8D030' }}>
                    <Icon name="Sparkles" size={24} style={{ color: '#81D8D0' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[#2D5F6E]">Бесплатная консультация</h4>
                    <p className="text-sm text-[#474C50]">
                      Первая консультация — бесплатно. Обсудим ваш бизнес и подберём оптимальную стратегию
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-[#474C50]">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-[#81D8D0]" />
                    <span>Аудит текущего контента</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-[#81D8D0]" />
                    <span>Рекомендации по стратегии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-[#81D8D0]" />
                    <span>План действий</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl blur-xl" style={{ backgroundColor: 'rgba(129, 216, 208, 0.1)' }} />
            <div className="relative bg-white/70 backdrop-blur-sm border border-[#E6E6EB] rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#2D5F6E]">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Анастасия"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@example.com"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Компания / Проект</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Название бренда"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о проекте *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить через контент?"
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group bg-[#81D8D0] hover:bg-[#70F0DC] text-white">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}