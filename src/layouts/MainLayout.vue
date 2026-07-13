<script setup lang="ts">
import { onMounted } from 'vue';
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import { useTheme } from '../composables/useTheme';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="min-h-screen text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-500 overflow-x-hidden antialiased">
    <AppHeader/>

    <main class="relative z-10 min-h-[calc(100vh-250px)]">
      <router-view/>
    </main>

    <AppFooter />
  </div>
</template>
