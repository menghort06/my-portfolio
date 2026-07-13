<script setup lang="ts">
import { ref, computed } from 'vue';
import { Calendar } from 'lucide-vue-next';
import { projects, projectInfo } from '../../data/project';
import ButtonComponent from '../ui/ButtonComponent.vue';
import { useRouter } from 'vue-router';

const prop = defineProps({
  isSeeMore: {
    type: Boolean,
    default: false
  }
})
const router = useRouter();
const activeProjectFilter = ref<'all' | 'vue' | 'react' | 'angular' | 'ui/ux'>('all');

const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'angular', label: 'Angular' },
  { id: 'vue', label: 'Vue & Nuxt' },
  { id: 'ui/ux', label: 'UI/UX' }
];

const filteredProjects = computed(() => {
  const filter = activeProjectFilter.value;
  return projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'vue') {
      return project.techStack.some(t => t.toLowerCase().includes('vue') || t.toLowerCase().includes('nuxt'));
    }
    if (filter === 'react') {
      return project.techStack.some(t => t.toLowerCase().includes('react'));
    }
    if (filter === 'angular') {
      return project.techStack.some(t => t.toLowerCase().includes('angular'));
    }
    if (filter === 'ui/ux') {
      return project.techStack.some(t => t.toLowerCase().includes('ui/ux'));
    }
    return true;
  });
});

const getProjectGradient = (id: string) => {
  switch (id) {
    case '1': return 'from-emerald-500 to-teal-600';
    case '2': return 'from-indigo-500 to-purple-600';
    case '3': return 'from-red-500 to-pink-600';
    case '4': return 'from-cyan-400 to-emerald-500';
    case '5': return 'from-amber-400 to-orange-500';
    case '6': return 'from-blue-600 to-violet-600';
    default: return 'from-zinc-500 to-zinc-600';
  }
};

const navigateTo = () => {
  router.push('/project');
}

const navigateToProject = (id: string) => {
  router.push(`/project/detail/${id}`);
}
</script>

<template>
  <section id="projects" class="py-24 bg-zinc-50/40 dark:bg-zinc-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="portfolio-panel mb-10">
        <div class="flex flex-col gap-6">
          <div class="w-fit">
            <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2">
              Featured Work
            </h2>
            <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
              Projects Section
            </h3>
            <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <p class="text-justify">{{ projectInfo.description }}</p>
          
          <div v-if="prop.isSeeMore" class="flex justify-center mt-8">
            <ButtonComponent @click="navigateTo" :label="'See More'"/>
          </div>
        </div>
      </div>

      <div v-if="!prop.isSeeMore" >
        <!-- Project Filter tabs -->
        <div class="filter-tabs-wrapper mb-12">
          <div class="filter-tabs-track">
            <button
              v-for="tab in projectFilters"
              :key="tab.id"
              @click="activeProjectFilter = tab.id"
              :class="['filter-tab', activeProjectFilter === tab.id ? 'filter-tab--active' : '']"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>
  
        <!-- Projects grid -->
        <div class="grid grid-3">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="cursor-pointer bg-zinc-50/40 dark:bg-zinc-950/40 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-900 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 flex flex-col h-full group"
            @click="navigateToProject(project.id)"
            >
            <div :class="['relative h-48 sm:h-52 w-full overflow-hidden shrink-0 bg-gradient-to-br', getProjectGradient(project.id)]">
              <img  v-if="project.photo"
                :src="project.photo"
                :alt="project.name"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
  
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-900/20 to-transparent" />
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_45%)]" />
  
  
              <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p class="text-[10px] font-mono uppercase tracking-[0.35em] text-white/70">
                    Featured Project
                  </p>
                  <p class="mt-1 text-sm font-semibold text-white">
                    {{ project.name }}
                  </p>
                </div>
                <span class="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-emerald-500 backdrop-blur-sm">
                  {{ project.category }}
                </span>
              </div>
            </div>
  
            <!-- Content panel -->
            <div class="p-6 sm:p-8 flex flex-col grow justify-between">
              <div>
                <h4 class="text-lg sm:text-xl font-display font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {{ project.name }}
                </h4>
  
                <!-- <p class="text-xs sm:text-sm text-justify text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {{ project.description }}
                </p> -->
  
                
              </div>
  
              <!-- Footer links -->
              <div >
                  <div class="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                    <div
                      class="flex flex-col items-start gap-1.5 text-xs font-mono font-semibold text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                    <span v-for="tech in project.techStack" :key="tech">
                      {{ tech }}
                    </span>
                  </div>
  
                  <div
                    class="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors ml-auto"
                  >
                    <Calendar class="w-3.5 h-3.5" />
                    <span>{{ project.year }}</span>
                  </div>
                </div>
  
                <p class="text-[10px] italic text-zinc-500">{{ project.manageStack }}</p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Filter tab wrapper ── */
.filter-tabs-wrapper {
  display: flex;
  justify-content: center;
}

.filter-tabs-track {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 14px;
  background: rgba(244, 244, 245, 0.7); /* zinc-100/70 */
  border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200/80 */
  backdrop-filter: blur(8px);
  flex-wrap: wrap;
  justify-content: center;
}

:root.dark .filter-tabs-track {
  background: rgba(9, 9, 11, 0.6); /* zinc-950/60 */
  border-color: rgba(39, 39, 42, 0.8); /* zinc-800/80 */
}

/* ── Individual tab ── */
.filter-tab {
  position: relative;
  padding: 7px 18px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #71717a; /* zinc-500 */
  transition: color 0.25s ease, transform 0.2s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.filter-tab:hover {
  color: #18181b; /* zinc-900 */
  transform: translateY(-1px);
}

:root.dark .filter-tab {
  color: #a1a1aa; /* zinc-400 */
}

:root.dark .filter-tab:hover {
  color: #ffffff;
}

/* ── Active state ── */
.filter-tab--active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff !important;
  box-shadow:
    0 2px 10px rgba(16, 185, 129, 0.4),
    0 1px 3px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.filter-tab--active:hover {
  box-shadow:
    0 4px 16px rgba(16, 185, 129, 0.55),
    0 2px 6px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

:root.dark .filter-tab--active {
  box-shadow:
    0 2px 12px rgba(16, 185, 129, 0.5),
    0 0 0 1px rgba(52, 211, 153, 0.2);
}
</style>
