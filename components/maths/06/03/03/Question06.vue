<script setup>
const qstnDetails = {
  questionType: "Dig Deeper!",
  question: {
    "content-type": "html",
    content: `You can complete one-half of a job in an hour.
    Your friend can complete one-third of the same job in an hour.
    <br><mark>How long will it take to complete the job if you work together?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      '1 hour', '1.2 hour', '1.5 hour', '2 hours'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
