<script setup>
const qstnDetails = {
  questionType: "Which One Doesn’t Belong?",
  question: {
    "content-type": "normal",
    content: `Which factor pair does not belong with the other three?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "2, 28", 
      "4, 14", 
      "6, 9",  
      "7, 8", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
