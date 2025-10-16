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
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@contenta.studio',
      link: 'mailto:hello@contenta.studio',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@contenta_studio',
      link: 'https://t.me/contenta_studio',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: 'Share2',
      title: 'VK',
      value: 'vk.com/contenta.studio',
      link: 'https://vk.com/contenta.studio',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
            Свяжитесь с нами
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Обсудим ваш проект?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы создать контент-систему, которая работает? Оставьте заявку
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Как с нами связаться</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon name={info.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-muted-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Бесплатная консультация</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Обсудим ваш бизнес, текущую ситуацию с контентом и предложим решение — 
                    даже если вы пока не готовы к сотрудничеству
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-muted/30 border border-border/40 rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Ваше имя *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="h-12 bg-background/50 border-border/60 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.com"
                  required
                  className="h-12 bg-background/50 border-border/60 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold mb-2">
                  Ссылка на проект
                </label>
                <Input
                  id="project"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="instagram.com/yourbrand"
                  className="h-12 bg-background/50 border-border/60 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Расскажите о вашем проекте *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Опишите, чем занимается ваш бизнес и какие задачи хотите решить"
                  rows={5}
                  required
                  className="bg-background/50 border-border/60 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all group"
              >
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
    </section>
  );
}
