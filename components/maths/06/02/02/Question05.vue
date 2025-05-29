<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A band earns
    <math display="span">
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
    of their profit from selling concert tickets and
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>5</mn>
      </mfrac>
    </math>
    of their profit from selling merchandise. 
    The band earns a profit of $1500 from selling concert tickets.
    <br><mark>How much profit does the band earn from selling merchandise?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      '300 dollars', '400 dollars', '500 dollars', '600 dollars' 
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
