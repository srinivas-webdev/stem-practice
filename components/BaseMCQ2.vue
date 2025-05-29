<script setup>
import confetti from 'canvas-confetti';

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

const selectedChoice = ref();

const isValid = () => {
  if (solution !== selectedChoice.value) {
    return false;
  }
  return true;
}

const checked = ref();
const onClick = (choice, i) => {
  submitted.value = false;
  checked.value = i; 
  selectedChoice.value = choice;
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
        <p v-if="question['content-type'] == 'html'" v-html="question.content" />
        <p v-else>{{ question.content }}</p>
        <slot name="bgimages" />
        <ul class="choices">
          <li 
            v-for="(choice, i) in userChoices.displayedChoices" 
            :key="'choice'+i" 
            class="choice"
            @click="onClick(i, i)"
          >
            <input
              :id="'choice'+i"
              type="radio"
              :value="i"
              :checked="checked == i"
            >
            <label :for="'choice'+i">
              <KatexRender v-if="userChoices['content-type'] == 'katex'" :math="choice" />
              <template v-if="userChoices['content-type'] == 'normal'">
                {{ choice }}
              </template>
            </label>
          </li>
        </ul>
      </div>
      
      <div class="results">
        <button type="submit">Submit</button>
        <div ref="confettiRef" />
        <p v-if="submitted && !(selectedChoice >= 0)">Please Select An Answer.</p>
        <template v-if="submitted && selectedChoice >= 0">
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
fieldset {
  box-shadow: 5px 10px 10px -3px rgba(0,0,0,0.5);
  border-radius: 1rem;
  border-style: solid;
  border-color: orangered;
  border-width: .25rem;
  font-size: larger;
  
  legend {
    border-radius: 1rem;
    font-size: larger;
    background-color: purple;
    color: white;
    padding: .5rem;
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

  p {
    margin: 1rem;
    font-weight: 600;
  }
  .choices {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
    margin: 0;
    margin-block: 1rem;
    padding: 0;
    width: 100%;

   
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
      background-color: lightgoldenrodyellow
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

button {
  color: white;
  background-color: royalblue;
  padding: 0.5rem;
  border-radius: .5rem;
  border: 0;
  font-size: larger;
  cursor: pointer;

  &:hover {
    background-color: purple;
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
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
}

ul {
  width: 100%;
}

input {
  appearance: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;

  border: .25rem solid black;
  transition: 0.2s all linear;
 }

input:checked {
  border: .5rem solid deepskyblue;
}

</style>