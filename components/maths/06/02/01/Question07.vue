<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "html",
    content: `In an aquarium, 
    <math display="span">
      <mfrac>
        <mn>2</mn>
        <mn>5</mn>
      </mfrac>
    </math>
    of the fish are surgeonfish. Of these, 
    <math display="span">
      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    are yellow tangs. 
    <br><mark>What portion of all fish in the aquarium are yellow tangs?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mfrac>
          <mn>2</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>4</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>5</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>10</mn>
        </mfrac>
      </math>`, 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/01/surgeon-fish.png" alt="surgeon fish"  height="200">
        <img src="~/assets/maths/06/02/01/yellow-tang.png" alt="yellow tang"  height="200">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 2rem;
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
