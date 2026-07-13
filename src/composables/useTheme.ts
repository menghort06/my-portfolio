import { ref } from 'vue';

const darkMode = ref(true);

export function useTheme() {

  const updateTheme = () => {
    const root = window.document.documentElement;
    if (darkMode.value) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    updateTheme();
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      darkMode.value = saved === 'dark';
    } else {
      darkMode.value = true;
    }
    updateTheme();
  };

  return {
    darkMode,
    toggleDarkMode,
    initTheme
  };
}
