import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Services from '@/components/sections/Services';
import Method from '@/components/sections/Method';
import Cases from '@/components/sections/Cases';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Method />
        <Cases />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
