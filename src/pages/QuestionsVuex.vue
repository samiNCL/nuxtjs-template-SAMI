<template>
  <div class="pt-24">
     <input style="color:black"
      v-model="my_data" placeholder="What is your question?">
    <button class="btn-primary" @click="addNewQuestion">Save</button>
    <br />
    <p style="color:palevioletred">Last question is:</p>
    {{ question }}
    <br />

    <p style="color:palevioletred">All questions are</p>
    {{ questions }}
    <p>Loop the questions</p>
    <ul>
      <li v-for="q in questions">
        {{ q }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
// Bring values from vuex to pass them above in template
    questions() {
      return this.$store.state.list;
    },
    question() {
      return this.$store.state.question;
    }


  },
  data: function() {
    return {
      my_data: ""
    };
  },
  methods: {
    addNewQuestion: function() {
      this.$store.commit("add", this.my_data);
      console.log("Your question saved: " + this.my_data);
      console.log("Your question saved: " + this.questions);
      this.my_data="";

    }
  }
};


</script>

