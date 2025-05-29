<script setup>
const route = useRoute();

const subject = ref(route.params.subject);
const grade = ref(route.params.grade);
const chapter = ref(route.params.chapter);
const section = ref(route.params.section);
const questionPrefix = ref('');

const sub = subject.value;
subject.value = getSubDescFromSubCode(sub); 
const capsTopic = sub.charAt(0).toUpperCase() + sub.slice(1);
const prefixedChapter = chapter.value.length === 1 ? '0' + chapter.value : chapter.value;
const prefixedSection = section.value.length === 1 ? '0' + section.value : section.value;
questionPrefix.value = capsTopic + grade.value + prefixedChapter + prefixedSection + 'Question';

const chaptersAndSectionsData = (await import(`~/data/${sub}/${grade.value}/chapters-sections.json`)).default;
const chapterData = chaptersAndSectionsData[Number(chapter.value)-1];
const sectionData = chapterData.sections[Number(section.value)-1]; 

const store = useScoresStore()
const { scores } = storeToRefs(store);

useHead({
  title: `${subject.value} Grade-${grade.value} Chapter-${chapter.value} Section-${section.value}`,
  meta: [
    { name: 'description', content: `${subject.value} Grade-${grade.value} Chapter-${chapter.value}` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});


const totalQuestions = ref(sectionData.questions);
const question = ref(questionPrefix.value+'01');
const selectedQuestion = ref('01');

const scoreForQuestion = 20;
const totalScore = ref(totalQuestions.value * scoreForQuestion);
const currentScore = ref(0);

const onSelectPage = (page) => {
  if (page < 10) {
    page = '0' + page; 
  }
  selectedQuestion.value = page;
  question.value = questionPrefix.value+page;
}



const updateScore = (right) => {
  let sbj = scores.value[sub];
  if (!sbj) {
    sbj = {};
    scores.value[sub] = sbj;
  }
  
  let chptrs = sbj[grade.value];
  if (!chptrs) {
    chptrs = [];
    sbj[grade.value] = chptrs;
  }

  let sctns =  chptrs[Number(chapter.value) - 1];
  if (!sctns) {
    sctns = [];
    chptrs[Number(chapter.value) - 1] = sctns;
  }
  
  let sctn = sctns[Number(section.value) - 1];
  if (!sctn) {
    sctn = [];
    sctns[Number(section.value) - 1] = sctn;
  }
  let qstn = sctn[[Number(selectedQuestion.value)-1]];
  if (!qstn) {
    qstn = {
      'solved': false 
    }
    sctn[[Number(selectedQuestion.value)-1]] = qstn;
  }
  if (right) {
    if (!qstn['solved']) {
      qstn['solved'] = true;
      currentScore.value += scoreForQuestion;
    }
  } else {
    if (qstn['solved']) {
      currentScore.value -= scoreForQuestion;
    }
    qstn['solved'] = false;
  }
}

watchEffect(() => {
  let sum = 0;
  const sctn = scores.value?.[sub]?.[grade.value]?.[Number(chapter.value)-1]?.[Number(section.value)-1];
  sctn?.forEach(question => {
    sum += question.solved ? 1: 0;
  })
  currentScore.value = sum * scoreForQuestion;
})


</script>

<template>
<main>
  <TopicHeader>
    <template #header>
      {{ subject }}/Grade {{ grade }}/Chapter {{ chapter }} ({{ chapterData.chapter_desc }})
      / Section {{ section }} ({{ sectionData.section_desc }})
    </template>
    <template #nav>
      <a class="home-btn" href="/">🏠</a>
      <a class="back-btn" :href="`/${sub}/${grade}/${chapter}`">🔙</a>
      <template v-if="totalQuestions > 0">
        <section class="score">
          <p>SCORE</p>
          <section class="score-card-container">
            <div class="transition-wrapper">
              <Transition name="slide-up" >
              <span :key="currentScore">{{ currentScore }}</span>
            </Transition>
            </div>
            
            <section>
              / {{ totalScore }}
            </section>
          </section>
        </section>
      </template>
    </template>
  </TopicHeader>
  <SummaryAccordion :data="sectionData" data-type="Section"/>
  <section id="maincontent" class="section-container" >
    <section class="section-left">
      <section class="question-header">
        <h2>Questions</h2>
      </section>
    </section>
    
    <section class="section-right">
      <h3>Test your <span class="red">Concepts</span><span class="aqua"> & Problem Solving Skills.</span></h3>
      <QuestionsPagination :total="totalQuestions" @selected-page="onSelectPage"/>
        
      <template v-if="question">
        <Suspense>
          <component :is="question" @update-score="updateScore"/>
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </template>
    </section>
  </section>
</main>
</template>

<style scoped>
.section-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: hsl(50, 62%, 93%, 0.85);
  border-radius: 0.5rem;
  border-style: solid;
  border-width: .5rem;
  border-color: #FEBA17;
  box-shadow: inset 0px 0px 5px 5px gray;
  padding: 1rem;
  padding-left: 0;
  margin: 1rem;
  
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
    margin-inline: 2rem; 
  }
}

.section-left {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (min-width:600px) {
    flex-direction: column;
  }
  
  .question-header {
    display: flex;
    background-color: purple;
    box-shadow: .5rem .5rem .5rem -3px rgba(0,0,0,0.7);
    padding: 1rem;
    border-radius: 0.75rem;
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    color: white;

    width: 50%;
    @media (min-width:600px) {
      width: 100%;
    }
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
  align-items: center;
  flex-grow: 1;
  padding-left: 1rem;
  margin-block-end: 0.5rem;
  
  h3 {
    font-size: clamp(1rem, 2.5vw, 2rem);
    font-weight: bolder;
    margin-block-start: .25rem;
    margin-block-end: .5rem;
    color: #525B44;

    .red {
      color: tomato;
    }

    .aqua {
      color: purple;
    }
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
    
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
       
    }
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

.score {
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem;
  padding-inline: 0.5rem;
  font-size: medium;
  font-weight: bold;
  box-shadow: 10px 10px 10px -3px rgba(0,0,0,0.5);

  @media (min-width: 600px){
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    padding-inline-start: .5rem;
  }
}

.score-card-container {
  display: flex;
  gap: .25rem;
}

.transition-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 2rem;

  span {
    position: absolute;
    right: 0px;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>