<script setup>
const qstnDetails = {
  questionType: "Critical Thinking",
  question: {
    "content-type": "html",
    content: `Two whole numbers A and B satisfy the following conditions. <br>
    A + B = 30 and A : B is equivalent to 2 : 3.
    <br><mark>Find A and B.</mark>`,
  },
  isSolutionSingle: false,
  solution: [1, 2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `6`, `12`, `18`, `24`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
