<script setup>
const qstnDetails = {
    questionType: "MODELING REAL LIFE",
    question: {
        "content-type": "html",
        content: `A bag contains 42 cups of dog food. Your dog eats
     <math display="span">
      <mn>2</mn>
      <mfrac>
        <mn>1</mn>
        <mn>3</mn>
      </mfrac>
    </math>
    cups of dog food each day.
    <br><mark> Is there enough food to last 3 weeks? </mark>`,
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
                <img src="~/assets/maths/06/02/03/dog.png" alt="dog" height="150">
                <img src="~/assets/maths/06/02/03/dog-food.png" alt="dog food" height="100">
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
