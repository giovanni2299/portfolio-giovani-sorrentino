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
    this.store.data.getProjects()
  },
}
</script>

<template>
  <section class="d-flex flex-column min-vh-100">
    <header class="d-flex  justify-content-md-between overflow align-items-center">
      <HeaderPage/>
    </header>

    <main class="flex-grow-1 main">
      <RouterView/>
      
    </main>

    <footer class="d-flex flex-wrap justify-content-center align-items-center padding">
      <FooterPage/>
    </footer>
  </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';


.padding{
    padding: 20px 0;
}

header{
  min-height: 90px;
  background-color: #1E2A38;
  border-top: 5px  solid orange;
  border-bottom: 5px  solid orange;
  color: white;
}


footer{
  min-height: 90px;
  background-color: #1E2A38;
  border-bottom: 5px solid orange;
  border-top: 5px solid orange;
  color: white;



}

</style>
