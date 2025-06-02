<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `Twelve of the 28 students in a class own a dog.
    <br><mark>What is the ratio of students who own a dog to students who do not?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "1 : 2", "2 : 3", "3 : 4", "4 : 5"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
