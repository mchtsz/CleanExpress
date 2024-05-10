<script setup lang="ts"></script>

<template>
  <section>
    <h1>Account information</h1>
    <form action="/editContactinfo" method="POST">
      <input type="text" name="firstname" placeholder="firstname" />
      <input type="text" name="lastname" placeholder="lastname" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="phone" placeholder="phone" />
      <input type="text" name="address" placeholder="address" />
      <input type="text" name="city" placeholder="city" />
      <input type="submit" value="Update" />
    </form>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start; // Align items to the start
  height: 500px;
  width: 800px;
  margin: 10vh auto;
  padding: 2rem 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;

  h1 {
    font-size: 1.8rem;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding-top: 2rem;
    gap: 1rem;
    width: 100%;
    height: 100%;
    justify-content: center;

    input {
      transition: 0.2s ease-in-out;
      font-size: 1.2rem;
      padding: 0.5rem;
      border: none;
      outline: transparent;
      border-bottom: 2px solid #ccc;

      &[type="submit"] {
        padding: 1rem;
        grid-column: span 2; // Make the button span both columns
        justify-self: center; // Center the button
        background-color: #000;
        color: #fff;
        border-radius: 1rem;
        border: none;
        margin-top: 1rem;
        width: 100px;
      }

      &:hover {
        transform: translate(1.1);
      }
    }
  }
}
</style>
