<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { skills, skillsSection } from '../../data/skill';
import { useRouter } from 'vue-router';
import ButtonComponent from '../ui/ButtonComponent.vue';

const prop = defineProps({
  isDisplaySomeCategory: {
    type: Boolean,
    default: false
  }
});

const router = useRouter();
type SkillCategory = 'frontend' | 'ui' | 'tool' | 'other';

const categoryLabelMap: Record<string, string> = {
  frontend: 'Frontend',
  ui: 'UI / Style',
  tool: 'Tool',
  other: 'Other'
};

const categoryAccentMap: Record<string, string> = {
  frontend: 'border-emerald-400/25 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.16)]',
  ui: 'border-fuchsia-400/25 hover:border-fuchsia-400/50 hover:shadow-[0_0_35px_rgba(192,132,252,0.16)]',
  tool: 'border-amber-400/25 hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.16)]',
  other: 'border-sky-400/25 hover:border-sky-400/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.16)]'
};

const categoryDescriptionMap: Record<string, string> = {
  frontend: 'Built interfaces',
  ui: 'Visual systems',
  tool: 'Build workflow',
  other: 'Flexible add-ons'
};

const groupedSkills = computed(() => {
  if (prop.isDisplaySomeCategory) {
    const categories: SkillCategory[] = ['frontend', 'ui', 'tool', 'other'];
    return categories.map(category => ({
      category,
      items: skills.filter(skill => skill.category === category).slice(0, 5)
    })).filter(group => group.items.length > 0);
  }

  const categories: SkillCategory[] = ['frontend', 'ui', 'tool', 'other'];
  return categories.map(category => ({
    category,
    items: skills.filter(skill => skill.category === category)
  })).filter(group => group.items.length > 0);
});

const navigateTo = () => {
  router.push('/skill');
}

const getCategoryLabel = (category: string) => categoryLabelMap[category] ?? 'Other';
const getCategoryDescription = (category: string) => categoryDescriptionMap[category] ?? 'Growing toolkit';

</script>

<template>
  <section id="skills" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="portfolio-panel mb-10">
      <div class="flex flex-col gap-6">
        <div class="max-w-2xl">
          <p class="mb-3 text-sm font-mono uppercase tracking-[0.35em] text-emerald-400">
            My Tech stack
          </p>
          <div class="w-fit">
            <h3 class="text-3xl font-display font-bold tracking-tight  sm:text-4xl">
              {{ skillsSection.title }}
            </h3>

            <div class="mt-4 h-1 w-full rounded-full bg-emerald-500"></div>
          </div>
        </div>

        <!-- <div class="rounded-2xl w-fit border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm ">
          Built for fast iteration, clean interfaces, and thoughtful product detail
        </div> -->
      </div>

      <div class="mt-8 flex flex-col gap-3">
        <p v-for="sk in skillsSection.details" class="text-sm leading-7 text-zinc-400 sm:text-base">
          {{ sk.description }}
        </p>
      </div>

      <div v-if="prop.isDisplaySomeCategory" class="mt-8 flex justify-center">
        <ButtonComponent @click="navigateTo" :label="'See More'" />
      </div>
    </div>

    <div v-if="!prop.isDisplaySomeCategory" class="space-y-8">
      <div
        v-for="group in groupedSkills"
        :key="group.category"
        class="portfolio-panel"
      >
        <div class="mb-4 flex items-center justify-between">
          <h4 class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {{ getCategoryLabel(group.category) }}
          </h4>
          <span class="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            {{ group.items.length }} items
          </span>
        </div>

        <div class="grid grid-3">
          <div
            v-for="skill in group.items"
            :key="skill.name"
            class="group rounded-2xl border  p-4 transition-all duration-300 "
          >
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-sm font-semibold text-emerald-300">
                {{ skill.name.substring(0, 2) }}
              </div>
              <div>
                <h5 class="text-sm font-semibold text-white">
                  {{ skill.name }}
                </h5>
                <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {{ getCategoryDescription(group.category) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>
