<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "html",
    content: `You have diving lessons every fifth day and swimming
    lessons every third day. Today you have both lessons. <br>
    <mark> In how many days will you
    have both lessons on the same day again?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "6", "8", "9", "15"
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
