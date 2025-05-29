<script setup>
const qstnDetails = {
  questionType: "MODELING REAL LIFE",
  question: {
    "content-type": "normal",
    content: `You are making balloon arrangements for a
    birthday party. There are 16 white balloons and 24 red balloons.
    Each arrangement must be identical. What is the greatest number
    of arrangements you can make using every balloon?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "4", "8", "16", "24" 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/04/party-ballons.png" alt="party ballons"  height="200">
      </menu>
    </template>
  </BaseMCQ>
</template>

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

