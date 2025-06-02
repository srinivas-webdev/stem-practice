<script setup>
const qstnDetails = {
  questionType: "Structure",
  question: {
    "content-type": "html",
    content: `The ratio of the side lengths of a triangle is 2 : 3 : 4.
    The shortest side is 15 inches.
    <br><mark>What is the perimeter of the triangle?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "45 in", "47.5 in", "67.5 in", "75 in"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
