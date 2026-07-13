<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="animate__animated animate__fadeIn">
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white px-6">
      
      <div class="text-center max-w-md">
        
        <!-- Big 404 -->
        <h1 class="text-[120px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          404
        </h1>
  
        <!-- Title -->
        <h2 class="text-2xl font-semibold mt-2">
          Page not found
        </h2>
  
        <!-- Description -->
        <p class="text-zinc-400 mt-3 text-sm leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>
  
        <!-- Actions -->
        <div class="mt-6 flex items-center justify-center gap-3">
           <RouterLink
            to="/"
            class="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-medium shadow-md hover:shadow-emerald-500/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span>Go Back to Home</span>
          </RouterLink>
        </div>
  
        <!-- Small hint -->
        <p class="text-xs text-zinc-500 mt-6">
          Error code: 404 • Something went wrong
        </p>
  
      </div>
    </div>
  </section>
</template>
