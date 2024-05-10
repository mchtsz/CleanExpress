<script setup lang=ts>
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/users");
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>

<template>
<h1>Welcome to admin page</h1>
</template>

<style scoped lang=scss>

</style>