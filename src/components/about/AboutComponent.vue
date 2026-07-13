<script setup lang="ts">
import { User, Laptop, Zap, ShieldCheck, MapPin, Network, Activity, Lock, Users, Code2, Handshake, Sparkles, BrainCircuit, BookOpen, BookSearch, BugOff, BookUser } from 'lucide-vue-next';
import { personalInfo } from '../../data/home.ts';
import JourneyComponent from '../journey/JourneyComponent.vue';
import { getCurrentMapLink } from '../../composables/useMap.ts';
import { About } from '../../data/about.ts';

const iconMap: Record<string, any> = {
  Laptop,
  Zap,
  ShieldCheck,
  Network,
  Activity,
  Lock,
  Users,
  Code2,
  Handshake,
  Sparkles,
  BrainCircuit,
  BookUser,
  BugOff,
  BookSearch
};

const getExpertIcon = (icon?: string) => icon ? iconMap[icon] ?? Sparkles : Sparkles;
const props = defineProps({
  isDisplayWorkSection: { // to show workspace only in about page
    type: Boolean,
    default: true,
  },
  isDisplayWithCertificate: { // To display list of education only in about. Home only display with certificate
    type: Boolean,
    default: false
  }
});
const aboutInfo = About;
const mapLink = getCurrentMapLink;

</script>

<template>
  <section id="about" class="flex flex-col gap-16 py-24 bg-zinc-50/40  dark:bg-zinc-900/30">
    <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
       <div class="portfolio-panel mb-10">

         <div class="mb-16 sm:mb-20">
           <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2">
             Who I Am
           </h2>
           <div class="w-fit">
             <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
               About Me
             </h3>
             <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
             </div>
         </div>
         <!-- Content Split -->
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
           
           <!-- Bento Stats Profile block -->
           <div class="lg:col-span-5 relative">
             <div class="portfolio-panel relative z-10 overflow-hidden">
               <div class="flex items-center gap-4 mb-8">
                 <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                   <User class="w-6 h-6" />
                 </div>
                 <div>
                   
                   <h4 class="text-lg font-display font-bold text-zinc-900 dark:text-white">
                     {{ personalInfo.name }}
                   </h4>
                   
                   <p class="flex text-xs font-mono text-zinc-500 dark:text-zinc-400">
                     Based in {{ personalInfo.contacts[4].text }}
                     <a class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-colors group-hover:bg-emerald-500/15 shrink-0"
                     :href="mapLink"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <MapPin class="w-5 h-5" />
                   </a>
                   </p> 
                 </div>
               </div>
   
               <p class="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
                 "I craft digital experiences that are not just beautiful to look at, but a joy to use. Code is my craft and I take pride in every detail."
               </p>
   
               <div class="grid grid-2">
                 <div class="p-4 rounded-xl bg-zinc-50/40 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900/50 flex flex-col items-center justify-center text-center">
                   <span class="text-2xl sm:text-3xl font-display font-bold text-emerald-500">7</span>
                   <span class="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Years Exp</span>
                 </div>
                 <div class="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900/50 flex flex-col items-center justify-center text-center">
                   <span class="text-2xl sm:text-3xl font-display font-bold text-emerald-500">15+</span>
                   <span class="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Projects</span>
                 </div>
               </div>
             </div>
           </div>
   
           <!-- Focus points & core intro text -->
           <div class="lg:col-span-7 flex flex-col gap-4 ">
             <h4 class=" text-xl sm:text-2xl font-display font-semibold text-zinc-900 dark:text-white mb-4">
               {{ aboutInfo.focusPoint.title }}
             </h4>
             <p class="flex flex-col text-justify text-base text-zinc-600 dark:text-zinc-400 leading-relaxed" 
               v-for="detail in aboutInfo.focusPoint.details"  
             >
               {{ detail.description }}
             </p>
   
             <!-- My Philosophy Section -->
             <div>
               <h5 class="text-sm font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-4">
                 {{ aboutInfo.philosophy.title }}
               </h5>
               <p class="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                 {{ aboutInfo.philosophy.description }}
               </p>
             </div>
   
             <div>
             </div>
           </div>
         </div>
       </div>


      <!--Expert & Work Section -->
      <div v-if="props.isDisplayWorkSection" class="flex flex-col gap-8 w-full mt-12">
        <div class="flex flex-col gap-4">
          <h2 class=" text-xl sm:text-2xl font-display font-semibold text-zinc-900 dark:text-white mb-4">
            My Expertise & Work
          </h2>
          <div class="grid grid-2 gap-4">
            <div class="p-5 rounded-xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-900 flex gap-4 items-start shadow-sm hover:border-emerald-500/20 transition-colors"
              v-for="expert in aboutInfo.experts"
            >
              <div class="p-2.5 rounded-lg bg-emerald-500/10 shrink-0 text-emerald-500">
                <component :is="getExpertIcon(expert.icon)" class="w-5 h-5" />
              </div>
              <div>
                <h6 class="font-display font-medium text-zinc-900 dark:text-white mb-1 text-sm sm:text-base">
                  {{ expert.title }}
                </h6>
                <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {{ expert.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <JourneyComponent :is-show-filter="props.isDisplayWorkSection"/>

  
</template>
