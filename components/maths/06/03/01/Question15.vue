<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `You separate bulbs of garlic into
    two groups: one for planting and one for cooking. The tape
    diagram represents the ratio of bulbs for planting to bulbs for
    cooking. You use 6 bulbs for cooking. Each bulb has 8 cloves.
    <br><mark>How many cloves of garlic will you plant?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "48", "96", "144", "288"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/01/garlic.png" alt="garlic cloves" height="200">
        <img src="~/assets/maths/06/03/01/garlic-tape-diagram.png" alt="garlic tape diagram" height="100">
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
