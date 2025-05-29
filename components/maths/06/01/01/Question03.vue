<script setup>
const qstnDetails = {
  questionType: "Repeated Reasoning",
  question: {
    "content-type": "normal",
    content: `The smallest figurine in a
      gift shop is 2 inches tall. The height of each figurine is
      twice the height of the previous figurine. What is the
      height of the tallest figurine?`,
  },
  isSolutionSingle: true,
  solution: [2],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [4, 8, 16, 24]
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/01/Figurine.png" alt="Figurine 1"  height="35">
        <img src="~/assets/maths/06/01/01/Figurine.png" alt="Figurine 2"  height="70">
        <img src="~/assets/maths/06/01/01/Figurine.png" alt="Figurine 2"  height="140">
        <img src="~/assets/maths/06/01/01/Figurine.png" alt="Figurine 2"  height="280">
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
