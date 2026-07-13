<script setup lang="ts">
import { GraduationCap, Calendar, Router } from 'lucide-vue-next';
import { educationList, educationInfo } from '../../data/education';
import { onMounted, ref } from 'vue';
import { Education } from '@/src/types/education';
import { useRouter } from 'vue-router';
import ButtonComponent from '../ui/ButtonComponent.vue';

const prop = defineProps({
  isDisplayWithCertificate: {
    type: Boolean,
    default: false
  }
})
const router = useRouter();
const educations = ref<Education[]>(educationList);

onMounted(() => {
  if (prop.isDisplayWithCertificate) {
    educations.value = educationList.filter(edu => edu.certificates?.length)
  }
})

const navigateTo = () => {
  router.push('/about')
}

</script>

<template>
  <section id="education" class="max-w-7xl mx-auto px-4 py-24  sm:px-6 lg:px-8">

    <div class="portfolio-panel mb-10">
      <div class="mb-16 sm:mb-20">
        <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2 ">
          Qualifications
        </h2>
        <div class="w-fit">
          <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
            {{ educationInfo.title }}
          </h3>
          <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <p class="text-justify">{{ educationInfo.description }}</p>

      <div v-if="prop.isDisplayWithCertificate" class="flex justify-center mt-8">
        <ButtonComponent @click="navigateTo" :label="'See More'"/>
      </div>
    </div>


    <!-- Academic Column -->
    <div v-if="!prop.isDisplayWithCertificate" class="lg:col-span-6 flex flex-col gap-6">
      <h4 class="text-xl font-display font-bold text-zinc-900 dark:text-white flex items-center gap-2.5">
        <GraduationCap class="w-6 h-6 text-emerald-500" />
        <span>Education Background</span>
      </h4>

      <div class="space-y-6">
        <div
          v-for="edu in educations"
          :key="edu.id"
          class="p-6 sm:p-8 bg-zinc-50/40 dark:bg-zinc-950/40 rounded-2xl border border-zinc-100 dark:border-zinc-900 shadow-sm hover:border-emerald-500/20 transition-colors"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h5 class="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white">
                {{ edu.degree }}
              </h5>
              <p class="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                {{ edu.school }}
              </p>
            </div>
            
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400  self-start sm:self-center">
              <Calendar class="w-3 h-3" />
              <span>{{ edu.period }}</span>
            </span>
          </div>
          
          <p v-if="edu.description" class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {{ edu.description }}
          </p>

          <div class="flex justify-end mt-2">
            <a  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] sm:text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 self-start sm:self-center"
            :href="edu.url" target="_blank">
              Visit School
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
