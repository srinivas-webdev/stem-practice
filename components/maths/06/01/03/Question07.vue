<script setup>
const qstnDetails = {
  questionType: "LOGIC",
  question: {
    "content-type": "normal",
    content: `One table(Table A) at a bake sale has 75 cookies. Another
      table(Table B) has 60 cupcakes. Which table allows for more rectangular
      arrangements?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "Table A", 
      "Table B", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
