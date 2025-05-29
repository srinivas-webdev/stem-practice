<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `One serving of tortilla soup is 
    <math display="span">
      <mn>1</mn>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
    cups. A restaurant cook makes 50 cups of soup.
    <br><mark>Is there enough to serve 35 people?</mark>
    `,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      "Yes", "No"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/03/tortilla-soup.png" alt="tortilla-soup"  height="150">
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
