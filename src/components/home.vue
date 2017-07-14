
<template>
  <div id="Anasayfa">
    <nav class="nav has-shadow heroku">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a class="nav-item white is-tab is-hidden-mobile is-active a321d90">Anasayfa</a>
          <a class="nav-item white is-tab is-hidden-mobile">Hakkımızda</a>
          <a href="/web-paketleri" class="nav-item white is-tab is-hidden-mobile">Web Paketleri</a>
          <a class="nav-item white is-tab is-hidden-mobile">İletişim</a>
        </div>
        <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active white">Home</a>
          <a class="nav-item is-tab is-hidden-tablet white">Features</a>
          <a class="nav-item is-tab is-hidden-tablet white">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet white">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px; border: 1px solid #fff; border-radius: 1.5px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            <div>
           {{ user1 }}
            </div>
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
    <hero page="anasayfa" selectable=""></hero>
    <!--<input type="text" class="textarea" placeholder="kullanıcı adınız giriniz" v-model="user1">-->
    <div class="block columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="title">
              “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
            </p>
            <p class="subtitle">
              Jeff Atwood
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
      <span>
        <a href="#">Facebook'ta</a> Paylaş
      </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
    <div class="block column">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Anasayfa',
    data () {
      return {
        user1: ''
      }
    }
  }
</script>
<style src="../assets/css/bulma.css"></style>
<style src="../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<style src="../assets/css/color.css"></style>
