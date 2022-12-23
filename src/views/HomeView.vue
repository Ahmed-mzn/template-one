<template>
  <div class="home">

  <section class="hero is-medium">
    <div class="hero-head">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item is-active">
                Home
              </a>
              <a href="#products" class="navbar-item">
                Products
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-rss-square"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" width="150" height="40">
        <h2 class="subtitle">
          {{app.description}}
        </h2>
      </div>
    </div>
  </section>
  <section class="blog-posts">
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
            <div class="column is-12 post">
              <article class="columns featured">
                <div class="column is-7 post-img ">
                  <img src="{{app.main_image}}" alt="">
                </div>
                <div class="column is-5 featured-content va">
                  <div>
                    <h3 class="heading post-category">Category Name</h3>
                    <h1 class="title post-title">Blog Posts Template</h1>
                    <p class="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                    <br>
                    <a href="#" class="button is-primary">Read More</a>
                  </div>

                </div>
              </article>
            </div>
          </div>
          <hr>
          <div id="products" class="columns is-multiline">
            <div v-for="product in app.products" :key="product.id" class="column post is-4">
              <article class="columns is-multiline">
                <div class="column is-12 post-img">
                  <img :src="product.image" alt="Featured Image">
                </div>
                <div class="column is-12 featured-content ">
                  <h3 class="heading post-category">Category Name</h3>
                  <h1 class="title post-title">{{product.title}}</h1>
                  <p class="post-excerpt">{{product.description}}.</p>
                  <br>
                  <a href="#" class="button is-primary">Read More</a>
                </div>
              </article>
            </div>
            <div class="column is-12">
              <form action="">
                <div class="field">
                  <label class="label has-text-white">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith">
                  </div>
                </div>
                <div class="field">
                  <label class="label has-text-white">Email</label>
                  <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
      logo: "ah",
      app: {
        description:"",
      },
      app2: {
        id:6,
        "template":{
          "id":1,"name":"template 1","path":"/bin/user/templates/template-1/","description":"just simp","created_at":"21/12/2022 23:09"
          },
        "products":[
          {"id":7,"app":6,"title":"product 1n","image":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","price":100.12,"created_at":"22/12/2022 22:45","updated_at":"23/12/2022 00:40"},{"id":8,"app":6,"title":"product two22","image":"https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg","price":240,"created_at":"22/12/2022 22:45","updated_at":"23/12/2022 00:40"}],
          app_id:"",
          domain:"",
          description:"",
          meta_title:"",
          meta_description:"",
          meta_keywords:"",
          logo:"",
          main_image:"",
      }
    }
  },
  mounted(){
    axios.get("https://landing.socialbot.dev/api/v1/apps/"+process.env.VUE_APP_APP_ID)
    .then(response => {
      console.log(response);
      this.app = response.data
      document.title = this.app.meta_title;
      var link = document.querySelector("link[rel*='icon']");
      link.href = this.app.logo;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    })
  }
}
</script>
