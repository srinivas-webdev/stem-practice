<script setup>
const qstnDetails = {
  questionType: "CRITICAL THINKING",
  question: {
    "content-type": "html",
    content: `Tell whether the statement is always, sometimes, or never true.
    <br/>
    When one number is a multiple of another, the GCF of the numbers
    is the greater of the numbers.`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "Always true.", "Sometimes true.", "Never true."
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
 