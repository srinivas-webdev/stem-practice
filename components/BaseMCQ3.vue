<script setup>
import confetti from 'canvas-confetti';
const url = useRequestURL();

const props = defineProps({
  qstnDetails: {
    type: Object,
    default: null
  }
})
const emit = defineEmits(['updateScore']);

const submitted = ref(false);
const right = ref(false);

const questionType = ref(props.qstnDetails.questionType);
const question = props.qstnDetails.question;
const solution = props.qstnDetails.solution;
const userChoices = props.qstnDetails.userChoices;
const isSolutionSingle = ref(props.qstnDetails.isSolutionSingle);
const selectedChoices = ref([]);
const inputType = ref('radio');
const choiceImages = ref([]);
watchEffect( () => {
  if (props.qstnDetails.userChoices['content-type'] === 'image') {
    const results = props.qstnDetails.userChoices.displayedChoices.map(async (img) => {
      const res = (await import(`~/assets/maths/06/01/05/${img}.png`)).default;
      return url.origin + res;
    })
    const data = Promise.all(results);
    data.then(values => choiceImages.value = values);
  }
})

watchEffect(() => {
  if (isSolutionSingle.value) {
    inputType.value = 'radio';
  } else {
    inputType.value = 'checkbox';
  }
})

const isValid = () => {
  const filteredChoices = selectedChoices.value.filter(x => x >= 0);
  console.log('filteredChoices', filteredChoices);
  console.log('solution', solution);
  if (filteredChoices.length === solution.length) {
    for (const choice of filteredChoices) {
      if (!solution.includes(choice)) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

let lastChecked = null;

const onClick = (i) => {
  submitted.value = false;
  if (inputType.value === 'radio') {
    if (lastChecked !== null && lastChecked !== i) {
      selectedChoices.value.splice(lastChecked, 1);
    } 
    
    selectedChoices.value[i] = i;
    lastChecked = i;
  } else {
    if (selectedChoices.value[i] >= 0) {
      selectedChoices.value[i] = undefined;
      console.log('selected choices after slice', selectedChoices.value);
    } else if (selectedChoices.value[i] === undefined) {
      selectedChoices.value[i] = i;
    }
  }
}

const onSubmit = (e) => {
  e.preventDefault();
  submitted.value = true;
  
  if (isValid()) {
    right.value = true;
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: .9 }
    });
    emit('updateScore', 1);
  } else {
    right.value = false;
    emit('updateScore', 0);
  }
}

</script>

<template>
  <form @submit="onSubmit">
    <fieldset>
      <legend>{{ questionType }}</legend>
      <div class="container">
        <p v-if="question['content-type'] == 'html'" class="question"  v-html="question.content" />
        <p v-else class="question" >{{ question.content }}</p>
        <slot name="bgimages" />
        <ul class="choices">
          <li 
            v-for="(choice, i) in userChoices.displayedChoices" 
            :key="'choice'+i" 
            class="choice"
            @click="onClick(i)"
          >
            <input
              :id="'choice'+i"
              :type="inputType"
              :value="i"
              :checked="selectedChoices[i] >= 0"
            >
            <label :for="'choice'+i">
              <KatexRender v-if="userChoices['content-type'] == 'katex'" :math="choice" />
              <template v-if="userChoices['content-type'] == 'normal'">
                {{ choice }}
              </template>
              <img 
                v-if="userChoices['content-type'] == 'image' && choiceImages[i]" 
                :src="choiceImages[i]" 
                :alt="'choice image' + (i+1)" 
                height="100" 
                class="choiceImg"
              >
            </label>
          </li>
        </ul>
      </div>
      
      <div class="results">
        <button type="submit">Submit</button>
        <div ref="confettiRef" />
        <p v-if="submitted && !selectedChoices.length">Please Select An Answer.</p>
        <template v-if="submitted && selectedChoices.length">
          <span v-if="right" class="emoji">✅</span>
          <span v-if="!right" class="emoji">❌</span>
        </template>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

fieldset {
  --angle: 0deg;
  box-shadow: 5px 10px 10px -3px rgba(0,0,0,0.5);
  border: .25rem solid transparent;
  border-radius: 1rem;
  font-size: larger;
  background: 
  conic-gradient(white,white) padding-box,
  conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) border-box;
  
  animation: 30s rotate linear infinite;
  legend {
    border-radius: 1rem;
    font-size: larger;
    background-color: purple;
    color: white;
    padding: .5rem;
    box-shadow: 4px 4px 12px -4px rgba(0,0,0,0.75);
  }

  @media (min-width: 600px) {
    font-size: x-large;
    legend {
      font-size: x-large;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  font-size: 1.25rem;

  .question {
    background-color: lightcyan;
    color: darkslateblue;
    padding: 1rem;
    border: 2px dashed;
    border-radius: 0.5rem 2rem;
    box-shadow: 0rem .5rem 2rem 1px rgba(0,0,0,0.4);
  }

  p {
    font-weight: 600;
  }

  .choices {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
    margin: 0;
    margin-block: 1rem;
    padding: 0;
    
    .choice {
      display: flex;
      align-items: center;
      
      background-color: hsla(117, 84%, 90%, .3);
      border: teal 0.25rem solid;
      border-radius: 0.5rem;
      box-shadow: 5px 5px 5px -1px rgba(0,0,0,0.5);
      cursor: pointer;
      transition: 0.2s all linear;

      &:hover {
        outline: .25rem dashed lightseagreen;
        outline-offset: .1rem;
      }
    }

    .choice:has(input[checked]) {
      background-color: lightyellow;
    }
  }
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  padding: 1rem;
}

.results {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: x-large;
}

@property --buttonSecondColor {
    syntax: '<color>';
    initial-value: hsl(48 100% 55%);
    inherits: false;
  }

button {
  color: white;
  background-image: linear-gradient(
    to right in lch,
    hsl(239 100% 64%) 0%, var(--buttonSecondColor) 100%
  );
  padding: 0.5rem;
  border-radius: .5rem;
  border: 0;
  font-size: larger;
  cursor: pointer;
  box-shadow: 5px 5px 5px -1px rgba(0,0,0,0.5);
  transition: --buttonSecondColor 1s, box-shadow 1s;
  
   &:hover {
    --buttonSecondColor: hsl(325 100% 55%);
    box-shadow: 5px 5px 15px 2px rgba(0,0,0,0.5);
  }
}

span.emoji {
  font-size: x-large;

  @media (min-width: 600px) {
    font-size: xx-large;
  }
}

.images {
  display: flex;
  flex-shrink: 1;
  max-width: 100%;
  padding: 0;
  margin: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }

}


ul {
  width: 100%;
}

input {
  width: 1.5rem;
  height: 1.5rem;
  
  &[type='radio'] {
    appearance: none;
    border-radius: 50%;
    border: .25rem solid black;
    transition: 0.2s all linear;

    &:checked {
      border: .5rem solid deepskyblue;
    }
  }
}

.choiceImg {
  height: 100%;
  width: 100%;
 background-blend-mode: multiply;
}
</style>