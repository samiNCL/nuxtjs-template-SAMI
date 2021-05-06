<template>

  <div class="columns pt-24">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">

    <div class="column is-one-third">
      <!--  MODAL -->
      <!--  NICE CODE , SEE METHODS -->
      <!--  ON CLICK ON BUTTON , ADD CLASS TO <DIV> WHICH GIVE US A MODAL-->
          
  <p v-on:click="myFunction" > Click me </p>
      <div class="modal" v-bind:class="{'is-active': isActive,'':'' }">
        <div class="modal-background">

        </div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              Other questions
            </p>

            <!--        Nice code -->
            <button class="delete" aria-label="close" v-on:click="NotmyFunction"></button>
          </header>

 

          <section class="modal-card-body">

            <!--  MENU -->
            <ul class="menu-list">
              <li v-for="q in OtherQuestions">
                <nuxt-link :to="q.id"> {{ q.question }}</nuxt-link>
              </li>
            </ul>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
      <!--      -->
      <aside class="menu">
        <p class="menu-label">
        </p>
        <ul class="menu-list">
          <li v-for="q in OtherQuestions">
            <nuxt-link :to="q.id"> {{ q.question }}</nuxt-link>
          </li>

        </ul>

      </aside>
    </div>

    <div class="column is-one-third">
        <div class="card" >
          <header class="card-header ">
            <p class="card-header-title ">
              {{  post.question  }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">

              <article class="message is-dark">
                <div class="message-body">
                  {{ post.detail }}
                </div>
              </article>

            </div>

          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Answer</a>
            <a href="#" class="card-footer-item">Share</a>
            <a href="#" class="card-footer-item">
              Edit

            </a>


          </footer>
<br/>

        </div>
<br /><br />
      <article class="message is-warning">
        <div class="message-body">
          No answers yet
        </div>
      </article>


      <!--  NAVBAR -->


        <!--  PAGINATION -->
        <!-- Can you group them by days? another rapper for-loop -->


      </div>    <div class="column is-one-third ">
    <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li v-for="q in OtherQuestions">
          <nuxt-link class="pagination-link" :to="q.id"> {{ q.question }}</nuxt-link>
        </li>
      </ul>
    </nav>
 

  </div>

    </div>


 

</template>

 

<script>
export default {
  head() {
    return {
      title: this.post.question,
      meta:[
        {name: 'twitter:title',content:this.post.question},
        {name: 'twitter:description',content:this.post.detail},
        {name: 'twitter:image',content:'/favicon.ico'},
        {name: 'twitter:card',content:'summary-large-image'}



      ]
    }
  },
  data() {
    return {
       isActive:false,
      id: this.$route.params.id,
      posts:
        [
          {
            id: '1',
            question: 'What is yarn?',
            detail: 'It is a good tool!'
          }
          ,
          {
            id: '2',
            question: 'What is Nuxt?',
            detail: 'It is a cool framework!'
          },
          {
            id: '3',
            question: 'What is Vite?',
            detail: 'It can be a good tool!'
          }

        ]
    }

  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id);

    },
    OtherQuestions() {

      return this.posts.filter(post => post.id !== this.id);
    }

  },  methods: {
    myFunction: function() {
      this.isActive = true;
      console.log(this.isActive)

    },
    NotmyFunction:function() {

      this.isActive = false;
      console.log(this.isActive)
    }
  }
}
</script>


<!--


-->
<style scoped>
/* Make it only for the component inside. You can do it . later.  */
.page-enter-active,
.page-leave-active {
  transition: opacity 300ms ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 10;
}


</style>
