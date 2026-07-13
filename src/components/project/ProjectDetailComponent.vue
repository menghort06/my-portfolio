<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '../../data/project';
import { Calendar } from 'lucide-vue-next';
import BreadcrumbComponent from '../ui/BreadcrumbComponent.vue';

const route = useRoute();
const id = route.params.id;
const projectDetail = projects.find((project) => project.id === id);

</script>

<template>
    <section id="skills" class="flex flex-col gap-8 animate__animated animate__fadeIn mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <BreadcrumbComponent />

      <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
         {{ projectDetail.name }}
      </h3>
      
      <div>
         <div class="flex items-center gap-4 pt-4 uppercase ">
            <div class="flex flex-col items-start gap-1.5 font-semibold text-emerald-500">
            <span v-for="tech in projectDetail.techStack" :key="tech">
               {{ tech }}
            </span>
         </div>

         <div class="flex items-center gap-1.5">
            <Calendar class="w-3.5 h-3.5" />
            <span>{{ projectDetail.year }}</span>
         </div>
         </div>
         <p class="italic front-semibold text-zinc-500">{{ projectDetail.manageStack }}</p>
      </div>


         <p>{{ projectDetail.description }}</p>        
         <img class="rounded-md w-125 h-auto object-cover mx-auto" :src="projectDetail.photo" alt="image" loading="lazy">

       

      <div class="flex justify-end">
         <a  v-if="projectDetail.url"
            :href="projectDetail.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 px-4 py-1.5 text-sm font-medium text-emerald-400 transition-all hover:border-emerald-400/60 hover:bg-emerald-400/10"
         >
            View Mockup
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
         </a>
      </div>
         
    </section>
</template>