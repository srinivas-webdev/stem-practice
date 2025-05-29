<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `You fill bags with cookies to give to your friends. You bake
      45 chocolate chip cookies, 30 peanut butter cookies, and
      15 oatmeal cookies. You want identical groups of cookies in
      each bag with no cookies left over. What is the greatest number
      of bags you can make?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "15", 
      "20",  
      "30",   
      "45",  
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
