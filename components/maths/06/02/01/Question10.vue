<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "html",
    content: `A vitamin C tablet contains 
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    of a gram of vitamin C. You take 
    <math display="span">
      <mn>1</mn>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </math>
    tablets every day. 
    <br><mark>How many grams of vitamin C do you take every day?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
      </math> gm`, 
      `<math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>8</mn>
        </mfrac>
      </math> gm`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>8</mn>
        </mfrac>
      </math> gm`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>4</mn>
        </mfrac>
      </math> gm`, 
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
}
</style>
