<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `A nutrition label shows that there are 75 milligrams of sodium
    in every 12 crackers. You eat 30 crackers.
    <br><mark>How much sodium do you consume?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `150 mg`, `187.5 mg`, `225 mg`, `300 mg`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/02/crackers.png" alt="crackers" height="200">
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
