<script setup>
const qstnDetails = {
  questionType: "CRITICAL THINKING",
  question: {
    "content-type": "html",
    content: `Tell whether the statement is always, sometimes, or never true.
    <br/>
    The GCF of two even numbers is 2.`,
  },
  isSolutionSingle: true,
  solution: [1],
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
 