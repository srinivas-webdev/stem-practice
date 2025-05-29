<script setup>
const route = useRoute();
const subject = ref(route.params.subject);
const grade = ref(route.params.grade);
const chapter = ref(route.params.chapter);
const sections = ref();

const sub = getSubDescFromSubCode(subject.value); 
const chaptersAndSectionsData = (await import(`~/data/${subject.value}/${grade.value}/chapters-sections.json`)).default;
const chapterData = chaptersAndSectionsData[Number(chapter.value)-1];
sections.value = chapterData.sections;

useHead({
  title: `${sub} Grade-${grade.value} Chapter-${chapter.value}`,
  meta: [
    { name: 'description', content: `${sub} Grade-${grade.value} Chapter-${chapter.value}` }
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

<template>
<main>
  <TopicHeader>
    <template #header>
      {{ sub }} - Grade {{ grade }} - Chapter {{ chapter }} - {{ chapterData.chapter_desc }}
    </template>
    <template #nav>
      <a class="home-btn" href="/">🏠</a>
      <a class="back-btn" :href="`/${subject}`">🔙</a>
    </template>
  </TopicHeader>
  <SummaryAccordion :data="chapterData" data-type="Chapter" />
  <section id="maincontent" class="section-container" >
    <section>
      <section class="section-left">
        <h2>Sections</h2>
      </section>
    </section>
    
    <section class="section-right">
      <h3>Click the sections below you would like to explore</h3>
      <section class="sections">
        <a 
          v-for="(section, index) in sections" 
          :key="section.section_desc" 
          class="section" 
          :href="`/maths/${grade}/${chapter}/${index+1}`"
          :style="{'background': `linear-gradient(${baseColors[5]} , ${darkerColors[5]} )`}"
        >
          {{index+1}}. {{ section.section_desc }}
      </a>
      </section>
      
    </section>
  </section>
</main>
</template>

<style scoped>
.section-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: hsla(0, 0%, 100%, 0.5);
  border-radius: 0.25rem;
  padding: 1rem;
  padding-left: 0;
  margin-inline: 2rem; 
  margin-block: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
  }
}

.section-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: purple;
  box-shadow: .5rem .5rem .5rem -3px rgba(0,0,0,0.7);
  padding: 1rem;
  border-radius: 0.75rem;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  color: white;
  width: 50%;
  @media (min-width: 600px) {
    width: 100%;
  }

  p {
    margin: 0;
    font-weight: bold;
  }

  h2 {
    margin: 0;
  }
}

.section-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    margin-block-start: .25rem;
    margin-block-end: .5rem;
    color: indigo;
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 0.5rem;

    @media (hover) and (prefers-reduced-motion: no-preference) {
    & > .section {
      transition: opacity .3s ease-in;
      cursor: pointer;
    }
    
    .section:hover ~ .section, .section:has(~ .section:hover) {
      opacity: .7;
    }
  }
  }

  .section {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 10px 10px 10px -3px rgba(0,0,0,0.5);
    max-width: 100%;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }


}

.chapter-desc {
  display: flex;
  flex-direction: column;
  gap: .25rem;


  border-style: solid;
  border-width: .5rem;
  border-color: aqua;
  border-radius: .5rem;
  background-color: white;
  
  color: white;
  padding-inline: 2rem;
  margin-inline: 2rem; 
  margin-block: 1rem;
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
  }

  p {
    color: deeppink;
    padding: .5rem;
    border-radius: .5rem;
    font-size: x-large;
    font-weight: bold;
    
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