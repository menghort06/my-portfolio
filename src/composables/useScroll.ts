import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const isMobileMenuOpen = ref(false);
  const scrolled = ref(false); //Set height hidden when scroll down for the header 
  const isShowButtonScrollTop = ref(false);

  const handleScroll = () => {
    scrolled.value = window.scrollY > 20;
    isShowButtonScrollTop.value = window.scrollY > 800;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger once
    setTimeout(handleScroll, 100);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    isMobileMenuOpen,
    isShowButtonScrollTop,
    scrolled,
    scrollToTop,
  };
}
