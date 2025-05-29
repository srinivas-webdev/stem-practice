<script setup>
const qstnDetails = {
  questionType: "REASONING",
  question: {
    "content-type": "html",
    content: `You are making fruit baskets using 54 apples, 36 oranges,
    and 73 bananas.<br/>
    What is the greatest number of identical fruit baskets you can make 
    with the least amount of fruit left over?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "9", "18", "24", "36"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
 