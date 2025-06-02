<script setup>
const qstnDetails = {
  questionType: "Dig Deeper",
  question: {
    "content-type": "html",
    content: `A fish tank contains tetras, guppies,
    and minnows. The ratio of tetras to guppies is 4 : 2.
    The ratio of minnows to guppies is 1 : 3. There are 60 fish in the tank.
    <br><mark>How many more tetras are there than minnows?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "12", "18", "24", "30"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/01/fish-tank.png" alt="fish tank" height="200">
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
    object-fit: scale-down;
    max-width: 100%;
    align-self: center;
    mix-blend-mode: multiply;
  }
}
</style>
