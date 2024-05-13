<script setup lang="ts">
const route = useRoute();
const showLinkList = computed(() => route.path.startsWith('/account'));
</script>

<template>
  <NavBar />
  <div class="nuxtpage">
    <LinkList v-if="showLinkList" />
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
.nuxtpage {
  padding: 1rem;
  font-family: var(--footerfont);
  display: flex;
  flex-direction: row;
}
</style>
