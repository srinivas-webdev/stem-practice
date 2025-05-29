<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `A gymnast’s score for a routine is calculated by finding the sum
    of a difficulty score and an execution score, minus any penalties.
    The execution score starts at 10 and is reduced by deductions.
    <br><mark>What is the final score of gymnast's?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "14.06", "15.06", "16", "17"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/04/gymnast.png" alt="gymnast" height="200">
        <img src="~/assets/maths/06/02/04/gymnast-score.png" alt="gymnast score" height="150">
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
