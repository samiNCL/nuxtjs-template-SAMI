<template>
  <div class="inline-flex">
    <AppButtonSelect
      v-for="theme in themes"
      :key="theme.value"
      @click="$colorMode.preference = theme.value"
      class="inline-flex flex-wrap items-center justify-center"
      :class="{ active: $colorMode.preference === theme.value }"
    >
      <FontAwesomeIcon :icon="theme.icon" size="sm" class="mr-1" />
      {{ $t("theme." + theme.value) }}
    </AppButtonSelect>
  </div>
</template>

<script>
import AppButtonSelect from "@/components/base/AppButtonSelect.vue";

export default {
  components: {
    AppButtonSelect
  },
  data() {
    return {
      themes: [

        { value: "light" },
        { value: "dark"  }
       ]
    };
  }
};
</script>
