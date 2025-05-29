<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `Before a show, there are 8 people in a
      theater. Five groups of 4 people enter, and then three groups of
      2 people leave. Evaluate the expression 8 + 5(4) − 3(2) to find
      how many people are in the theater.`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "22",
      "25",
      "27", 
      "28", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
