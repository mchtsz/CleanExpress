<script setup lang="ts">
const toggled = ref(false);
</script>

<template>
  <nav>
    <div class="logo">
      <NuxtLink to="/">
        <img src="#" alt="logo" />
      </NuxtLink>
    </div>
    <div class="nav-links">
      <Links />
    </div>
    <div class="buttons">
      <a href="/login">
        <button data-loginbtn>LOGIN</button>
      </a>
      <a href="/register">
        <button data-registerbtn>SIGN UP</button>
      </a>
    </div>
    <div class="toggle" @click="toggled = !toggled">
      <!-- <img src="/burger.svg" alt="menu-svg"/> -->
      <Dropdown v-show="toggled" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  transition: 0.4s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
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
      width: 150px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    button {
      transition: 0.4s ease-in-out;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
      padding: 1rem 1.5rem;
      border-radius: 2rem;

      &:hover {
        transform: scale(1.1);
      }
    }
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