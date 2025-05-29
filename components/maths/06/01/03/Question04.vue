<script setup>
const qstnDetails = {
  questionType: "DIG DEEPER!",
  question: {
    "content-type": "html",
    content: `The prime factorization of a number is 
    2<sup>4</sup> × 3<sup>4</sup> × 5<sup>4</sup> × 7<sup>2</sup>. 
    Is the number a perfect square?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "Yes", 
      "No", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
