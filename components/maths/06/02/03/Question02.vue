<script setup>
const qstnDetails = {
  questionType: "EVALUATING EXPRESSIONS",
  question: {
    "content-type": "html",
    content: `Evaluate
    <math display="span">
      <mn>5</mn>
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
      <mo>&divide;</mo>
      <mn>1</mn>
      <mfrac>
        <mn>1</mn>
        <mn>8</mn>
      </mfrac>
      <mo>&minus;</mo>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
    .`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "1", "2", "3", "4"
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
  font-size: 1.75rem;
  math-style: compact; 
}
</style>

