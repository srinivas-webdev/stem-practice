<script setup>
const submitted = ref(false);
const right = ref(false);

const questionType = ref('');
questionType.value = 'Repeated Reasoning';

const questions = [
`How many blocks do you need to add to Square 6 to
get Square 7?`,
`How many blocks do you need to add to Square 9 to
get Square 10?`,
`How many blocks do you need to add to Square 19 to
get Square 20?`,
];

const squareSolutions = ['13', '19', '39'];
const submittedSquareChoices = ref([]);

const isValid = () => {
  if (squareSolutions.length === submittedSquareChoices.value.length) {
    for (const choice of submittedSquareChoices.value) {
      if (!squareSolutions.includes(choice.trim())) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

const onChecked = () => {
  submitted.value = false;
}

const onSubmit = (e) => {
  e.preventDefault();
  submitted.value = true;
  
  if (isValid()) {
    right.value = true;
  } else {
    right.value = false;
  }
}

const allEmpty = () => {
  for (const element of submittedSquareChoices.value) {
    if (element.length > 0) return false;
  }
  return true;
}

</script>
<template>
  <form @submit="onSubmit">
  <fieldset>
    <legend>{{ questionType }}</legend>
    <div class="container">
      <menu class="images">
        <img src="~/assets/maths/06/01/01/squares.png" alt="Squares"  height="150">
      </menu>
      <ol class="choices">
        <li v-for="(choice, i) in questions" :key="i" class="choice">
          <label :for="'subQ1'+i">
            {{ choice }}
          </label>
          <input
            :id="'squareQ1'+i"
            v-model="submittedSquareChoices[i]"
            type="text"
            placeholder="Enter here."
            @input="onChecked"
          >
        </li>
      </ol>
    </div>
    
    <div class="results">
      <button type="submit">Submit</button>
      <p v-if="submitted && (!submittedSquareChoices.length || allEmpty())">Please Enter Answers.</p>
      <template v-if="submitted && !allEmpty()">
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
    grid-template-columns: auto;
    gap: 1rem;
    margin: 0;
    margin-block: 1rem;
    padding: 0;
   
    .choice {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: span 4;
      align-items: center;
    }
  }
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  background-color: lemonchiffon;
  box-shadow: 5px 5px 5px -1px rgba(0,0,0,0.3);
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
  padding: .5rem;
  border-radius: .5rem;
  border: 0;
  font-size: large;
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

ol {
  width: 100%;
}

input {
  width: 6rem;
  max-width: 100%;
  outline: dashed deepskyblue .25rem;
  border: none;
  font-size: large;
  font-weight: 500;
}

</style>