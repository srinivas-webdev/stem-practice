<script setup>
const qstnDetails = {
  questionType: "Dig Deeper!",
  question: {
    "content-type": "normal",
    content: `We have a 9 × 9 × 9 cube divided in smaller 1 × 1 × 1 cubes. 
      The small cubes are either black or white, and they never share 
      an edge with another cube of the same color. If the cubes
      on the eight corners of the large cube are all black, 
      how many total black cubes are there?`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: ['360', '363', '364', '365', '368', '369']
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
