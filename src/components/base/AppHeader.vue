<template>
  <header class="absolute top-0 z-50 w-full shadow-lg bg-surface">
    <nav class="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
      <div class="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
        <NuxtLink
          :to="localePath('/ask')"
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded btn inline-block py-2 text-xl font-bold"
        >
          New Question
        </NuxtLink>
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
        { href: "/documentation", label: "Documentation" },
        { href: "/explore", label: "Notes" },
        { href: "/questions/1", label: "Browse" },
        { href: "/twitter.html", label: "Expermental API Integration" },
        { href: "/control", label: "Expermental Control Pannel" }



      ]
    };
  }
};
</script>

<style scoped>
ul .nuxt-link-exact-active {
  @apply text-blue-800;
}

ul a:not(.nuxt-link-exact-active):hover {
  @apply opacity-50;
}
</style>
