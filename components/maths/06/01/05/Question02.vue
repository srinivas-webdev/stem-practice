<script setup>
const qstnDetails = {
  questionType: "REASONING",
  question: {
    "content-type": "normal",
    content: `A student writes the prime factorizations of
      8 and 12 in a table as shown. She claims she can use the table to
      find the greatest common factor and the least common multiple
      of 8 and 12. Is this possible?`,
  },
  isSolutionSingle: true,
  solution: [0],
  userChoices: {
    "content-type": "normal",
    displayedChoices: [
     "Yes", "No"
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/01/05/lcm-hcf-1.png" alt="lcm and hcf table 1"  height="150">
        <img src="~/assets/maths/06/01/05/lcm-hcf-2.png" alt="lcm and hcf table 2"  height="100">
      </menu>
    </template>
  </BaseMCQ>
</template>

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
