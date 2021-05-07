<template>
  <div class="small-container text-left pt-24">
    <h1>Control your questions with your communities</h1>
    <h1>Build Q&A network community that integrate anywhere!</h1>
    <h1>How big your community can be ? Try and see people like you coming!</h1>
    <h1>Add tags to increase descoverability in your connected communities</h1>
    <h1>Choose your connected services (later)</h1>

    <TwitterFrame />
    <TwitterBtn />

    <dis />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "QandA",
      meta: [
        { name: "twitter:title", content: "Come to discuss" },
        { name: "twitter:description", content: "Programming issues" },
        { name: "twitter:image", content: "/favicon.ico" },
        { name: "twitter:card", content: "summary-large-image" }
      ]
    };
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
