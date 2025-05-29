<script setup>
const qstnDetails = {
  questionType: "Problem Solving",
  question: {
    "content-type": "html",
    content: `You make a banner for a football rally. You add a 
    <math display="span">
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
    </math>
    foot border on each side. 
    <br><mark>What is the area of the new banner?</mark>`,
  },
  isSolutionSingle: true,
  solution: [1],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mn>4</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> sq. ft`, 
      `<math display="span">
        <mn>10</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> sq. ft`, 
      `<math display="span">
        <mn>6</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> sq. ft`, 
      `<math display="span">
        <mn>8</mn>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math> sq. ft`, 
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/01/banner.png" alt="banner"  height="100">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 1.5rem;
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
