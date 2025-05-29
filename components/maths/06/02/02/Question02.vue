<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `Find
    <math display="span">
      <mfrac>
        <mn>4</mn>
        <mn>5</mn>
      </mfrac>
      <mo>&divide;</mo>
      <mn>2</mn>
    </math>
   .`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mn>2</mn>
        <mfrac>
          <mn>4</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>2</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>4</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>8</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
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
