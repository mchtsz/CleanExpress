<script setup lang="ts"></script>

<template>
  <div class="links">
    <NuxtLink to="/"> home </NuxtLink>
    <NuxtLink to="/shirts"> shirts </NuxtLink>
    <NuxtLink to="/pants"> pants </NuxtLink>
    <NuxtLink to="/hoodies"> hoodies </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  &:has(a.router-link-exact-active) {
    a.router-link-exact-active {
      color: var(--logored);
      font-size: 22px;
      font-weight: 700;
    }
  }

  a {
    transition: 0.4s ease-in-out;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;

    &:hover {
      color: var(--logored);
    }
  }

  .styledlink {
    display: none;
  }
}

@media screen and (max-width: 1150px) {
  .links {
    flex-direction: column;
    gap: 2.5rem;

    .styledlink {
      display: flex;
    }

    a {
      font-size: 16px;
    }

    &:has(a.router-link-exact-active) {
      a.router-link-exact-active {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>