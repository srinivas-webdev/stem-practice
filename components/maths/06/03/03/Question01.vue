<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A person hikes 4 miles in 2.5 hours. 
    <br><mark>Find the unit rate in miles per hour.</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      '0.5', '1', '1.6', '2'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
