<script setup lang=ts></script>

<template>
    <form action="/loginPost" method="POST">
        <input type="text" name="mail" placeholder="mail">
        <input type="password" name="password" placeholder="assword">
        <button type="submit">Login</button>
    </form>
</template>

<style scoped lang=scss>
@import url("../styles/form.scss");
</style>