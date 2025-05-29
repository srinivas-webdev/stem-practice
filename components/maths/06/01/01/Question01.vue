<script setup>
const qstnDetails = {
  questionType: "Which One Doesn’t Belong?",
  question: {
    "content-type": "normal",
    content: `Which one does not belong with the other three?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "katex",
    displayedChoices: [
      "{2^4} = {2 \\times 2 \\times 2 \\times 2}", 
      "{3^2} = {3 \\times 3}", 
      "{3+3+3+3} = {3 \\times 4}", 
      "{5\\cdot5\\cdot5} = {5^3}", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
