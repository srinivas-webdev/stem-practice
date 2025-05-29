<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `You use 30 sandwiches and 42 granola bars to make 
      identical picnic baskets. You make the greatest number of picnic baskets 
      with no food left over. How many sandwiches and 
      how many granola bars are in each basket?`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "2 sandwiches, 2 granola bars", 
      "30 sandwiches, 42 granola bars",  
      "15 sandwiches, 21 granola bars",   
      "5 sandwiches, 7 granola bars",  
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/04/picnic-basket.png" alt="picnic basket"  height="200">
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

