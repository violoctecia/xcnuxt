<template>
  <MainHeader />
    <transition name="fade" mode="out-in">
      <div>
        <NuxtPage />
      </div>
    </transition>
  <MainFooter />
</template>

<script setup>
import MainFooter from "~/components/globalComponents/MainFooter.vue";
import MainHeader from "~/components/globalComponents/MainHeader.vue";
</script>