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
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg-alt)' }}>
      <div className="absolute inset-0" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-secondary) 10%, transparent)' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)', color: 'var(--theme-text-dark)' }}>
            Свяжитесь с нами
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--theme-text-dark)' }}>
            Готовы{' '}
            <span style={{ color: 'var(--theme-primary)' }}>
              начать?
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--theme-text)' }}>
            Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта и возможностей сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--theme-text-dark)' }}>Контакты</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all" style={{ backgroundColor: 'var(--theme-primary)' }} />
                    <div className="relative flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid' }}>
                      <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)' }}>
                        <Icon name={info.icon} size={24} style={{ color: 'var(--theme-primary)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--theme-text)' }}>
                          {info.title}
                        </div>
                        <div className="text-base font-semibold transition-colors truncate" style={{ color: 'var(--theme-text-dark)' }}>
                          {info.value}
                        </div>
                      </div>
                      <Icon name="ExternalLink" size={20} className="transition-colors flex-shrink-0" style={{ color: 'var(--theme-text)' }} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl blur-lg" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 20%, transparent)' }} />
              <div className="relative backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'color-mix(in srgb, var(--theme-primary) 30%, transparent)', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 30%, transparent)' }}>
                    <Icon name="Sparkles" size={24} style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: 'var(--theme-text-dark)' }}>Бесплатная консультация</h4>
                    <p className="text-sm" style={{ color: 'var(--theme-text)' }}>
                      Первая консультация — бесплатно. Обсудим ваш бизнес и подберём оптимальную стратегию
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm" style={{ color: 'var(--theme-text)' }}>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} style={{ color: 'var(--theme-primary)' }} />
                    <span>Аудит текущего контента</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} style={{ color: 'var(--theme-primary)' }} />
                    <span>Рекомендации по стратегии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} style={{ color: 'var(--theme-primary)' }} />
                    <span>План действий</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl blur-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--theme-primary) 10%, transparent)' }} />
            <div className="relative backdrop-blur-sm rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--theme-text-dark)' }}>Оставить заявку</h3>
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

                <Button type="submit" size="lg" className="w-full group text-white" style={{ backgroundColor: 'var(--theme-accent)' }}>
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