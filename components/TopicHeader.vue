<script setup>
const route = useRoute();
const grade = ref(route.params.grade);

const scrollWatcher = ref();
const headerRef = ref();
const h2Ref = ref();
let isStuckBefore = false;

onMounted(() => {
  const headerObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      headerRef.value.classList.add('sticking');
      h2Ref.value.classList.add('sticking');
      h2Ref.value.classList.remove('unsticking');
      isStuckBefore = true;
    } else {
      if (isStuckBefore) {
        headerRef.value.classList.remove('sticking');
        h2Ref.value.classList.remove('sticking');  
        h2Ref.value.classList.add('unsticking');
        isStuckBefore = false;
      }
      
    }
  }, {rootMargin: "50px"});

  headerObserver.observe(scrollWatcher.value);
})
</script>

<template>
<div ref="scrollWatcher" data-scroll-watcher />
<section ref="headerRef" class="subject-header-container">
  <h2 ref="h2Ref">
    <slot name="header" />
  </h2>
  <nav v-if="grade">
    <slot name="nav" />
  </nav>
</section>
</template>

<style>
.subject-header-container {
  z-index: 100;
  position: sticky;
  top: 0;
  background: var(--sub-header-bg-color);
  color: #222222;
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 1rem;
  padding-bottom: .5rem;
  
  
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  a {
    display: grid;
    place-items: center;
    text-decoration: none;
    background-color: white;
    border-radius: .5rem;
    padding: 0.5rem;
    padding-block: 0rem;
    box-shadow: .5rem .5rem .5rem -0.25rem rgba(0,0,0,0.7);
    font-size: 2.2rem;
    
    @media (min-width: 600px) {
      font-size: 2.4rem;
    }
  }
   
  h2{
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin: 0;
  }

  &.sticking {
    align-items: center;
    background: var(--sub-header-bg-color-opacity);
    backdrop-filter: blur(2rem);
  }

  h2.sticking {
    animation: bloom-center 2s ease-in-out;
  }  

  h2.unsticking {
    animation: bloom-start 2s ease-in-out;
  } 
}

@keyframes bloom-center {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

@keyframes bloom-start {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>