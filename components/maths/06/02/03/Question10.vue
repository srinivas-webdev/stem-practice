<script setup>
const qstnDetails = {
    questionType: "LOGIC",
    question: {
        "content-type": "html",
        content: `Your friend uses the model shown to state that
     <math display="span">
      <mn>5</mn>
      <mfrac>
        <mn>1</mn>
        <mn>4</mn>
      </mfrac>
      <mo>&divide;</mo>
      <mn>1</mn>
      <mfrac>
        <mn>1</mn>
        <mn>6</mn>
      </mfrac>
      <mo>&equals;</mo>
      <mn>2</mn>
      <mfrac>
        <mn>1</mn>
        <mn>6</mn>
      </mfrac>
    </math>.
    <br><mark>Is your friend correct?</mark>`,
    },
    isSolutionSingle: true,
    solution: [1],
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
                <img src="~/assets/maths/06/02/03/mixed-number-3.png" alt="mixed number model" height="150">
            </menu>
        </template>
    </BaseMCQ>
</template>

<style scoped>
:deep(math) {
    font-weight: 600;
    font-size: 1.5rem;
    math-style: compact;
}
</style>
<style scoped>
.figurines {
    display: flex;
    max-width: 100%;
    padding: 0;
    margin: 0;

    img {
        object-fit: scale-down;
        max-width: 100%;
        align-self: end;
        mix-blend-mode: multiply;
    }
}
</style>
