<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `The stage manager of a school
      play creates a rectangular stage that has whole number
      dimensions and an area of 42 square yards. String lights will
      outline the stage. What is the least number of yards of string
      lights needed to enclose the stage?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "13", 
      "17", 
      "26",  
      "42", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
