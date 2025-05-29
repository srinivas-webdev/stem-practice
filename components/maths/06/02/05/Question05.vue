<script setup>
const qstnDetails = {
  questionType: "PATTERNS",
  question: {
    "content-type": "html",
    content: `<mark>Find the next number in the pattern?</mark>
    <br>0.04, 0.02, 0.01, 0.005, . . .
    `,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      '0.2', '0.04', '0.025', '.0025'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
