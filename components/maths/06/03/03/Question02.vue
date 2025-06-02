<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `Lightning strikes Earth 1000 times in 10 seconds. 
    <br><mark>How many seconds does it take for lightning to strike 7250 times?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      '60', '72.5', '75.5', '80'
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/03/lightning.png" alt="lightning" height="150">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
.figurines {
  display: flex;
  flex-wrap: wrap;
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