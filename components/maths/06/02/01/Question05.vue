<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `You spend 
    <math display="span">
      <mfrac>
        <mn>5</mn>
        <mn>12</mn>
      </mfrac>
    </math>
    of a day at an amusement park. 
    You spend 
    <math display="span">
      <mfrac>
        <mn>2</mn>
        <mn>5</mn>
      </mfrac>
    </math>
    of that time riding waterslides.
    <br><mark>How many hours do you spend riding waterslides?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mfrac>
          <mn>5</mn>
          <mn>12</mn>
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
          <mn>1</mn>
          <mn>6</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
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
