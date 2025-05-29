<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `A square plot of land has side lengths of 40 meters. 
  An archaeologist divides the land into 64 equal parts. 
  What is the area of each part?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "25 sq.meters",
      "40 sq.meters", 
      "64 sq.meters", 
      "100 sq.meters",  
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
