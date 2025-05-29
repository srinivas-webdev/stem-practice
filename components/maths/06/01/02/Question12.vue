<script setup>
const qstnDetails = {
  questionType: "Repeated Reasoning",
  question: {
    "content-type": "normal",
    content: `A Petri dish contains
      35 cells. Every day, each cell in the Petri dish divides
      into 2 cells in a process called mitosis. How many cells
      are there after 14 days? Justify your answer.`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "katex",
    displayedChoices: [
      "{35 \\times 14}", 
      "{35 \\times 2 \\times 14}",
      "{35^{14}}",
      "{35 \\times {2}^{14}}",
    ]
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/02/cell-mitosis.png" alt="Cell Mitosis"  height="200">
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
