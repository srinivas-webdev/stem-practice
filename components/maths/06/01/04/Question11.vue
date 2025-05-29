<script setup>
const qstnDetails = {
  questionType: "CRITICAL THINKING",
  question: {
    "content-type": "html",
    content: `Tell whether the statement is always, sometimes, or never true.
    <br/>
    The GCF of two prime numbers is 1.`,
  },
  isSolutionSingle: true,
  solution: [0],
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
 