<template>
  <div class="container flex flex-wrap justify-center mt-8 sm:w-3/4 xl:w-2/3">
    <IconItem v-for="icon in icons" :name="icon.name" :key="icon.name" :file="icon.file" />
  </div>
</template>

<script>
import IconItem from "@/components/index/IconItem.vue";

const icons = [
  { name: "Vue.js", file: "vue-icon.svg" },
   { name: "Tailwind CSS", file: "tailwindcss-icon.svg" },
   { name: "PWA", file: "pwa-icon.png" },
   { name: "Q&A", file: "favicon.ico" },
 ];

export default {
  components: {
    IconItem
  },
  data() {
    return {
      icons
    };
  }
};
</script>
