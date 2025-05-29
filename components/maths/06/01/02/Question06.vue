<script setup>
const qstnDetails = {
  questionType: "You Be The Teacher",
  question: {
    "content-type": "normal",
    content: `Your friend evaluates the expression. 
    Is your friend correct?`,
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
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/02/you-be-teacher-01.png" alt="you be the teacher 01"  height="200">
      </menu>
    </template> 
  </BaseMCQ>
</template> 

<style scoped>
.figurines {
  display: flex;
  max-width: 100%;
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
