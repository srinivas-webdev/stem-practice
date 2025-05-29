<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `You need to read 20 poems in 5 days for an English project. 
    Each poem is 2 pages long. Evaluate the expression 20 × 2 ÷ 5 to find
    how many pages you need to read each day.`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "5",
      "8",
      "10", 
      "20", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
