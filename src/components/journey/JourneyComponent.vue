<script setup lang="ts">
import { ref, computed } from 'vue';
import { Briefcase, GraduationCap, Star, ChevronDown, ChevronUp, ExternalLink, Award, CheckCircle2, Info} from 'lucide-vue-next';
import { journeyEvents, journeyInfo } from '../../data/journey';

// Active type filter
type FilterType = 'all' | 'work' | 'education';
const activeFilter = ref<FilterType>('all');
  // Map icon names to actual components
const iconMap: { [key: string]: any } = {
  Briefcase, GraduationCap
};
const prop = defineProps({
  isShowFilter: {
    type: Boolean,
    default: true
  }
})


const filters: { id: FilterType; label: string }[] = [
  { id: 'all',       label: 'All' },
  { id: 'work',      label: 'Work' },
  { id: 'education', label: 'Education' },
];

// Descending by year so most recent is at top
const sorted = computed(() => {
  const list = activeFilter.value === 'all'
    ? journeyEvents
    : journeyEvents.filter(e => e.type === activeFilter.value);
  return [...list].sort((a, b) => parseInt(b.year) - parseInt(a.year));
});

// Expand/collapse individual cards
const expanded = ref<Set<string>>(new Set());
const toggle = (id: string) => {
  if (expanded.value.has(id)) expanded.value.delete(id);
  else expanded.value.add(id);
};

const isOpen = (id: string) => expanded.value.has(id);

const colorFor = (type: string) => ({
  work:      { dot: 'bg-emerald-500 border-emerald-400', icon: 'text-emerald-500', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
  education: { dot: 'bg-sky-500 border-sky-400',         icon: 'text-sky-500',     badge: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
  milestone: { dot: 'bg-violet-500 border-violet-400',   icon: 'text-violet-500',  badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20' },
}[type] ?? { dot: 'bg-zinc-400', icon: 'text-zinc-400', badge: 'bg-zinc-100 text-zinc-600 border-zinc-200' });
</script>

<template>
  <section id="journey" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-10">
      <div class="mb-14 portfolio-panel">
        <p class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-3">
          {{ journeyInfo.label }}
        </p>

        <div class="w-fit">
          <h2 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {{ journeyInfo.title }}
          </h2>
          <div class="w-full h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
        </div>

        <p>
          {{ journeyInfo.description }}
        </p>
      </div>

      <!-- Filter -->
      <div v-if="prop.isShowFilter" class="flex justify-center mb-12">
        <div class="journey-filter-track">
          <button
            v-for="f in filters"
            :key="f.id"
            @click="activeFilter = f.id"
            :class="['journey-filter-btn', activeFilter === f.id ? 'journey-filter-btn--active' : '']"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="timeline-line"></div>

        <div class="space-y-8">
          <transition-group name="timeline-item">
            <div
              v-for="event in sorted"
              :key="event.id"
              class="relative flex gap-6 sm:gap-8"
            >
              <!-- Dot + icon -->
              <div class="relative flex flex-col items-center shrink-0" style="width: 40px;">
                <div :class="['timeline-dot border-2', colorFor(event.type).dot]">
                  <component :is="iconMap[event.icon]" :class="['w-3.5 h-3.5', colorFor(event.type).icon]" />
                </div>
                <!-- year label beside dot -->
                <span class="timeline-year">{{ event.year }}</span>
              </div>

              <!-- Card -->
              <div class="journey-card flex-1 mb-2">
                <!-- Card header -->
                <div
                  class="flex items-start justify-between gap-3 cursor-pointer select-none"
                  @click="toggle(event.id)"
                >
                  <div class="flex-1 min-w-0">
                    <!-- type badge -->
                    <span :class="['journey-badge', colorFor(event.type).badge]">
                      {{ event.type }}
                    </span>

                    <h3 class="mt-2 text-sm sm:text-base font-display font-bold text-zinc-900 dark:text-white leading-snug">
                      {{ event.title }}
                    </h3>

                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                      <span class="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400">
                        {{ event.organization }}
                      </span>
                      <span class="text-xs text-zinc-400">·</span>
                      <span class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{{ event.period }}</span>
                      <a
                        v-if="event.url"
                        :href="event.url"
                        target="_blank"
                        rel="noopener"
                        @click.stop
                        class="ml-auto text-zinc-400 hover:text-emerald-500 transition-colors"
                        title="Visit website"
                      >
                        <ExternalLink class="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <!-- Expand toggle -->
                  <button
                    class="shrink-0 mt-1 w-7 h-7 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                    :aria-label="isOpen(event.id) ? 'Collapse' : 'Expand'"
                  >
                    <ChevronUp v-if="isOpen(event.id)" class="w-4 h-4" />
                    <ChevronDown v-else class="w-4 h-4" />
                  </button>
                </div>

                <!-- Expandable body -->
                <div v-show="isOpen(event.id)" class="journey-card-body">
                  <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {{ event.description }}
                  </p>
                  <!-- Responsibilities -->
                  <div>
                    <h5 class="text-xs flex gap-1.5 flex-row font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                      <Info class="w-3.5 h-3.5 text-emerald-500" />
                      Responsibilities
                    </h5>
                    <ul class="space-y-2.5 ml-5">
                      <li
                        v-for="(h, i) in event.responsibilities"
                        :key="i"
                        class="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                      >
                        <span :class="['w-1.5 h-1.5 rounded-full mt-1.5 shrink-0', colorFor(event.type).dot.split(' ')[0]]"></span>
                        <span>{{ h }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Archivement -->
                  <!-- <div v-if="event.achievements.length" class="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                    <h5 class="text-xs font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                      <Award class="w-3.5 h-3.5 text-emerald-500" />
                      <span>Key Achievements</span>
                    </h5>
                    <ul class="space-y-2.5 ml-5">
                      <li v-for="(ach, aIdx) in event.achievements" :key="aIdx" class="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                        <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{{ ach }}</span>
                      </li>
                    </ul>
                  </div> -->

                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Timeline spine */
.timeline-line {
  position: absolute;
  left: 19px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    #10b981 8%,
    #0ea5e9 50%,
    #10b981 92%,
    transparent
  );
  opacity: 0.25;
}

/* Dot */
.timeline-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:root.dark .timeline-dot {
  background: #09090b;
  box-shadow: 0 0 0 4px rgba(9,9,11,0.9), 0 2px 8px rgba(0,0,0,0.4);
}

.timeline-dot:hover {
  transform: scale(1.12);
}

/* Year label */
.timeline-year {
  margin-top: 6px;
  font-size: 0.6rem;
  font-family: ui-monospace, monospace;
  color: #a1a1aa;
  letter-spacing: 0.05em;
  line-height: 1;
}

/* Card */
.journey-card {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(228,228,231,0.8);
  border-radius: 16px;
  padding: 18px 20px;
  backdrop-filter: blur(6px);
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}

.journey-card:hover {
  box-shadow: 0 8px 28px rgba(0,0,0,0.08);
  transform: translateY(-2px);
  border-color: rgba(16,185,129,0.25);
}

:root.dark .journey-card {
  background: rgba(9,9,11,0.55);
  border-color: rgba(39,39,42,0.7);
}

:root.dark .journey-card:hover {
  box-shadow: 0 8px 28px rgba(0,0,0,0.4);
  border-color: rgba(16,185,129,0.3);
}

/* Expandable body */
.journey-card-body {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(228,228,231,0.6);
}

:root.dark .journey-card-body {
  border-top-color: rgba(39,39,42,0.6);
}

/* Badge */
.journey-badge {
  display: inline-block;
  padding: 2px 10px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 999px;
  border-width: 1px;
  border-style: solid;
}

/* Filter pills */
.journey-filter-track {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 14px;
  background: rgba(244,244,245,0.7);
  border: 1px solid rgba(228,228,231,0.8);
  backdrop-filter: blur(8px);
}

:root.dark .journey-filter-track {
  background: rgba(9,9,11,0.6);
  border-color: rgba(39,39,42,0.8);
}

.journey-filter-btn {
  padding: 6px 18px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #71717a;
  transition: color 0.2s ease, transform 0.2s ease;
}

:root.dark .journey-filter-btn {
  color: #a1a1aa;
}

.journey-filter-btn:hover {
  color: #18181b;
  transform: translateY(-1px);
}

:root.dark .journey-filter-btn:hover {
  color: #fff;
}

.journey-filter-btn--active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff !important;
  box-shadow: 0 2px 10px rgba(16,185,129,0.4), 0 1px 3px rgba(0,0,0,0.12);
  transform: translateY(-1px);
}

/* Transition animations */
.timeline-item-enter-active,
.timeline-item-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.timeline-item-enter-from,
.timeline-item-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
