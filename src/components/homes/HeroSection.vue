<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { personalInfo } from '../../data/home';


</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
      
      <!-- Decorative availability badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6 sm:mb-8 border border-emerald-500/20">
        <Sparkles class="w-3.5 h-3.5 animate-pulse" />
        <span>Available for Frontend Opportunities</span>
      </div>
       <!-- Greetings label -->
      <p class="text-sm sm:text-base font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2 sm:mb-3">
        Hi, my name is
      </p>
      <!-- Avatar with animated gradient ring -->
      <div class="my-4">
          <img
            class="w-45 h-45 ring-2 ring-emerald-200/40 shadow-2xl rounded-full object-cover object-top mx-auto"
            src="/images/menghort-photo.png"
            alt="photo"
          >
      </div>

      <!-- Your Name -->
      <h1 class="text-2xl font-display font-bold tracking-tight text-zinc-900 dark:text-white mb-4 sm:mb-6">
        {{ personalInfo.name }}
      </h1>

      <div class="portfolio-panel mb-10">
        <h2 class="text-2xl text-left sm:text-4xl font-display font-medium text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8">
          I create <span class="text-emerald-500 dark:text-emerald-400 font-semibold">{{ personalInfo.title }}</span> solutions
        </h2>
  
        <div class="flex flex-col mb-4 text-base text-justify  text-zinc-500 dark:text-zinc-400 mx-auto leading-relaxed"
          v-for="detail in personalInfo.details"
        >
          <p>{{ detail.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
