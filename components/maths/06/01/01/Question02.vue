<script setup>
const qstnDetails = {
  questionType: "You Be The Teacher",
  question: {
    "content-type": "html",
    content: `Your friend finds the value of 8<sup>3</sup>. <br/> Is your friend correct?`,
  },
  isSolutionSingle: true,
  solution: [1],
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