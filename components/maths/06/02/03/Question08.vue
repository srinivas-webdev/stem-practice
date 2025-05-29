<script setup>
const qstnDetails = {
  questionType: "PROBLEM SOLVING",
  question: {
    "content-type": "html",
    content: `A platinum nugget weighs 
    <math display="span">
      <mn>3</mn>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </math> 
    kilograms. 
    <br><mark>How many 
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    kilogram pieces can be cut from the nugget?
    </mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "7", "14", "21", "28" 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/03/platinum-nuggets.png" alt="platinum nuggets"  height="150">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.5rem;
  math-style: compact; 
}
</style>
<style scoped>
.figurines {
  display: flex;
  max-width: 100%;
  padding: 0;
  margin: 0;

  img {
    object-fit: cover;
    max-width: 100%;
    align-self: end;
    mix-blend-mode: multiply;
  }
}
</style>

