<script setup lang="ts"></script>

<template>
  <div class="links">
    <NuxtLink to="/"> home </NuxtLink>
    <NuxtLink to="/clothes"> clothes </NuxtLink>
    <NuxtLink to="/shoes"> shoes </NuxtLink>
    <NuxtLink to="/accessories"> accessories </NuxtLink>
    <NuxtLink to="/designer"> designer </NuxtLink>
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
      text-decoration: underline;
      font-size: 22px;
      font-weight: 700;
    }
  }

  a {
    transition: 0.4s ease-in-out;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
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