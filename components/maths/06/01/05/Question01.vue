<script setup>
const qstnDetails = {
  questionType: "REASONING",
  question: {
    "content-type": "normal",
    content: `Find the LCM of 16 and 20.`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "4", 
      "20", 
      "80",  
      "320", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
