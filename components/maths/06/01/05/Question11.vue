<script setup>
const qstnDetails = {
  questionType: "PROBLEM SOLVING",
  question: {
    "content-type": "html",
    content: `At Central Railway Station, you notice that three subway lines just
    arrived at the same time. <br>
    <mark>How long must you wait until all three lines arrive at
    Central Railway Station at the same time again?</mark>`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "30 min", "45 min", "60 min", "90 min"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/05/subway-train.png" alt="subway-train"  height="150">
        <img src="~/assets/maths/06/01/05/train-time-table.png" alt="train-time-table"  height="150">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(mark) {
  background-color: pink;
}
</style>
<style scoped>
.figurines {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  img {
    object-fit: cover;
    max-width: 100%;
    align-self: end;
    mix-blend-mode: multiply;
  }
}
</style>
