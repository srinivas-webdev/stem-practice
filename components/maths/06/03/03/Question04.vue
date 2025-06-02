<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `You jog 2 kilometers in 12 minutes. 
    Your friend jogs 3 kilometers in 16.5 minutes.  
    <br><mark>Who jogs faster?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      'You', 'Your friend',
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
