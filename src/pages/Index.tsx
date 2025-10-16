import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Cases from '@/components/sections/Cases';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section className="py-20 px-4 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Контент как союз</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы не «ведём соцсети», а входим в команду бренда — как стратег, копирайтер и арт-директор в одном лице. 
                Используем методики Дэна Кеннеди, Кима Уэлш-Филлипс и поведенческие триггеры, 
                чтобы контент вызывал реакцию, а не пролистывания.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Cases />
        <About />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
