<script setup lang="ts">
// Main App Entry point
// Note: Router is configured in main.ts, layouts in MainLayout.vue
</script>

<template>
  <router-view />
</template>

<style>
/* Scoped layout animations and global fonts overrides */
.font-display {
  font-family: var(--font-display, "Inter", sans-serif);
}
.font-mono {
  font-family: var(--font-mono, monospace);
}
</style>
