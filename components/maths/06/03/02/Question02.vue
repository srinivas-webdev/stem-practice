<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `You and your teacher make colored frosting. You add 3 drops of red food
    coloring for every 1 drop of blue food coloring. Your teacher adds 5 drops
    of red for every 3 drops of blue.
    <br><mark>Whose frosting is redder?</mark>`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `Yours`, `Your Teacher's`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/02/cup-cake.png" alt="cup cake" height="150">
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
