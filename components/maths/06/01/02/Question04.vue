<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `A glass block window is made of two different-sized 
    glass squares. The window has side lengths of 40 inches. 
    The large glass squares have side lengths of 10 inches. 
    Find the total area of the small glass squares.`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "100 sq. inches", 
      "400 sq. inches", 
      "600 sq. inches", 
      "700 sq. inches", 
    ]
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/02/glass-window.png" alt="sky dive zones"  height="200">
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
