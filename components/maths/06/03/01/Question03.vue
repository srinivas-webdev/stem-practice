<script setup>
const qstnDetails = {
  questionType: "DIFFERENT WORDS, SAME QUESTION",
  question: {
    "content-type": "html",
    content: `Which is different? Find “both” answers.`,
  },
  isSolutionSingle: false,
  solution: [1, 2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      `What kind of relationship is 2 peaches to 5 pears?`,
      `What kind of relationship is 2 pears out of every 5 fruit?`,
      `What kind of relationship is 2 pears per 5 peaches?`,
      `What kind of relationship is 2 peaches for every 5 pears?`,
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>

