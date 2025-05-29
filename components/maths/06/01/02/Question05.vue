<script setup>
const qstnDetails = {
  questionType: "DIG DEEPER!",
  question: {
    "content-type": "normal",
    content: `A square vegetable garden
      has side lengths of 12 feet. You plant flowers
      in the center portion as shown. You divide
      the remaining space into 4 equal sections
      and plant tomatoes, onions, zucchini,
      and peppers. What is the area of the
      onion section?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "16 sq. ft", 
      "32 sq. ft", 
      "54 sq. ft", 
      "128 sq. ft", 
    ]
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/02/veg-garden.png" alt="veg garden"  height="250">
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
