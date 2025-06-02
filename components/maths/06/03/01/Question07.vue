<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A train moving at a constant speed travels 3 miles every 5 minutes.
    A car moving at a constant speed travels 12 miles every 20 minutes.
    <br><mark>Which vehicle is travelling faster?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "Train", "Car", "Both"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/01/train.png" alt="Train" height="100">
        <img src="~/assets/maths/06/03/01/car.png" alt="Car" height="100">
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
