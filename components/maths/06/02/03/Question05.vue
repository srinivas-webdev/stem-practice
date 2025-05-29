<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `A watercooler contains 160 cups of water. During practice, 
    each person on a team fills a water bottle with 
    <math display="span">
      <mn>3</mn>
      <mfrac>
        <mn>1</mn>
        <mn>3</mn>
      </mfrac>
    </math>
    cups of water from the cooler.
    <br><mark>Is there enough water for all 45 people on the team to fill
    their water bottles? </mark>
    `,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      "Yes", "No"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.5rem;
  math-style: compact; 
}
</style>
