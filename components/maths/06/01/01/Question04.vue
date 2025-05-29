<script setup>
import confetti from 'canvas-confetti';

const emit = defineEmits(['updateScore']);
const submitted = ref(false);
const right = ref(false);

const questionType = ref('');
const question = ref('');

questionType.value = ' Dig Deeper! ';
question.value = `A landscaper has 125 tiles to build a square patio.
The patio must have an area of at least 80 square feet.`;

const subQ1 = `What are the possible arrangements for the patio?`;
const subQ1Choices = ref([]);
subQ1Choices.value = ['81', '100', '121', '125'];
const subQ1Solution = ['81', '100', '121'];
const checkedQ1Choices = ref([]);

const subQ2 = `How many tiles are not used in each arrangement?`;
const subQ2Choices = ref([]);
subQ2Choices.value = ['44', '25', '4', '0'];
const subQ2Solution = ['44', '25', '4'];
const checkedQ2Choices = ref([]);

const isValid = () => {
  if (checkedQ1Choices.value.length === subQ1Solution.length) {
    for (const choice of checkedQ1Choices.value) {
      if (!subQ1Solution.includes(choice)) {
        return false;
      }
    }
  } else {
    return false;
  }

  if (checkedQ2Choices.value.length === subQ2Solution.length) {
    for (const choice of checkedQ2Choices.value) {
      if (!subQ2Solution.includes(choice)) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

const onClick = (question, i, choice) => {
  submitted.value = false;
  if (question === 1) {
    if (checkedQ1Choices.value[i]) {
      checkedQ1Choices.value.splice(i, 1);
    } else {
      checkedQ1Choices.value[i] = choice;
    }
  } else {
    if (checkedQ2Choices.value[i]) {
      checkedQ2Choices.value.splice(i, 1);
    } else {
      checkedQ2Choices.value[i] = choice;
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
      <p>{{ question }}</p>
      <menu class="images">
        <img src="~/assets/maths/06/01/01/Tile.png" alt="Figurine 1"  height="150">
      </menu>
      <ol type="A">
        <li>
          {{ subQ1 }}
          <menu class="choices">
            <div 
              v-for="(choice, i) in subQ1Choices" 
              :key="i" 
              class="choice"
              @click="onClick(1, i, choice)"
            >
              <input
                :id="'subQ1'+i"
                type="checkbox"
                :value="choice"
                :checked="checkedQ1Choices[i]"
              >
              <label :for="'subQ1'+i">
                {{ choice }}
              </label>
            </div>
          </menu>
        </li>
        <li>
          {{ subQ2 }}
          <menu class="choices">
            <div 
              v-for="(choice, i) in subQ2Choices" 
              :key="i" 
              class="choice"
              @click="onClick(2, i, choice)"
            >
              <input
                :id="'subQ2'+i"
                type="checkbox"
                :value="choice"
                :checked="checkedQ2Choices[i]"
              >
              <label :for="'subQ2'+i">
                {{ choice }}
              </label>
            </div>
          </menu>
        </li>
      </ol>
    </div>
    
    <div class="results">
      <button type="submit">Submit</button>
      <div ref="confettiRef" />
      <p v-if="submitted && !checkedQ1Choices.length">Please select answers for Question A.</p>
      <p v-if="submitted && !checkedQ2Choices.length">Please select answers for Question B.</p>
      <template v-if="submitted && checkedQ1Choices.length && checkedQ2Choices.length">
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
    max-width: 100%;

   
    .choice {
      display: flex;
      align-items: center;
      gap: 0.5rem;

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

      .choice:has(input[checked]) {
        background-color: lightgoldenrodyellow
      }
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

input {
  accent-color: violet;
  width: 1.5rem;
  height: 1.5rem;
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
  max-width: 100%;
  padding: 0;
  margin: 0;
}

img {
  object-fit: cover;
  max-width: 100%;
  align-self: end;
  mix-blend-mode: multiply;
}

ol {
  width: 100%;
}
</style>