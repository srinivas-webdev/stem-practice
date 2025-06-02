<script setup>
const qstnDetails = {
  questionType: "Dig  Deeper!",
  question: {
    "content-type": "html",
    content: `You and a friend each have a collection of tokens. Initially,
    for every 8 tokens you had, your friend had 3. After you give half of your tokens
    to your friend, your friend now has 18 more tokens than you.
    <br><mark>Initially, how many more tokens did you have than your friend?</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `90`, `108`, `126`, `144`
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
