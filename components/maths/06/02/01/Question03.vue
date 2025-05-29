<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `Find
    <math display="span">
      <mn>1</mn>
      <mfrac>
        <mn>4</mn>
        <mn>5</mn>
      </mfrac>
      <mo>&times;</mo>
      <mn>3</mn>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
   .`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mn>3</mn>
        <mfrac>
          <mn>8</mn>
          <mn>15</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mn>6</mn>
        <mfrac>
          <mn>8</mn>
          <mn>15</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mn>6</mn>
        <mfrac>
          <mn>3</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mn>6</mn>
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
  font-size: 2rem;
  math-style: compact; 
}
</style>
