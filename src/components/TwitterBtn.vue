<template>
  <div>
<<<<<<< HEAD

    <input type="text" v-model="tweet" />
    <p>{{ tweet }}</p>
    <p>{{ post }}</p>
=======
    <p>{{ myTweet }}</p>
    <input type="text" v-model="myTweet" />
>>>>>>> MyProject2021

    <a
      href="https://twitter.com/intent/tweet?button_hashtag=QandA"
      class="twitter-hashtag-button"
      data-size="large"
<<<<<<< HEAD
      :data-text="post"
      data-related="QandAComuunity,ProgrammersComunity"
      data-lang="en"
      data-show-count="false"
      >Tweet Q&amp;A
=======
      v-bind:data-text="tweet"
      data-related="QandAComuunity,ProgrammersComunity"
      data-lang="en"
      data-show-count="false"
      >Tweet #Q&amp;A
>>>>>>> MyProject2021
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      tweet: "",
=======
      tweet: "sami",
>>>>>>> MyProject2021
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
