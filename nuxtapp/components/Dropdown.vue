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
    background-color: #000;
    width: 100%;
    height: 300px;
    top: 15%;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    hr {
        width: 100%;
        border: 2px solid var(--logored);
    }
}
</style>