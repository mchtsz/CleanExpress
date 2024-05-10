<script setup lang="ts"></script>

<template>
  <form action="/register" method="POST">
    <input type="text" name="firstname" placeholder="firstname" />
    <input type="text" name="lastname" placeholder="lastname" />
    <input type="text" name="mail" placeholder="mail" />
    <input type="password" name="password" placeholder="password" />
    <button type="submit">Register</button>
  </form>
</template>

<style scoped lang="scss">
@import url("../styles/form.scss");
</style>
