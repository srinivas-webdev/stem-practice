<script setup>
const qstnDetails = {
  questionType: "Critical Thinking",
  question: {
    "content-type": "html",
    content: `Two whole numbers A and B satisfy the following conditions. <br>
    A - B = 25 and A : B is equivalent to 13 : 8.
    <br><mark>Find A and B.</mark>`,
  },
  isSolutionSingle: false,
  solution: [2, 3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `39`, `42`, `65`, `40`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
