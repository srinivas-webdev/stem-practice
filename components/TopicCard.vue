<script setup>
const props = defineProps({
  topic: {
    type: Object,
    default: null
  }
});

</script>

<template>
<img class="topic-bg"  :src="`/${props.topic.name}.png`" >

<h2 class="topic-heading">
  {{ props.topic.heading }}
</h2>
  
<p class="topic-desc">{{ props.topic.description }}</p>
</template>

<style scoped>

.topic-bg {
  width: 100%;
  max-height: 15rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.topic-heading {
  margin-block: 0;
  padding-inline: 0.5rem;
}

.topic-desc {
  padding-inline: 0.5rem;
  font-size: large;
  font-weight: 500;
}
</style>