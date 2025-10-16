import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'tiffany' | 'dark' | 'purple';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const themes = {
  tiffany: {
    primary: '#81D8D0',
    secondary: '#70F0DC',
    accent: '#2D5F6E',
    warm: '#EADAC1',
    bg: '#F8F7F5',
    text: '#474C50',
    textDark: '#2D5F6E',
  },
  dark: {
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#059669',
    warm: '#FCD34D',
    bg: '#0F172A',
    text: '#94A3B8',
    textDark: '#F1F5F9',
  },
  purple: {
    primary: '#A855F7',
    secondary: '#C084FC',
    accent: '#7C3AED',
    warm: '#F472B6',
    bg: '#FAFAFA',
    text: '#64748B',
    textDark: '#1E293B',
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as ThemeType) || 'tiffany';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    const colors = themes[theme];
    
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-warm', colors.warm);
    root.style.setProperty('--theme-bg', colors.bg);
    root.style.setProperty('--theme-text', colors.text);
    root.style.setProperty('--theme-text-dark', colors.textDark);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
