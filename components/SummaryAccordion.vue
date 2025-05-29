<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: null
  },
  dataType: {
    type: String,
    default: "Section"
  }
})


const descHeaderRef = ref();
const descContentRef = ref();

function onClick() {
  if (descContentRef.value.getAttribute("aria-hidden") === "true") {
    descContentRef.value.setAttribute("aria-hidden", false);
    descHeaderRef.value.setAttribute("aria-expanded", true);
  } else {
    descContentRef.value.setAttribute("aria-hidden", true);
    descHeaderRef.value.setAttribute("aria-expanded", false);
  }
}
</script>

<template>
<section class="desc-wrapper">
  <section 
    ref="descHeaderRef"
    class="desc-header" 
    aria-expanded="false"
    @click="onClick" 
  >
    <p class="header-title">{{ props.dataType }} Summary</p>
    <svg class='icon' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#66fcf1" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>
  </section>
  <section ref="descContentRef" class="desc-content" aria-hidden="true">
    <section class="chapter-desc">
    <section v-if="props.data?.learning_target?.length > 0" class="learning-target">
      <h2>{{ props.dataType }} Learning Target</h2>
      <p>{{ props.data.learning_target}}</p>
    </section>
    <section v-if="props.data?.success_criteria?.length > 0" class="learning-target">
      <h2>{{ props.dataType }} Success Criteria</h2>
      <ul>
        <li 
          v-for="successCriteria in props.data.success_criteria" 
          :key="successCriteria"
        >
          {{  successCriteria }}
        </li>
      </ul>
    </section> 
    <section v-if="props.data?.vocabulary?.length > 0" class="learning-target vocabulary">
      <h2>{{ props.dataType }} Vocabulary</h2>
      <ul>
        <li 
          v-for="vocabulary in props.data.vocabulary" 
          :key="vocabulary"
        >
          {{  vocabulary }}
        </li>
      </ul>
    </section> 
  </section>
  </section>
</section>
</template>

<style scoped>
.desc-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms ease-in-out;
}

.desc-content[aria-hidden=false] {
  grid-template-rows: 1fr;
}

.desc-content > section {
  overflow: hidden;
}

.desc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color:#1f2633;
  color: #66fcf1;
  border-radius: .5rem;
  border-color: indigo;
  border-style: solid;
  padding-inline: 1rem;

  transition: background-color .5s ease-in-out;
  box-shadow: .5rem .5rem 1rem -5px rgba(0,0,0,0.7);
}

.desc-header:hover {
  background-color: rgb(70, 1, 70);
  cursor: pointer;
}

.desc-header > p {
  font-weight: bold;
  font-size: large;
}

.desc-header > svg {
  transform: rotate(-90deg);
  transition: transform 500ms ease-in-out;  
}

.desc-header[aria-expanded=true] > svg {
  transform: rotate(0deg);
}



.desc-wrapper {
  border-color: transparent;
  border-style: solid;
  border-radius: .5rem;
  background-color: white;
  margin: 1rem;
  padding: 1rem;

  @media (min-width: 600px) {
    margin-inline: 2rem; 
  
  }
}

.chapter-desc {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  
  color: white;
  
  @media (min-width: 600px) {
    padding-inline: 2rem;
    margin-inline: 2rem; 
  }
}

.learning-target {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  border-style: solid;
  border-radius: .5rem;
  margin: .5rem;
  box-shadow: 5px 5px 5px -3px rgba(0,0,0,0.3);
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
  h2 {
    display: grid;
    place-items: center;
    background-color: brown;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 10px 10px 10px -3px rgba(0,0,0,0.5);
    font-weight: semibold;
    font-size: clamp(1rem, 2vw, 2rem);
    margin-block: .25rem;
  }

  p {
    color: deeppink;
    padding: .5rem;
    border-radius: .5rem;
    font-size: x-large;
    font-weight: bold;
    margin: .5rem;
  }

ul {
  list-style: sweets;
  text-shadow: rgb(0, 0, 0) 0 0 1px;
  li {
    color: indigo;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: normal;
 }
}
}
</style>