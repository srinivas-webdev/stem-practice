<script setup>
const qstnDetails = {
  questionType: "Reasoning",
  question: {
    "content-type": "normal",
    content: `A teacher divides 36 students into equal
      groups for a scavenger hunt. Each group should have at
      least 4 students but no more than 8 students. How many are the
      possible group sizes?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "1", 
      "2", 
      "4",  
      "8", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
