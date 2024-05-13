<script setup lang="ts">
const Links = [
  { name: "/account/edit", text: "Edit contactinfo" },
  { name: "/account/coupon", text: "Manage coupons" },
  { name: "/account/orders", text: "Order history" },
  { name: "/account/wishlist", text: "Wishlist" },
];

const router = useRouter();

const logout = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  router.push("/login");
};
</script>

<template>
  <div class="links1">
    <h2>My pages</h2>
    <NuxtLink v-for="link in Links" :href="link.name" :key="link.name">{{
      link.text
    }}</NuxtLink>
    <button @click="logout">Logout</button>
  </div>
</template>

<style scoped lang="scss">
.links1 {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 250px;
  height: 100vh;
  justify-content: flex-start;
  border-right: 2px solid #ccc;

  h2 {
    padding-bottom: .5rem;
  }

  a,
  button {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    padding: 1rem;
    text-align: left;
    transition: 0.2s ease-in;
    border: none;

    &:hover {
      transform: scale(1.1);
    }

    &.router-link-exact-active {
      font-weight: 700;
        background-color: #f0f0f0;
        width: 180px;
    }
  }
}
</style>
