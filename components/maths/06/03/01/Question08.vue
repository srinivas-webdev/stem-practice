<script setup>
const qstnDetails = {
  questionType: "Dig Deeper",
  question: {
    "content-type": "html",
    content: `There are 3 boys for every 2 girls in a dance competition.
    <br><mark>Does it make sense for there to be a total of 9 people in the competition?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "Yes", "No"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
