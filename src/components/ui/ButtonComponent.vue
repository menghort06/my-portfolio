<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button
        class="w-full sm:w-auto text-sm px-4 py-2 rounded-lg border text-emerald-500 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 font-medium transition-colors hover:cursor-pointer"
    >
    <span>{{ props.label }}</span>
    </button>
</template>