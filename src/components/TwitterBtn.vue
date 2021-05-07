<template>
  <div>
    <p>{{ myTweet }}</p>
    <input type="text" v-model="myTweet" />

    <a
      href="https://twitter.com/intent/tweet?button_hashtag=QandA"
      class="twitter-hashtag-button"
      data-size="large"
      v-bind:data-text="tweet"
      data-related="QandAComuunity,ProgrammersComunity"
      data-lang="en"
      data-show-count="false"
      >Tweet #Q&amp;A
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweet: "sami",
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
