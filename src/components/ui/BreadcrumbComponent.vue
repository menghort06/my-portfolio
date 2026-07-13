<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() =>
  route.matched
    .filter(item => item.meta.title)
    .map((item, index, arr) => {
      let path = item.path;
      for (const key in route.params) {
        path = path.replace(`:${key}`, String(route.params[key]));
      }
      return {
        name: item.meta.title as string,
        path,
        isLast: index === arr.length - 1,
      };
    })
);
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 text-sm">
      <template v-for="(item, index) in breadcrumbs" :key="item.path">
        <li v-if="index > 0" class="text-gray-400">/</li>

        <li>
          <RouterLink
            v-if="!item.isLast"
            :to="item.path"
            class="text-gray-500 hover:text-emerald-600 transition-colors"
          >
            {{ item.name }}
          </RouterLink>

          <span v-else class="font-medium text-gray-500">
            {{ item.name }}
          </span>
        </li>
      </template>
    </ol>
  </nav>
</template>