<script setup>
const qstnDetails = {
  questionType: "Dig Deeper",
  question: {
    "content-type": "html",
    content: `There are 12 boys and 10 girls in your class. If 6 boys joined
    the class,
    <mark>how many girls would need to join for the ratio of boys to girls
    to remain the same?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "4", "5", "6", "10"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
