<script setup>
const qstnDetails = {
  questionType: "Which One Doesn’t Belong?",
  question: {
    "content-type": "normal",
    content: `Which one does not belong with the other three?`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "katex",
    displayedChoices: [
      "{5^2} - {8 \\times 2}", 
      "{5^2} - ({8 \\times 2})", 
      "{5^2} - {2 \\times 8}",  
      "{({5^2} - 8) \\times 2}", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
