<script setup>
const qstnDetails = {
  questionType: "REASONING",
  question: {
    "content-type": "html",
    content: `A water tank is
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>8</mn>
      </mfrac>
    </math>
    full. The tank is 
    <math display="span">
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    full when 40 liters of water are added to the tank.
    <br><mark>How much water can the tank hold?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      '40 liters', 
      '48 liters', 
      '56 liters', 
      '64 liters' 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/02/water-tank.png" alt="water tank"  height="200">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.75rem;
  math-style: compact; 
}
</style>
