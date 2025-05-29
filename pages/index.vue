<script setup>
const gradesWithChapters = ref();
const subject = ref('Maths');

gradesWithChapters.value = (await import(`~/data/maths/maths-grade-chapters.json`)).default;

useHead({
  title: `${subject.value} is Fun`,
  meta: [
    { name: 'description', content: 'Solving Math Problems is Fun.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});

const baseColors = [
  'DarkSlateBlue', 'tomato', 'SeaGreen',
  'OrangeRed', 'MediumVioletRed', 'DarkSlateBlue',
  'green', 'crimson', 'DarkSlateGray', 'MediumVioletRed'
]

const darkerColors = [
  'indigo', 'red', 'DarkGreen',
  'OrangeRed', 'MediumVioletRed', 'DarkSlateBlue',
  'green', 'crimson', 'DarkSlateGray', 'MediumVioletRed'
]

</script>

<template v-if="gradesWithChapters">
<main>
  <TopicHeader>
    <template #header>
      {{ subject }}
    </template>
  </TopicHeader>  

  <section v-for="(grade, chapterIndex) in gradesWithChapters" :key="grade.id" class="grade-container">
    <section>
      <section class="grade-left">
        <p>Grade</p>
        <h2>{{ grade.id }}</h2>
      </section>
    </section>
    
    <section class="grade-right animation">
      <h3>{{ grade.desc }}</h3>
      <section class="chapters">
        <a 
          v-for="(chapter, index) in grade.chapters" 
          :key="chapter" 
          class="chapter" 
          :href="`/maths/${grade.id}/${index+1}`"
          :style="{'background': `linear-gradient(${baseColors[chapterIndex]} , ${darkerColors[chapterIndex]} )`}"
        >
         {{index+1}}. {{ chapter }}
      </a>
      </section>
      
    </section>
  </section>
</main>
</template>

<style scoped>
.grade-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: none;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-inline: 2rem; 
  margin-block: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

}

.grade-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(144, 0, 255);
  box-shadow: .5rem .5rem .5rem -3px rgba(0,0,0,0.7);
  padding: 1rem;
  border-radius: 1rem;
  color: white;

  p {
    margin: 0;
    font-weight: bold;
  }

  h2 {
    margin: 0;
  }
}

.grade-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    margin-block-start: .25rem;
    margin-block-end: .5rem;
    color: var(--topic-desc-color);
  }

  .chapters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 0.5rem;

    @media (hover) and (prefers-reduced-motion: no-preference) {
      & > .chapter {
        transition: opacity .3s ease-in;
        cursor: pointer;
      }
      
      .chapter:hover ~ .chapter, .chapter:has(~ .chapter:hover) {
        opacity: .6;
      }
  }
  .chapter {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 10px 10px 10px -3px rgba(0,0,0,0.5);
    max-width: 100%;
    
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
}
}
</style>