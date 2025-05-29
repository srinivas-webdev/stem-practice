<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "normal",
    content: `A teacher is making identical activity packets
      using 92 crayons and 23 sheets of paper. What is the greatest number
      of packets the teacher can make with no items left over?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "2", 
      "20",  
      "23",   
      "92",  
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
