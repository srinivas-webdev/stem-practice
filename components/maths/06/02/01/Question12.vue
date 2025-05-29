<script setup>
const qstnDetails = {
  questionType: "LOGIC",
  question: {
    "content-type": "html",
    content: `You are in a bike race. When you get to the first checkpoint, 
    you are 
    <math display="span">
      <mfrac>
        <mn>2</mn>
        <mn>5</mn>
      </mfrac>
    </math>
    of the distance to the second checkpoint. 
    When you get to the second checkpoint, you are
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    of the distance to the finish.
    <br><mark> What is the distance from the start to the first checkpoint?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     '3 miles', '4 miles', '5 miles', '8 miles'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/01/bike-race.png" alt="bike race"  height="100">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>

<style scoped>
.figurines {
  display: flex;
  max-width: 100%;
  padding: 0;
  margin: 0;

  img {
    object-fit: scale-down;
    max-width: 100%;
    align-self: end;
    mix-blend-mode: multiply;
  }
}
</style>
