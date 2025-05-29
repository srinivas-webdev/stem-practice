<script setup>
const qstnDetails = {
  questionType: "DIFFERENT WORDS, SAME QUESTION",
  question: {
    "content-type": "html",
    content: `Which is different? Find “both” answers.`,
  },
  isSolutionSingle: false,
  solution: [1, 3],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `What is
      <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
      </math>
      divided by
      <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>8</mn>
        </mfrac>
      </math>
      ?`,
      `What is the quotient of 
      <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
      </math>
      and
      <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>8</mn>
        </mfrac>
      </math>
      ?`,
      `What is 
      <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
      </math>
      times 8 ?`,
      `What is
      <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>8</mn>
        </mfrac>
      </math>
      of
      <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
      </math>
      ?`,
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

