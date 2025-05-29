<script setup>
const totalQuestions = ref(16);
const question = ref('Maths0601Question'+'01');

const onSelectPage = (page) => {
  question.value = 'Maths0601Question'+0+page;
}
</script>

<template>
  <QuestionsPagination :total="totalQuestions" @selected-page="onSelectPage"/>
        
  <component :is="question" />

</template>