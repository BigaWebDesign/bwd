<template>
  <div>
    <modal v-if="showModal" @close="showModal = false"></modal>
    <navbar></navbar>
    <heros page="İletişim" style="margin-top: 10px"></heros>
    <div class="column mag">
        <cardg header="zxbyzx" header2="zx" buttons="hire me hjıhjıhı" image="https://www.shareicon.net/data/512x512/2016/08/18/813781_man_512x512.png"></cardg>
        <cardg header="jwıjd" header2="kedowekd" buttons="wjcıwejdıwejdwed" image="http://ojcrjrf.com"></cardg>
        <cardg header="meedıewjır" header2="jechuhfrf" buttons="refjıdjıjıdfj" image="http://google.com"></cardg>
        <cardg header="meedıewjır" header2="jechuhfrf" buttons="refjıdjıjıdfj" image="http://google.com"></cardg>
        <cardg header="meedıewjır" header2="jechuhfrf" buttons="refjıdjıjıdfj" image="http://google.com"></cardg>
        <cardg header="meedıewjır" header2="jechuhfrf" buttons="refjıdjıjıdfj" image="http://google.com"></cardg>
        <cardg header="meedıewjır" header2="jechuhfrf" buttons="refjıdjıjıdfj" image="http://google.com"></cardg>
     </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'contact',
    data: {
      showModal: false
    }
  }
  Vue.component('cardg', {
    props: ['header', 'header2', 'buttons', 'image'],
    template: `
   <div class="column">
    <div class="card">
      <div class="card-content">
        <img src="{{image}}" alt="">
        <p class="title"></p>
      </div>
      <footer class="card-footer">
        <div class="card-header">
          <div class="card-header-title">
            {{ header2 }}
          </div>
        </div>
        <div class="card-header-title">
          <div class="card-header">
            {{ header }}
          </div>
        </div>
        <div class="card-footer-item">
          <span>
           <button class="button">{{ buttons }}</button>
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
      <section class="hero a321d90">
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
  Vue.component('modal', {
    template: `
      <div class="modal is-active">
       <div class="modal-background"></div>
        <div class="modal-content">
        </div>
       <button class="modal-close @click="$emit('close')"></button>
      </div>
    `
  })
</script>
<style src="../assets/css/bulma.css"></style>
<style src="../assets/css/color.css"></style>
<style src="../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
