<template>
  <div class="">
    <div class="text-justify">
      <h3 class="mt-10">Instructions:</h3>

      <p>
        You can make your question editable. Do so if you want to allow others to improve your question. <br />
        You may send files and attach tags. The app will take care of everything to make your question
        <strong>discoverable</strong> and reading-friendly.
      </p>
    </div>

    <div style="min-width: 100%" class="text-left self-end">
      <form>
        <Editor />
      </form>
    </div>
  </div>
</template>

<script>
//I do not need import and export in Nuxt. All components are globally available.

export default {
  head() {
    return {
      title: "New question"
    };
  }
};
</script>
