<script setup>
const qstnDetails = {
  questionType: "WHICH ONE DOESN’T BELONG?",
  question: {
    "content-type": "normal",
    content: `Which of the following does not belong with the other three?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mfrac>
          <mn>2</mn>
          <mn>3</mn>
        </mfrac>
        <mo>&divide;</mo>
        <mfrac>
          <mn>4</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>2</mn>
        </mfrac>
        <mo>&sdot;</mo>
        <mfrac>
          <mn>4</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>5</mn>
          <mn>4</mn>
        </mfrac>
        <mo>&times;</mo>
        <mfrac>
          <mn>2</mn>
          <mn>3</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>5</mn>
          <mn>4</mn>
        </mfrac>
        <mo>&divide;</mo>
        <mfrac>
          <mn>3</mn>
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
