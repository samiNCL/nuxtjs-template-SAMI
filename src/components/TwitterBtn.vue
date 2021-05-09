<template>
  <div>

    <input type="text" v-model="tweet" />
    <p>{{ tweet }}</p>
    <p>{{ post }}</p>

    <a
      href="https://twitter.com/intent/tweet?button_hashtag=QandA"
      class="twitter-hashtag-button"
      data-size="large"
      :data-text="post"
      data-related="QandAComuunity,ProgrammersComunity"
      data-lang="en"
      data-show-count="false"
      >Tweet Q&amp;A
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweet: "",
      link: ""
    };
  },
  computed: {
    post() {
      return this.tweet;
    }
  },
  methods: {
    myFunction: function () {}
  }
};
</script>

<style scoped></style>
