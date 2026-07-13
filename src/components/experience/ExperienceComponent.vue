<script setup lang="ts">
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-vue-next';
import { experienceInfo } from '../../data/experience';
import ButtonComponent from '../ui/ButtonComponent.vue';
import { journeyEvents } from '../../data/journey';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const experiences = computed(() => {
  const list =  journeyEvents.filter(e => e.type === 'work');
  return [...list].sort((a, b) => parseInt(b.year) - parseInt(a.year));
});

const router = useRouter();
const props = defineProps({
  isSeeMore: {
    type: Boolean,
    default: false
  }
})
const navigateTo = () => {
  router.push('/experience');
}

</script>

<template>
  <section id="experience" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="portfolio-panel">
      <div class="mb-16 sm:mb-20">
        <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2">
          My Experience
        </h2>
        <div class="w-fit">
          <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
            {{ experienceInfo.title }}
          </h3>
          <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="flex flex-col gap-4 mt-8" >
          <p class="text-justify" v-for="info in experienceInfo.details">{{ info }}</p>
        </div>
      </div>
      <div v-if="props.isSeeMore" class="mt-8 flex justify-center">
        <ButtonComponent @click="navigateTo" :label="'See More'" />
      </div>
    </div>

    <!-- Working history -->
    <div v-if="!props.isSeeMore" class="pt-12 px-4  sm:px-6 lg:px-8" >
      <div class="mb-16 sm:mb-20">
        <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2">
          Career History
        </h2>
        <div class="w-fit">
          <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
            Working Section
          </h3>
          <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div class="relative mx-auto ">
        <!-- Vertical Timeline -->
        <div class="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"></div>
        <div class="space-y-12 sm:space-y-16">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :class="[
              'relative flex flex-col sm:flex-row items-start sm:items-center',
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            ]"
          >
            <!-- Central Timeline dot -->
            <div class="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-emerald-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
              <Briefcase class="w-4 h-4 text-emerald-500" />
            </div>

            <!-- Box content -->
            <div
              class="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8"
              :class="index % 2 === 0 ? 'sm:order-2 sm:pl-8' : 'sm:order-1 sm:pr-8'"
            >
              <div class="p-6 sm:p-8 bg-zinc-50/40 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                
                <div class="flex flex-col w-full gap-4 mb-4">
                    <h4 class="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white leading-tight">
                      {{ exp.title }}
                    </h4>
                    <div class="flex flex-col w-full justify-between sm:flex-row">
                      <span class="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400">
                        {{ exp.organization }}
                      </span>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 font-bold rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 self-start sm:self-center">
                        <Calendar class="w-4 h-4" />
                        <span>{{ exp.period }}</span>
                      </div>
                  </div>
                </div>

                <div class="mb-6">
                  <h5 class="text-xs font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                    Responsibilities
                  </h5>
                  <ul class="space-y-2.5">
                    <li v-for="(resp, rIdx) in exp.responsibilities" :key="rIdx" class="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                      <span>{{ resp }}</span>
                    </li>
                  </ul>
                </div>

                <div v-if="exp.achievements?.length" class="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <h5 class="text-xs font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <Award class="w-3.5 h-3.5 text-emerald-500" />
                    <span>Key Achievements</span>
                  </h5>
                  <ul class="space-y-2.5">
                    <li v-for="(ach, aIdx) in exp.achievements" :key="aIdx" class="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                      <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{{ ach }}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div
              class="hidden sm:block sm:w-1/2"
              :class="index % 2 === 0 ? 'sm:order-1' : 'sm:order-2'"
            ></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
