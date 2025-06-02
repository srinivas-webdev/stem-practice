<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `You have $150 in a savings account and you have some
    cash. The tape diagram represents the ratio of the amounts of money. You want
    to have twice the amount of money in your savings account as you have in cash.
    <br><mark>How much of your cash should you deposit into your savings account?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "150", "200", "250", "300"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/03/01/account-tape-diagram.png" alt="account tape diagram" height="100">
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
