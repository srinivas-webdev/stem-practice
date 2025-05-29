<script setup>
const qstnDetails = {
  questionType: "LOGIC",
  question: {
    "content-type": "html",
    content: `You and a friend are running on treadmills. 
    You run 0.5 mile every 3 minutes, 
    and your friend runs 2 miles every 14 minutes. You both start and
    stop running at the same time and run a whole number of miles. <br>
    <mark> What are the least possible numbers of miles you and your friend can run?</mark>`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "you: 7 miles; your friend: 6 miles", 
     "you: 3 miles; your friend: 6 miles",
     "you: 6 miles; your friend: 7 miles",
     "you: 3 miles; your friend: 14 miles",
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
