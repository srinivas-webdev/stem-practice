<script setup>
const qstnDetails = {
  questionType: "IDENTIFYING EQUIVALENT RATIOS",
  question: {
    "content-type": "html",
    content: `Determine whether the ratios are equivalent.
    <br><mark>2 : 3 and 24 : 36</mark>`,
  },
  isSolutionSingle: true,
  solution: [3],
  userChoices: {
    "content-type": "html",
    displayedChoices: [
      `<math display="span">
        <mfrac>
          <mn>3</mn>
          <mn>4</mn>
        </mfrac>
      </math>`,
      `<math display="span">
        <mfrac>
          <mn>2</mn>
          <mn>3</mn>
        </mfrac>
      </math>`,
      `<math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
      </math>`,
      `<math display="span">
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
      </math>`,
    ],
  }
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails">
    <template #bgimages>
      <menu class="figurines">
        <img src="~/assets/maths/06/02/01/flour-sack.png" alt="flour sack" height="200">
      </menu>
    </template>
  </BaseMCQ>
</template>

<style scoped>
:deep(math) {
  font-weight: 600;
  font-size: 2rem;
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
