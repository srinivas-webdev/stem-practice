<script setup>
const qstnDetails = {
  questionType: "DIG DEEPER!",
  question: {
    "content-type": "normal",
    content: `Consider the rectangular prism shown. Using
      only whole number dimensions, how many diff erent prisms
      are possible?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "4",
      "6",
      "8",
      "10",
      "20"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/03/prism.png" alt="prism" height="200">
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
