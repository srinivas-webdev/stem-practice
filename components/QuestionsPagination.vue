<script setup>
const defaultSize = 5;
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['selectedPage']);

const activePageNumber = ref(props.page);
const enableLeftSlider = ref(false);
const enableRightSlider = ref(true);

const numbers = ref([]);
const selectedPageNumber = ref(props.page);
watchEffect(() => {
  if (activePageNumber.value + defaultSize < props.total) {
    numbers.value.length = defaultSize + 2;
    numbers.value[defaultSize] = 0;
    numbers.value[defaultSize+1] = props.total;
    for (let i = 0; i < defaultSize; i++) {
      numbers.value[i] = activePageNumber.value + i;
    }
  } else {
    numbers.value.length = props.total - activePageNumber.value + 1;
    for (let i = 0; i < numbers.value.length; i++) {
      numbers.value[i] = activePageNumber.value + i;
    }
  }
})

watchEffect(() => {
  if (activePageNumber.value > 5) {
    enableLeftSlider.value = true;
  } else {
    enableLeftSlider.value = false;
  }

  if (numbers.value.length > defaultSize + 1) {
    enableRightSlider.value = true;
  } else {
    enableRightSlider.value = false;
  }
})

const onClckLeftSlider = () => {
  if (enableLeftSlider.value && numbers.value[0] > 5) {
    activePageNumber.value =  numbers.value[0] - defaultSize;
  }
}

const onClckRightSlider = () => {
  if (enableRightSlider.value) {
    activePageNumber.value =  numbers.value[0] + defaultSize;
  }
}

onMounted(() => {
  const firstListItem = document.querySelector('.items > li');
  firstListItem?.classList?.add('selected');

})

const onClckPage = (pageNumber, index) => {
  if (!pageNumber) return;
  
  const list = document.querySelectorAll('.items > li');
  list.forEach(item => {
    item.classList.remove('selected');
  })
  list[index].classList.add('selected');
  selectedPageNumber.value = pageNumber;
  emit('selectedPage', selectedPageNumber.value)
}


</script>

<template>
<nav class="pagination">
  <div 
    class="slider" 
    :class="{ active: enableLeftSlider }" disabled
    @click="onClckLeftSlider"
  >
    {{ '<<' }}
  </div>
  <ul class="items">
    <li 
      v-for="(number, index) in numbers" 
      :key="number" 
      :value="number"
      :class="{ dummy: number === 0 }"
      @click="onClckPage(number, index)"
    >
      {{ number === 0 ? '...': number}}
    </li>
  </ul>
  <div 
    class="slider" 
    :class="{ active: enableRightSlider }"
    @click="onClckRightSlider"
  >
    {{ '>>' }}
  </div>
</nav>
</template>

<style scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  margin: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  .slider {
    border: solid;
    border-radius: .5rem;
    border-width: .25rem;
    color: #0d5f07;
    background-color: #d2fbd0;
    display: grid;
    place-items: center;
    padding: .5rem;
    box-shadow: 10px 10px 10px -3px rgba(0,0,0,0.5);

  }


  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: grid;
      place-items: center;
      border: solid;
      border-radius: .5rem;
      border-width: .25rem;
      border-color: indigo;
      color: white;
      background-color: #b51963;
      padding: .5rem;
      min-width: 2.5rem;
      font-size: medium;
      box-shadow: 5px 10px 10px -3px rgba(0,0,0,0.5);

      @media (min-width: 600px) {
        min-width: 3rem;
      }
    }

    li.dummy {
      background: none;
      color: black;
      border: none;
      box-shadow: none;
      font-size: x-large;
      letter-spacing: .25rem;
    }
    
    li:not(.dummy):hover {
      background-color: lightcyan;
      color: black;
    }

    li.selected {
      background-color: lightcyan;
      color: black;
    }
  }
}

.slider:not(.active), .dummy {
  color: black;
  opacity: 1;
  background-color: orangered;
  cursor: not-allowed;
}

</style>