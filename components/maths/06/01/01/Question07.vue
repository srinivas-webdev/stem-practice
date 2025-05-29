<script setup>
const qstnDetails = {
  questionType: "Repeated Reasoning",
  question: {
    "content-type": "html",
    content: `What is the last digit of 7<sup>2024</sup> ?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "1", "3", "5", "7", "9"
    ],
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>