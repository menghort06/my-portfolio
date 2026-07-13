<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Menu, X, Sun, Moon, ChevronDown, Calendar, Building2 } from 'lucide-vue-next';
import { useTheme } from '../../composables/useTheme';
import { useScroll } from '../../composables/useScroll';
import { navItems } from '../../data/header';
import { NavItem } from '@/src/types/nav-item';
  
const { darkMode, toggleDarkMode } = useTheme();
const { isMobileMenuOpen, scrolled } = useScroll();
const route = useRoute();
const router = useRouter();

// Track which dropdown is open on desktop
const openDropdown = ref<string | null>(null);
const activeRoute = ref<string | null>(null);
const isHeaderVisible = ref(false);

  /**
   * Conditionally set the active route based on the current path.
   * This function normalizes the path by removing query parameters and 
   * matches it against the navItems to determine the active route.
   * If a match is found, it sets the activeRoute to the corresponding item id; otherwise, it sets it to null.
   * @param path 
   */
const syncActiveRoute = (path: string) => {
  const normalizedPath = path ? path.split('?')[0] : '/';
  const matchedItem = navItems.find((item) => item.url && item.url === normalizedPath);
  activeRoute.value = matchedItem?.id ?? null;
};

const navigateRoute = (item: NavItem) => {
  activeRoute.value = item.id;
  if (item.url) {
    router.push(item.url);
  }
};

/**
 * Active style: Watch for changes in the route path and update the active route accordingly.
 */
watch(
  () => route.path,
  (path) => {
    syncActiveRoute(path);
  },
  { immediate: true }
);

const toggleDropdown = (id: string) => {
  openDropdown.value = openDropdown.value === id ? null : id;
};

const closeDropdown = () => {
  openDropdown.value = null;
};

// Track which mobile sub-menu is expanded
const mobileExpanded = ref<string | null>(null);
const toggleMobileExpand = (id: string) => {
  mobileExpanded.value = mobileExpanded.value === id ? null : id;
};

const hasChildren = (item: any) => item.dropdown && item.dropdown.length > 0;

/**
 * Add animation when reload to navbar
 */
onMounted(() => {
  requestAnimationFrame(() => {
    isHeaderVisible.value = true;
  });
});

</script>

<template>
  <nav
    id="main-header"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-800 ease-out',
      scrolled
        ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-900'
        : 'bg-transparent',
      isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    ]"
    @click.self="closeDropdown"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <button @click="navigateRoute({url: '/', id: 'home', label: 'Home'})"
            class="flex items-center gap-1 text-base font-display uppercase font-bold tracking-tight cursor-pointer text-zinc-900 dark:text-white"
          > 
            <img src="/images/menghort.png" alt="Hong Menghort" class="w-16 h-16 rounded-full object-cover">
            Hong Menghort
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <template v-for="item in navItems" :key="item.id">
            <!-- Nav item WITH dropdown -->
            <div v-if="hasChildren(item)" class="relative">
              <button
                @click="toggleDropdown(item.id)"
                :class="[
                  'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                  activeRoute === item.id
                    ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                ]"
              >
                {{ item.label }}
                <ChevronDown
                  :class="['w-3.5 h-3.5 transition-transform duration-200', openDropdown === item.id ? 'rotate-180 text-emerald-500' : '']"
                />
              </button>

              <!-- Dropdown panel -->
              <!-- Invisible backdrop to close dropdown on outside click -->
              <div
                v-if="openDropdown === item.id"
                class="fixed inset-0 z-40"
                @click="closeDropdown"
              ></div>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="openDropdown === item.id"
                  class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden z-50"
                >
                  <!-- Dropdown header -->
                  <div class="px-4 pt-3 pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
                    <p class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                      Timeline
                    </p>
                  </div>

                  <!-- Year entries -->
                  <div class="py-1.5">
                    <div
                      v-for="entry in item.dropdown"
                      :key="entry.label"
                      @click="() => {closeDropdown(); }"
                      class="flex items-center gap-3 px-4 py-2.5 cursor-pointer group hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors"
                    >
                      <!-- Year badge -->
                      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center">
                        <Calendar class="w-3 h-3 text-emerald-500 mb-0.5" />
                        <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 leading-none">
                          {{ entry.label }}
                        </span>
                      </div>

                      <!-- Info -->
                      <div class="overflow-hidden">
                        <p class="text-sm font-display font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-emerald-500 transition-colors">
                          {{ entry.label }}
                        </p>
                        <div class="flex items-center gap-1 mt-0.5">
                          <Building2 class="w-3 h-3 text-zinc-400 flex-shrink-0" />
                          <span class="text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate">
                            {{ entry.name }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- View all link -->
                  <div class="px-4 py-2.5 border-t border-zinc-100 dark:border-zinc-800/80">
                    <button
                      @click="() => {closeDropdown()}"
                      class="w-full text-xs font-mono font-semibold text-emerald-500 hover:text-emerald-600 transition-colors text-center"
                    >
                      View Full Experience →
                    </button>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Regular nav item (no dropdown) -->
            <button
              v-else
              @click="navigateRoute(item)"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                activeRoute === item.id
                  ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              ]"
            >
              {{ item.label }}
            </button>
          </template>

          <!-- Dark/Light Mode toggle -->
          <button
            @click="toggleDarkMode"
            class="ml-2 p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <Sun v-if="darkMode" class="w-5 h-5 text-amber-400" />
            <Moon v-else class="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        <!-- Mobile Menu Action Trigger -->
        <div class="flex items-center space-x-2 md:hidden">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <Sun v-if="darkMode" class="w-5 h-5 text-amber-400" />
            <Moon v-else class="w-5 h-5 text-zinc-700" />
          </button>
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <X v-if="isMobileMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900"
      >
        <div class="px-3 pt-2 pb-3 space-y-1">
          <template v-for="item in navItems" :key="item.id">

            <!-- Mobile: Item with sub-items (accordion) -->
            <div v-if="hasChildren(item)">
              <button
                @click="toggleMobileExpand(item.id)"
                :class="[
                  'flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer',
                  activeRoute === item.id
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white'
                ]"
              >
                <span>{{ item.label }}</span>
                <ChevronDown
                  :class="['w-4 h-4 transition-transform duration-200', mobileExpanded === item.id ? 'rotate-180 text-emerald-500' : '']"
                />
              </button>

              <!-- Accordion sub-list -->
              <transition
                enter-active-class="transition-all duration-300 ease-out overflow-hidden"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-96 opacity-100"
                leave-active-class="transition-all duration-200 ease-in overflow-hidden"
                leave-from-class="max-h-96 opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-if="mobileExpanded === item.id" class="ml-4 mt-1 space-y-1 border-l-2 border-emerald-500/20 pl-3">
                  <div
                    v-for="entry in item.dropdown"
                    :key="entry.label"
                    @click="() => { isMobileMenuOpen = false; }"
                    class="flex items-center gap-3 py-2.5 px-2 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors group"
                  >
                    <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <span class="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {{ entry.label }}
                      </span>
                    </div>
                    <div class="overflow-hidden">
                      <p class="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-emerald-500 transition-colors">
                        {{ entry.label }}
                      </p>
                      <p class="text-xs font-mono text-zinc-500 truncate">{{ entry.name }}</p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Mobile: Regular item -->
            <button
              v-else
              @click="navigateRoute(item), isMobileMenuOpen = false"
              :class="[
                'block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer',
                activeRoute === item.id
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white'
              ]"
            >
              {{ item.label }}
            </button>
          </template>
        </div>
      </div>
    </transition>
  </nav>
</template>
