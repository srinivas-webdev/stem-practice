<script setup>
// redirecting to main page
await navigateTo('/');
const topic = ref('');
</script>

<template>
  <p>{{ topic }}</p>
</template>

