<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `You earn $35 for washing 7 cars. 
    <br><mark>How much do you earn for washing 4 cars?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      '10 dollars', '15 dollars', '20 dollars', '25 dollars'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
