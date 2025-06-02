<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `You and your friend play an arcade game.
    You score 5 points for every 9 points that your friend scores.
    You score 320 points less than your friend.
    <mark>How many points does your friend score?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "400", "650", "720", "800"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/01/arcade.png" alt="Train" height="200">
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
