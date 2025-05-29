<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "normal",
    content: `You are filling piñatas for your friend’s birthday
      party. The list shows the gifts you are putting into
      the piñatas. You want identical groups of gifts
      in each piñata with no gifts left over. What is the
      greatest number of piñatas you can make?`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "3", 
      "6", 
      "12",  
      "18", 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/04/pinata-1.png" alt="pinata 1"  height="200">
        <img src="~/assets/maths/06/01/04/pinata-2.png" alt="pinata 2"  height="200">
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

