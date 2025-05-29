<script setup>
const qstnDetails = {
  questionType: "CRITICAL THINKING",
  question: {
    "content-type": "html",
    content: `Tell whether the statement is always, sometimes, or never true.
    <br/>
    The LCM of a set of numbers is equal to one of the numbers in the set.`,
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
 