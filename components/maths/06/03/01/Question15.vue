<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `There are 8 more girls than boys
    in a school play. The ratio of boys to girls is 5 : 7.
    <br><mark>How many girls are in the play?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "21", "28", "35", "42"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
