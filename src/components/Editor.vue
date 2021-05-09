<template>
  <div class="">
    <!--    In here you used 2 methods both led to the same functionality. V-model message and @input input function

They both take the input of text area so I can deal with it. V-model much easier.

How to move this with you.
-->
    <form style="margin: 1%" class="p-8" @submit.prevent="handleSubmit">
      <label class="block mb-2 text-sm font-semibold" for="message">
        {{ $t("contact.message") }}
      </label>
      <!-- First V-model, then you can use it in template by {{ message}}
        Or in methods by define it in Data , then method to handle it by (this. )-->
      <textarea
        style="border-style: double"
        v-model="message"
        @input="inputFunction"
        rows="4"
        cols="80"
        id="message"
        class="w-full px-3 py-3 text-lg placeholder-gray-200 rounded shadow bg-surface focus:outline-none focus:shadow-outline"
        placeholder="✍️"
        
      />

      <button v-on:click="handleSubmit" class="p-2 mt-2 btn btn-primary rounded-full" type="submit">
        {{ $t("contact.send") }}
      </button>

      <p class="mt-2 font-semibold text-red-500 opacity-100 error-message">
        {{ $t(errorMessage) }}
      </p>
      <p class="mt-2 font-semibold text-green-500 opacity-100 success-message">
        {{ $t(successMessage) }}
      </p>
    </form>
    <br />

    <!-- vue-good-table
      :columns="columns"
      :rows="rows"

      @on-cell-click="onCellClick"

 :search-options="{
    enabled: true
  }"
      >
    </vue-good-table>
     <hr /> -->

    <h3>My Posts</h3>
    <ul v-for="x in rows" :key="x.note">
      <li class="font-semibold aq">
        <nuxt-link to="#"> {{ x.note }}</nuxt-link>
      </li>
    </ul>
    <hr />
    <p class="font-semibold text-orange-700 text-lg">{{ message }}</p>

    <!-- Contact form -->
    <!--  -->
    <!--  -->
  </div>

  <!-- <button @click="persist">Save</button>
   -->
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      message: "",
      errorMessage: "",
      successMessage: "",
      xy: [],

      columns: [
        {
          label: "Search your posts",
          field: "note"
        }
      ],
      rows: [
        { note: "How can a given string be reversed? I shall ask this soon" },
        { note: "JS is awsome!" },
        { note: "Linux courswork is all about Terminal" }
      ]
    };
  },
  // export default{
  // props:{
  // 		question:{type:String}
  // used to get data from storage to here.(IDB)

  mounted() {
    if (localStorage.note) {
      this.note = localStorage.note;
    }
  },
  methods: {
    inputFunction(e) {
      var x = e.target.value;
      console.log("Hi , I worked. Find me in Editor.vue.This is my value:" + x);
    },

    // onCellClick(params) {
    //Wanna get the question to put it in link. should be there an easier approach
    // this.rows.push({note:this.message});
    //   // you do not need this
    //   console.log(params.row);
    //   console.log(params.column);
    //   console.log(params.rowIndex);
    //   console.log(params.event);
    // },
    handleSubmit() {
      if (!!this.message) {
        this.$ga.event({
          eventCategory: "Contact",
          eventAction: "submit_form",
          eventLabel: "Form submission"
        });
        this.errorMessage = "";
        this.successMessage = "contact.success";
      } else {
        this.errorMessage = "contact.error-empty";
        this.successMessage = "";
      }

      // if there is a message , put it in the array to be diplayed.

      if (this.message) {
        this.rows.push({ note: this.message });
        console.log(" I wrote " + this.message);

        //save to array . new array update the older one
        localStorage.rows = this.rows;
        console.log(localStorage.rows);
        let xyz = localStorage.rows;
        console.log("This" + xyz);
        this.message = " ";
        // location.reload(true); if you could save to json you can run this code.
      }
    }

    // persist() {

    // }
  }
};
</script>

<style scoped>
.aq a:hover {
  color: palevioletred;
}
</style>
