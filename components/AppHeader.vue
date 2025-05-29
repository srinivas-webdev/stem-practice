<template>
  <header>
    <picture 
      class="app-icon-picture" 
      title="Click to home"
      @click="navigateTo('/')" 
    >
      <img 
        src="~/assets/app-icon.jpg" 
        alt="My Practicing logo" 
        width="100%" 
        height="100%"
      >
    </picture>
    <div class="header-text-container">
      <h1>Math Practicing is Fun</h1>
    </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    gap: .5rem;
    position: sticky;
    background: #080F28;
    width: 100%;
    height: var(--header-height);
  }

  .app-icon-picture {
    margin: .2rem;
    cursor: pointer;
  }

  img {
    border-radius: 50%;
  }

  .header-text-container {
    display: grid;
    place-items: center;
    flex: 1;
  }
  h1 {
    margin: 0px;
    font-size: xx-large;
  }

  .placeholder-el {
    visibility: hidden;
  }

  @property --＠color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: hsl(98 100% 62%);
}

@property --＠color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: hsl(204 100% 59%);
}

@keyframes gradient-change {
  to {
    --＠color-1: hsl(210 100% 59%);
    --＠color-2: hsl(310 100% 59%);
  }
}

h1 {
  /* apply variable changes over time */
  animation: gradient-change 2s linear infinite alternate;
  
  background: linear-gradient(
    /* 
      in oklch produces more vibrant gradient results 
      learn more https://developer.chrome.com/docs/css-ui/access-colors-spaces#color_interpolation
    */
    to right in oklch, 
    /* use the variables in a gradient (or wherever!) */
    var(--＠color-1), 
    var(--＠color-2)
  );
  
  /* modern browser version */
  background-clip: text;
  color: transparent;
  font-size: clamp(1rem, 6vw, 2rem);
}

</style>