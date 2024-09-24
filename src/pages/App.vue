<script>
import HeaderPage from '../components/HeaderPage.vue';
import MainPage from '../components/MainPage.vue';
import FooterPage from '../components/FooterPage.vue';

import store from '../../store.js';
import { RouterLink } from 'vue-router';





export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage
  },
  data() {
    return {
      store,
      mostraImmagine: false

    }
  },
  methods: {
    viewdocument() {

      this.mostraImmagine = !this.mostraImmagine;
    }
  },
  mounted() {
    this.store.data.fetchdata()
  },
}
</script>

<template>
  <section class="d-flex flex-column min-vh-100">
    <header class="d-flex justify-content-between overflow">
      <HeaderPage/>
    </header>

    <main class="flex-grow-1 pb-3">
      <RouterView/>
      
    </main>

    <footer class="d-flex">
      <FooterPage/>
    </footer>
  </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';



header{
  min-height: 90px;
  
}


</style>
