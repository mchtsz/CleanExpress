<script setup lang="ts">
import { ref, onMounted } from "vue";

const formData = ref({
  firstname: "",
  lastname: "",
  mail: "",
  phone: "",
  address: "",
  city: "",
});

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/userinfo/", {
      method: "GET",
      credentials: "include", // Ensures cookies are sent with the request
    });
    const data = await response.json();
    console.log("Data:", data);
    if (data) {
      formData.value = {
        firstname: data.personalInfo.firstname,
        lastname: data.personalInfo.lastname,
        mail: data.mail,
        phone: data.personalInfo.phone,
        address: data.personalInfo.address,
        city: data.personalInfo.city,
      };
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

onMounted(fetchData);
</script>

<template>
  <section>
    <h1>Account information</h1>
    <form action="/editContactinfo" method="POST">
      <label for="firstname">First Name</label>
      <input
        id="firstname"
        type="text"
        name="firstname"
        v-model="formData.firstname"
      />

      <label for="lastname">Last Name</label>
      <input
        id="lastname"
        type="text"
        name="lastname"
        v-model="formData.lastname"
      />

      <label for="email">Email</label>
      <input id="email" type="text" name="email" v-model="formData.mail" />

      <label for="phone">Phone</label>
      <input id="phone" type="text" name="phone" v-model="formData.phone" />

      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        name="address"
        v-model="formData.address"
      />

      <label for="city">City</label>
      <input id="city" type="text" name="city" v-model="formData.city" />

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

  h1 {
    font-size: 1.8rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding-top: 2rem;
    gap: 1rem;
    width: 100%;
    height: 100%;
    justify-content: center;

    input {
      font-size: 1.2rem;
      padding: 0.5rem;
      border: none;
      outline: transparent;
      border-bottom: 2px solid #ccc;

      &[type="submit"] {
        transition: 0.2s ease-in-out;
        padding: 1rem;
        grid-column: span 2; // Make the button span both columns
        justify-self: center; // Center the button
        background-color: #000;
        color: #fff;
        border-radius: 1rem;
        border: none;
        margin-top: 1rem;
        width: 100px;
        cursor: pointer;
      }
    }
  }
}
</style>
