<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A piece of wood is 4 feet long. <br><mark>A. How many 
    <math display="span">
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    foot pieces can you cut from the piece of wood?
    <br>B. How much wood is left over?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `A: 3 <br>
      B: 0 ft.`, 
      `A: 3<br>
      B: <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> ft.`, 
      `A: <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      <br>
      B: <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> ft.`,
      `A: <math display="span">
        <mn>5</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      <br>
      B: <math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
      </math> ft.`,
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
