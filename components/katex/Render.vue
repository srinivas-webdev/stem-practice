<script setup>
import katex from "katex";
const props = defineProps({
  math: {
    type: String,
    default: ''
  },
});

const options = {
  displayMode: false,
  throwOnError: false
}

const katexString = katex.renderToString(props.math, options);
</script>

<template>
<span v-html="katexString" />
</template>