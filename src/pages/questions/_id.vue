<template>
  <!-- here you used v-on:click , v-bind , computed (return) , method that affect computed
 -->

  <div>
    <!--  -->
    <div class="pt-24 font-sans lg:flex items-center justify-center bg-blue-darker w-full py-8">
      <div class="rounded max-w-xl w-full leading-normal border rounded-lg">
        <h3 class="">
          {{ post.question }}
        </h3>
        <!--  -->

        <div class="footer p-1 mx-4 rounded rounded-t-none">
          <p>{{ post.detail }}</p>
        </div>

        <div class="p-4">
          <a
            href="#"
            class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            v-on:click="DisplayFunction"
            >Answer</a
          >

          <!--    Put edit bellow        -->

          <!-- 1 -->

          <a href="#" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onclick="typeWriter2()"
            >Edit</a
          >

          <!-- 2 -->

          <p class="aqx" id="demo2"></p>

          <!-- 3 -->

          <script>
            let i2 = 0;
            let txt2 = "Sorry. This question is not editable.";
            var speed2 = 35;

            function typeWriter2() {
              if (i2 < txt2.length) {
                document.getElementById("demo2").innerHTML += txt2.charAt(i2);
                i2++;
                setTimeout(typeWriter2, speed2);
                // location.reload(true);
              }
            }
          </script>

          <!--    Put edit above        -->
        </div>
      </div>
      <p class="aqx" id="demo max-w-sm"></p>
      Put share here
    </div>

    <!--Here is the problem
Solved. Thanks God
-->

    <ul class="block group" v-bind:style="{ display: changeDisplayQ }">
      <li class="font-bold text-lg aq" v-for="q in OtherQuestions">
        <nuxt-link :to="q.id"> {{ "👉  " + " " + q.question }}</nuxt-link>
      </li>
    </ul>

    <div class="hdn" v-bind:style="{ display: changeDisplay }"><dis /></div>
  </div>

  <!-- End questions -->

  <!--</div> </div>-->
</template>

<script>
// use import and export here to get x value from editor and push it to the array
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
      ],
      display: "none",
      displayQ: "block"
    };
  },
  computed: {
    changeDisplay() {
      return this.display;
    },
    changeDisplayQ() {
      return this.displayQ;
    },
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
    },
    DisplayFunction: function () {
      //Hide questions, display Answer form ( Disqus)
      this.display = "block";
      this.displayQ = "none";
      // console.log(x);
      // above x not works. Need import /export in this case. ( From Editor component).
      //this.rows.push({ note: this.message });
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

.hdn {
  display: none;
}
</style>
