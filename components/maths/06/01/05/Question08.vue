<script setup>
const qstnDetails = {
  questionType: "YOU BE THE TEACHER",
  question: {
    "content-type": "html",
    content: `Your friend finds the LCM of 6 and 9. <br>
    <mark>Is your friend correct?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "Yes", "No",
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/05/you-be-teacher.png" alt="you be the teacher"  height="150">
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
