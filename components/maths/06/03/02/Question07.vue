<script setup>
const qstnDetails = {
  questionType: "Reasoning",
  question: {
    "content-type": "html",
    content: `The ratio of three numbers is 1 : 2 : 3.
    The sum of the numbers is 18.
    <br><mark>Find product of the three numbers.</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `108`, `120`, `150`, `162`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
