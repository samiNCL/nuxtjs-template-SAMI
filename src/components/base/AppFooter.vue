<template>
  <footer class="py-6 text-sm bg-accent">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-end">
        <div class="flex flex-wrap w-full px-4 lg:w-6/12 lg:text-left">
          <div class="w-full px-4 mt-3 lg:w-5/12"></div>
        </div>
      </div>
      <div class="w-full mx-auto">
        <NuxtLink
          :to="localePath('/documentation')"
          class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          <!--         <NuxtLink :to="localePath('/documentation')" class="  bg-gray-600 hover:bg-gray-600 hover:text-brown-800 font-bold py-2 px-4  hover:border-gray-800 rounded ">-->
          Project Information
        </NuxtLink>
        <br /><br />

        <AppThemeSelect class="" />

        <p class="py-1 text-sm">
          {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import AppThemeSelect from "@/components/base/AppThemeSelect.vue";

export default {
  components: {
    AppThemeSelect
  }
};
</script>
