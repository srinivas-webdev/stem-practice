<script setup>
const qstnDetails = {
  questionType: "Identifying Equivalent Ratios",
  question: {
    "content-type": "html",
    content: `Determine whether the ratios are equivalent.
    <br><mark>2 : 3 and 24 : 36</mark>`,
  },
  isSolutionSingle: true,
  solution: [0],
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
