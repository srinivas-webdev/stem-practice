<script setup>
const qstnDetails = {
  questionType: "DIG DEEPER!",
  question: {
    "content-type": "html",
    content: `A radio station gives away $15 to every 15th caller,
    $25 to every 25th caller, and a free concert ticket to every 100th caller. <br>
    <mark> When will the station first give away all three prizes to one caller?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "100th caller", "200th caller", "300th caller", "400th caller", 
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
