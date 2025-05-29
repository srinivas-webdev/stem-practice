<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `You use
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>8</mn>
      </mfrac>
    </math>
    of your battery for every 
    <math display="span">
      <mfrac>
        <mn>2</mn>
        <mn>5</mn>
      </mfrac>
    </math>
    of an hour that you video call. You used
    <math display="span">
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    of your battery for your video call.
    <br><mark>How long did you video call?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      '2 hrs', 
      '2 hrs 10 min', 
      '2 hrs 24 min', 
      '2 hrs 30 min' 
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
