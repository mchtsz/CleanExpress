<script setup lang=ts>

</script>

<template>
    <section>
        <hr>
        <Links />
    </section>
</template>

<style scoped lang=scss>
section {
    position: absolute;
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 350px;
    top: 7%;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-bottom: 2px solid #ccc;
    background-color: #ccc;

    hr {
        width: 100%;
        border: 2px solid #ccc;
    }
}
</style>