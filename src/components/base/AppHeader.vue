<template>
  <header class="absolute top-0 z-50 w-full shadow-lg bg-surface">
    <nav class="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
      <div class="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
        <NuxtLink
          :to="localePath('/ask')"
          class="m-2 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-600 rounded-full rounded btn inline-block py-2 text-lg font-bold"
        >
          New Question
        </NuxtLink>

        <!-- <NuxtLink
         :to="localePath('/questions/1')"
         class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-1 border-b-4 border-red-700 hover:border-red-500 rounded btn inline-block py-1 text-lg font-bold"
       >
         Explore
       </NuxtLink> -->
        <button
          class="px-3 py-1 text-xl outline-none md:hidden focus:outline-none"
          type="button"
          @click="isExpanded = !isExpanded"
          @blur="isExpanded = false"
        >
          <span class="block w-6 h-px rounded-sm bg-text"></span>
          <span class="block w-6 h-px mt-1 rounded-sm bg-text"></span>
          <span class="block w-6 h-px mt-1 rounded-sm bg-text"></span>
        </button>
      </div>
      <div class="flex overflow-hidden duration-200 transition-height md:h-auto" :class="isExpanded ? 'h-24' : 'h-0'">
        <ul class="flex flex-col list-none md:flex-row">
          <li v-for="route in routes" :key="route.href" class="py-1 text-left">
            <NuxtLink :to="localePath(route.href)" class="px-3 font-semibold">
              {{ $t(route.label) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      routes: [
        { href: "/", label: "Home" },
        { href: "/questions/1", label: "Browse" },
        { href: "/documentation", label: "Documentation" }

        // { href: "/twitter.html", label: "Test0" },
        // { href: "/control", label: "Test1" }
      ]
    };
  }
};
</script>

<style scoped>
/*noinspection ALL*/
ul .nuxt-link-exact-active {
  @apply text-orange-400;
}

ul a:not(.nuxt-link-exact-active):hover {
  @apply opacity-50;
}
</style>
