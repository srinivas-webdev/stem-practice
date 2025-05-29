<script setup>
const qstnDetails = {
  questionType: "PERFECT NUMBERS",
  question: {
    "content-type": "html",
    content: `A perfect number is a number that equals the sum of its
      factors, not including itself. <br/>
      For example, the factors of 28 are 1, 2, 4, 7, 14, and 28.
      Because 1 + 2 + 4 + 7 + 14 = 28, 28 is a perfect number. <br/>
      What are the perfect numbers between 1 and 27?`,
  },
  isSolutionSingle: false,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: ['1', '4', '6', '13', '27'],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
