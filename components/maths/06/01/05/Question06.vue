<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `A water park has two large buckets that slowly fill with water. 
    One bucket dumps water every 12 minutes. The other bucket dumps water 
    every 10 minutes. Five minutes ago, both buckets dumped water. <br>
    When will both buckets dump water at the same time again?`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "10", "12", "30", "55", "60"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>

