<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `An office printer prints 25 photos in 12.5 minutes.
    A home printer prints 15 photos in 6 minutes.
    <br><mark>How many more photos can you print in 12 minutes using the faster printer?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      '12', '15', '25', '30'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
