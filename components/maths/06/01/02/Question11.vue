<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "normal",
    content: `You buy 6 notebooks, 10 folders,
      1 pack of pencils, and 1 lunch box for school. After using
      a $10 gift card, how much do you owe?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
      "10 dollars", 
      "20 dollars",
      "23 dollars",
      "33 dollars",
    ]
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/02/stationery-items.png" alt="stationery items"  height="200">
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
