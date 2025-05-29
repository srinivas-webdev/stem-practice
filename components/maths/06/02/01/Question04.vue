<script setup>
const qstnDetails = {
  questionType: "Modeling Real Life",
  question: {
    "content-type": "html",
    content: `A city is resurfacing a basketball court. 
    <br><mark>Find the area of the court.</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mn>213</mn>
        <mfrac>
          <mn>1</mn>
          <mn>6</mn>
        </mfrac>
      </math>`, 
      `<math display="span">
        <mn>288</mn>
      </math>`, 
      `<math display="span">
        <mn>300</mn>
      </math>`, 
      `<math display="span">
        <mn>400</mn>
      </math>`, 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/01/basketball-court.png" alt="basketball court"  height="200">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.25rem;
}
</style>

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
