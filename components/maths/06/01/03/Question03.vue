<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `What is the least perfect square that is a factor of 4536? 
    What is the greatest perfect square that is a factor of 4536?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "4 & 36", 
      "9 & 324", 
      "4 & 324",  
      "9 & 4536", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
