<script setup>
const qstnDetails = {
  questionType: "Dig Deeper!",
  question: {
    "content-type": "html",
    content: `4<sup>125</sup> ÷  2<sup>125</sup> equals ?`,
  },
  isSolutionSingle: true,
  solution: [4],
  userChoices: {
    "content-type": "katex",
    displayedChoices: ['2', '{2^{75}}', '{4^{25}}', '{2^{0}}', '{2^{125}}']
  }  
}
</script>

<template>
  <BaseMCQ :qstn-details="qstnDetails"/>
</template>
