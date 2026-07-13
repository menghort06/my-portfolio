<script setup lang="ts">
import { computed } from 'vue';
import { Github, Linkedin, Mail, ChevronUp, Phone, MapPin } from 'lucide-vue-next';
import { personalInfo } from '../../data/home';
import { navItems } from '../../data/header';
import { useScroll } from '../../composables/useScroll';
import { useRouter } from 'vue-router';

const router = useRouter();
const { scrollToTop, isShowButtonScrollTop } = useScroll();
// Map icon names to actual components
const iconMap: { [key: string]: any } = {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone
};

const navigateTo = (url: string) => {
  router.push(url);
};

</script>

<template>
  <footer class="bg-zinc-50/40 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-900/50 py-12 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-10 border-b border-zinc-200/50 dark:border-zinc-800/30">
        <div>
          <span class="text-lg font-display font-extrabold tracking-tight text-zinc-900 dark:text-white">
            HONG<span class="text-emerald-500"> MENGHORT</span>
          </span>
          <p class="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-1">
            Senior Frontend Engineer
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="navigateTo(item.url || '')"
            class="text-xs font-mono text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {{ item.label }}
          </button>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10">
        <p class="text-xs font-mono text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
          &copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
        </p>
           <div class="flex items-center gap-4 text-zinc-400 dark:text-zinc-500">
          <div v-for="info in personalInfo.contacts">
            <a
              :href="info.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <component :is="iconMap[info.icon]" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <button
          v-if="isShowButtonScrollTop"
          @click="scrollToTop"
          class="fixed z-10 flex right-4 bottom-6 p-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-green-50 dark:hover:bg-zinc-800/50 border border-zinc-200 dark:border-green-800/80 text-zinc-500 dark:text-zinc-400 shadow-sm items-center gap-1 text-xs font-mono cursor-pointer transition-all duration-1000 ease-out translate-y-0 opacity-100 group"
        >
          <span>Top</span>
          <ChevronUp class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  </footer>
</template>
