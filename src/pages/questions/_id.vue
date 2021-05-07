<template>
  <div class="w-5/6 gap-x-12 pt-24 items-center">
    <!-- All Questions -->
    <div class="aq flex flex-row justify-left items-left overflow-hidden">
      <div class="bg-white-400 w-96 rounded p-5">
        <h1 class="text-lg font-medium"></h1>
        <p class="text-sm"></p>

        <ul class="items-left">
          <li v-for="q in OtherQuestions">
            <nuxt-link :to="q.id"> {{ "👉  " + " " + q.question }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Answer card  -->

    <div class="flex flex-row justify-left">
      <div class="h-1/2 rounded p-5" style="border: solid">
        <h2 class="text-lg font-medium">
          {{ post.question }}
        </h2>
        <p class="text-sm"></p>

        <p>{{ post.detail }}</p>
        <br />

        <!--  -->
        <div class="place-items-stretch gap-x-24 flex px-10 flex-row items-center justify">
          <div>
            <a
              href="#"
              class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onclick="typeWriter()"
              >Answer</a
            >
          </div>
          <div>
            <a
              href="#"
              class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onclick="typeWriter1()"
              >Share</a
            >
          </div>
          <div>
            <a
              href="#"
              class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onclick="typeWriter2()"
              >Edit</a
            >
          </div>
        </div>

        <!--  -->

        <p class="aqx" id="demo"></p>
        <p class="aqx" id="demo1"></p>
        <p class="aqx" id="demo2"></p>

        <script>
          let i = 0;
          let i1 = 0;
          let i2 = 0;

          let txt = "This is just a demo. Do you like it?";

          let txt1 = "Done. Shared to: [Twitter].";

          let txt2 = "Sorry. This question is not editable.";

          var speed = 35;
          var speed1 = 35;
          var speed2 = 35;

          function typeWriter() {
            if (i < txt.length) {
              document.getElementById("demo").innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
              // location.reload(true);
            }
          }

          function typeWriter1() {
            if (i1 < txt1.length) {
              document.getElementById("demo1").innerHTML += txt1.charAt(i1);
              i1++;
              setTimeout(typeWriter1, speed1);
              // location.reload(true);
            }
          }

          function typeWriter2() {
            if (i2 < txt2.length) {
              document.getElementById("demo2").innerHTML += txt2.charAt(i2);
              i2++;
              setTimeout(typeWriter2, speed2);
              // location.reload(true);
            }
          }
        </script>
      </div>
    </div>

    <dis />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.question,
      meta: [
        { name: "twitter:title", content: this.post.question },
        { name: "twitter:description", content: this.post.detail },
        { name: "twitter:image", content: "/favicon.ico" },
        { name: "twitter:card", content: "summary-large-image" }
      ]
    };
  },
  data() {
    return {
      isActive: false,
      id: this.$route.params.id,
      posts: [
        {
          id: "1",
          question: "What is yarn?",
          detail: "It is a good tool!"
        },
        {
          id: "2",
          question: "What is Nuxt?",
          detail: "It is a cool framework!"
        },
        {
          id: "3",
          question: "What is Vite?",
          detail: "It can be a good tool!"
        },
        {
          id: "4",
          question: "What is Bash?",
          detail: "Is it programming language? What the differences between zsh and sh"
        }
      ]
    };
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id);
    },
    OtherQuestions() {
      return this.posts.filter(post => post.id !== this.id);
    }
  },
  methods: {
    myFunction: function () {
      this.isActive = true;
      console.log(this.isActive);
    },
    NotmyFunction: function () {
      this.isActive = false;
      console.log(this.isActive);
    }
  }
};
</script>

<!--


-->
<style scoped>
/* Make it only for the component inside. You can do it . later.  */

.aq {
  margin: 10px;
}

.aq a:hover {
  color: red;
}

.aq a:visited {
  font-weight: bold;
}

/*div:hover{border-color: yellow;}*/

.aqx {
  margin-top: 20px;
  border-left: solid red;

  background-color: black;
  color: white;
}
</style>
