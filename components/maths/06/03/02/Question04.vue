<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A gold alloy contains 15 milligrams
    of gold for every 4 milligrams of copper. A jeweler uses
    48 milligrams of copper to make the alloy.
    <br><mark>How much gold does the jeweler use to make the alloy?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `120 mg`, `144 mg`, `165 mg`, `180 mg`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/02/gold-alloy.png" alt="gold alloy" height="150">
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
