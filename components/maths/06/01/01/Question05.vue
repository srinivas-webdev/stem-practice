<script setup>
import confetti from 'canvas-confetti';

const emit = defineEmits(['updateScore']);
const confettiRef = ref();
const submitted = ref(false);
const right = ref(false);

const questionType = ref('');
const question = ref('');

questionType.value = 'Patterns';
question.value = `Copy and complete the table. Describe what
happens to the value of the power as the exponent decreases.`;

const base = ref('4');
const powerChoices = ref([]);
const powerSolutions = ['256', '64', '16', '4'];


const subQ1 = `Use the above pattern to find the value of `;
const displayedChoices = ['4', '0', '40', '1'];
const selectedChoice = ref();

const solution = 3;

const isValid = () => {
  if (solution !== selectedChoice.value) return false;
  if (powerSolutions.length === powerChoices.value.length) {
    for (const choice of powerChoices.value) {
      if (!powerSolutions.includes(choice.trim())) {
        return false;
      }
    }
  } else {
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
      <p>{{ question }}</p>
      <table>
        <caption>Powers and Values</caption>
        <tbody>
          <tr>
          <th scope="row">Power</th>
          <td>{{ base }}<sup>6</sup></td>
          <td>{{ base }}<sup>5</sup></td>
          <td>{{ base }}<sup>4</sup></td>
          <td>{{ base }}<sup>3</sup></td>
          <td>{{ base }}<sup>2</sup></td>
          <td>{{ base }}<sup>1</sup></td>
        </tr>
        <tr>
          <th scope="row">Value</th>
          <td>4096</td>
          <td>1024</td>
          <td><input id="power1" v-model="powerChoices[0]" @input="onChecked"></td>
          <td><input id="power2" v-model="powerChoices[1]" @input="onChecked"></td>
          <td><input id="power3" v-model="powerChoices[2]" @input="onChecked"></td>
          <td><input id="power4" v-model="powerChoices[3]" @input="onChecked"></td>
        </tr>
        </tbody>
        
      </table>
      <ol type="A">
        <li>
          {{ subQ1 }} {{ base }}<sup>0</sup>.
          <menu class="choices">
            <div 
              v-for="(choice, i) in displayedChoices" 
              :key="'choice'+i" 
              class="choice"
              @click="onClick(i, i)"
            >
              <input
                :id="'subQ1'+i"
                type="radio"
                :value="i"
                :checked="checked == i"
              >
              <label :for="'subQ1'+i">
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
      <p v-if="submitted && !powerChoices.length">Please Enter values in the Table.</p>
      <p v-if="submitted && !selectedChoice">Please select answers for Question.</p>
      <template v-if="submitted && powerChoices.length && selectedChoice">
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

table {
  border-collapse: collapse;
  border: 0.25rem solid rgb(1, 148, 77);
  letter-spacing: 1px;
  
  caption {
    font-size: large;
    font-weight: bold;
    color: red;
  }

  th, td {
    padding: .5rem;
    border: 0.25rem solid rgb(1, 148, 77);
    text-align: center;
  }

  input {
    width: 3rem;
    max-width: 100%;
    outline: dashed deepskyblue .25rem;
    border: none;
    border-radius: 0%;
  
    font-size: large;
    font-weight: 500;
   }
}
</style>