<script setup lang="ts">
const toggled = ref(false);
</script>

<template>
  <nav>
    <div class="logo">
      <NuxtLink to="/">
        <img src="/logo.jpeg" alt="logo" />
      </NuxtLink>
    </div>
    <div class="nav-links">
      <Links />
    </div>
    <NavBtn class="buttons"/>
    <div class="toggle" @click="toggled = !toggled">
      <img src="/burgermenu.svg" alt="menu-svg"/>
      <Dropdown v-show="toggled" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  transition: 0.4s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: .5rem 2rem;
  display: flex;
  justify-content: space-between;
  font-family: var(--navfont);
  align-items: center;
  color: white;

  .toggle {
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 2;

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  .logo {
    width: 315px;
    img {
      height: 100px;
    }
  }

  .buttons {
    width: 315px;
  }
}

@media (max-width: 1150px) {
  nav {
    .logo {
      width: 0;
      img {
        width: 100px;
      }
    }
    .buttons {
      display: none;
    }
    .nav-links {
      display: none;
    }
    .toggle {
      display: flex;
    }
  }
}
</style>