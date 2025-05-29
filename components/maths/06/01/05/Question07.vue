<script setup>
const qstnDetails = {
  questionType: "DIG DEEPER!",
  question: {
    "content-type": "html",
    content: `You purchase disposable plates, cups, and forks for
    a cookout. Plates are sold in packages of 24, cups in packages of 32,
    and forks in packages of 48. <br>
    <mark>What are the least numbers of packages you should buy 
    in order to have the same number of plates, cups, and forks?</mark>`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "9", "24", "32", "48"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
