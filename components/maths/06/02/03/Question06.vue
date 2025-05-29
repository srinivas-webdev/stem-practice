<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `A cyclist is  
    <math display="span">
      <mn>7</mn>
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    kilometers from the finish line of a race. The cyclist rides at a rate of 
    <math display="span">
      <mn>25</mn>
      <mfrac>
        <mn>5</mn>
        <mn>6</mn>
      </mfrac>
    </math>
    kilometers per hour.
    <br><mark>How many minutes will it take the cyclist to finish the race?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      "15", "18", "20", "25"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/03/cyclist.png" alt="cyclist"  height="150">
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
