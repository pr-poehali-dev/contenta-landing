import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="hero-fullscreen relative overflow-hidden">
      <div className="hero-bg-animated">
        <div className="mesh-gradient mesh-1" />
        <div className="mesh-gradient mesh-2" />
        <div className="mesh-gradient mesh-3" />
        <div className="mesh-gradient mesh-4" />
      </div>

      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10 h-full flex items-center px-4">
        <div className="max-w-5xl mx-auto text-center w-full">
          <div className="hero-badge">
            <div className="pulse-dot" />
            <span>Стратегическое агентство контент-маркетинга</span>
          </div>
          
          <h1 className="hero-title">
            Контент, который<br className="hidden md:block" /> строит{' '}
            <span className="relative inline-block hero-highlight">
              <span className="gradient-text">доверие</span>
              <svg className="hero-underline" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C100 2 200 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}и продаёт
          </h1>
          
          <p className="hero-subtitle">
            Мы создаём контент-системы для среднего бизнеса: от стратегии до реализации. 
            <span className="text-foreground font-semibold"> Без шаблонов. С результатом.</span>
          </p>
          
          <div className="hero-cta">
            <Button size="lg" className="hero-button primary" asChild>
              <a href="#cases">
                Посмотреть кейсы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hero-button secondary" asChild>
              <a href="#contact">Запросить стратегию</a>
            </Button>
          </div>

          <div className="hero-stats">
            {[
              { value: '50+', label: 'Проектов' },
              { value: '180%', label: 'Рост продаж' },
              { value: '5 лет', label: 'Опыта' },
              { value: '100%', label: 'Доверие' }
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value gradient-text">
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <Icon name="ChevronDown" size={24} className="animate-bounce" />
      </div>
      
      <style>{`
        .hero-fullscreen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 5rem;
          padding-bottom: 10rem;
        }

        @media (max-width: 768px) {
          .hero-fullscreen {
            padding-top: 3rem;
            padding-bottom: 8rem;
            align-items: flex-start;
            padding-top: 15vh;
          }
        }

        .hero-bg-animated {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .mesh-gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: float-mesh 20s ease-in-out infinite;
        }

        .mesh-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3));
          top: -10%;
          right: -10%;
          animation-delay: 0s;
        }

        .mesh-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(225deg, rgba(219, 39, 119, 0.2), rgba(236, 72, 153, 0.2));
          bottom: -10%;
          left: -10%;
          animation-delay: 5s;
        }

        .mesh-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25));
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 10s;
        }

        .mesh-4 {
          width: 350px;
          height: 350px;
          background: linear-gradient(315deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
          top: 20%;
          left: 20%;
          animation-delay: 15s;
        }

        @keyframes float-mesh {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.6));
          border-radius: 50%;
          animation: particle-float 15s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw - 100%), calc(100vh - 100%));
            opacity: 0;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: fade-in-down 0.8s ease-out;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .hero-highlight {
          animation: highlight-pulse 3s ease-in-out infinite;
        }

        @keyframes highlight-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .hero-underline {
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 12px;
          animation: draw-line 1.5s ease-out 0.8s both;
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          to {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          color: hsl(var(--muted-foreground));
          max-width: 48rem;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          margin-bottom: 4rem;
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
          }
        }

        .hero-button {
          font-size: 1.125rem;
          padding: 1.5rem 2rem;
          height: auto;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-button.primary {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .hero-button.primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-button.primary:hover::before {
          opacity: 1;
        }

        .hero-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
        }

        .hero-button.secondary {
          border-width: 2px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .hero-button.secondary:hover {
          border-color: hsl(var(--primary));
          background: rgba(139, 92, 246, 0.1);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          max-width: 56rem;
          margin: 0 auto;
          animation: fade-in-up 0.8s ease-out 0.8s both;
        }

        @media (min-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 1.5rem;
          padding: 1rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 768px) {
          .stat-card {
            padding: 1.5rem;
          }
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
        }

        .stat-value {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          transition: transform 0.4s ease;
        }

        .stat-card:hover .stat-value {
          transform: scale(1.1);
        }

        .stat-label {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          font-weight: 500;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: hsl(var(--muted-foreground));
          opacity: 0.6;
          animation: fade-in 1s ease-out 1.5s both;
        }

        @media (max-width: 768px) {
          .hero-scroll-indicator {
            display: none;
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}