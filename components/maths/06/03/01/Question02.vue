<script setup>
const qstnDetails = {
  questionType: "Identifying Equivalent Ratios",
  question: {
    "content-type": "html",
    content: `Determine whether the ratios are equivalent.
    <br><mark>3 : 10 and 9 : 25</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `Yes`,
      `No`,
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails" />
</template>
