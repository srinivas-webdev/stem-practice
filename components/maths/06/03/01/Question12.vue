<script setup>
const qstnDetails = {
  questionType: "Dig Deeper",
  question: {
    "content-type": "html",
    content: `There are 3 bones in a cat for every 4 bones in a dog.
    The cat has 240 bones.
    <mark>How many bones does the dog have?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "300", "320", "350", "400"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
