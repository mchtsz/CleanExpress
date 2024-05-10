<script setup lang="ts">
const notLoggedIn = ref(true);
</script>

<template>
  <div class="buttons" v-if="notLoggedIn">
    <a href="/login">
      <button data-loginbtn>LOGIN</button>
    </a>
    <a href="/register">
      <button data-registerbtn>SIGN UP</button>
    </a>
  </div>
  <div class="buttons" v-else>
    <a href="/account">
      <button data-loginbtn>ACCOUNT</button>
    </a>
    <a href="/checkout">
      <button data-registerbtn>CHECKOUT</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
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
</style>
