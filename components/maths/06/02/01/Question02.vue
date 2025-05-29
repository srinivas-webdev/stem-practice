<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `Find
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
      <mo>&times;</mo>
      <mn>2</mn>
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
   .`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mn>1</mn>
        <mfrac>
          <mn>3</mn>
          <mn>8</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mn>2</mn>
        <mfrac>
          <mn>3</mn>
          <mn>8</mn>
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
          <mn>1</mn>
          <mn>2</mn>
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
