<template>
  <div class="block">
    <div class="block">
      <navbar></navbar>
    </div>
    <heros page="Web Paketleri" selectable="Aşağıda seçebilceğiniz web paketlerini görmektesiniz"></heros>
    <div class="columns mag">
    <div class="column is-half">
    <div class="card">
      <div class="card-content">
        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="">
        <p class="title"></p>
      </div>
      <footer class="card-footer">
        <div class="card-header">
          <div class="card-header-title">
            srgtrtffr
          </div>
        </div>
        <div class="card-header-title">
          <div class="card-he">
            rkfokrokff
          </div>
        </div>
        <div class="card-footer-item">
          <span>
           <button class="button"> fddgfgd</button>
          </span>
        </div>
      </footer>
    </div>
    </div>
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="">
            <p class="title"></p>
          </div>
          <footer class="card-footer">
            <div class="card-header">
              <div class="card-header-title">
                srgtrtffr
              </div>
            </div>
            <div class="card-header-title">
              <div class="card-he">
                rkfokrokff
              </div>
            </div>
            <div class="card-footer-item">
          <span>
           <button class="button"> fddgfgd</button>
          </span>
            </div>
          </footer>
        </div>
      </div>
      <card header="zxbyzx" header2="zx" button="hire me" image="https://www.shareicon.net/data/512x512/2016/08/18/813781_man_512x512.png"></card>
      <cards header="zxbyzx" header2="zx" button="hire me" image="https://www.shareicon.net/data/512x512/2016/08/18/813781_man_512x512.png"></cards>
      <hero page="aokeokaoe" selectabe="hdeuhdeuhduede"></hero>


    <div class="column is-half">
      <div class="box">
        <img src="http://www.nmgncp.com/data/out/154/4914003-galaxy-wallpaper-png.png" alt="zx">
        <p class="subtitle">zxbyzx</p>
      </div>
    </div>
  </div>
    <p class="title">zxbyzx</p>
    <zx>dsfsdfsdf</zx>
    <asd></asd>
</div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  export default {
    name: 'webpackge',
    data () {
      return {
        user1: 'zxbyzx'
      }
    }
  }
  Vue.component('cards', {
    props: ['header', 'header2', 'button', 'image'],
    template: `
      <div class="column is-half">
    <div class="card">
      <div class="card-content">
        <img src="image" alt="">
        <p class="title"></p>
      </div>
      <footer class="card-footer">
        <div class="card-header">
          <div class="card-header-title">
            {{ header2 }}
          </div>
        </div>
        <div class="card-header-title">
          <div class="card-he">
            {{ header }}
          </div>
        </div>
        <div class="card-footer-item">
          <span>
           <button class="button">{{ button }}</button>
          </span>
        </div>
      </footer>
    </div>
    </div>
  `
  })
  Vue.component('heros', {
    props: ['page', 'selectable'],
    template: `
    <div class="content">
      <section class="hero heroku">
        <div class="hero-body">
          <div class="container">
            <p class="title white">{{ page }}</p>
            <p class="subtitle grey">{{ selectable }}</p>
          </div>
        </div>
      </section>
  `
  })
  Vue.component('navbar', {
    template: `
      <nav class="nav has-shadow heroku">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a href="/" class="nav-item white is-tab is-hidden-mobile is-active a321d90">Anasayfa</a>
          <a class="nav-item white is-tab is-hidden-mobile">Hakkımızda</a>
          <a href="/web-paketleri" class="nav-item white is-tab is-hidden-mobile">Web Paketleri</a>
          <a href="/iletisim" class="nav-item white is-tab is-hidden-mobile">İletişim</a>
        </div>
        <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active white">Anasayfa</a>
          <a class="nav-item is-tab is-hidden-tablet white">Hakkımızda</a>
          <a class="nav-item is-tab is-hidden-tablet white">Web Paketleri</a>
          <a class="nav-item is-tab is-hidden-tablet white">İletişim</a>
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
    `
  })
</script>
<style src="../assets/css/bulma.css"></style>
<style src="../assets/css/color.css"></style>
<style src="../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
