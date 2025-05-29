<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "normal",
    content: `Which model represents an LCM that is different from the other?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "image",
    displayedChoices: [
     "lcm-jump-1", 
     "lcm-jump-2", 
     "lcm-jump-3", 
     "lcm-jump-4", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>

<style scoped>
:deep(mark) {
  display: inline-block;
  background-color: darkturquoise;
  padding: .5rem;
  border-radius: .5rem;
}
</style>
