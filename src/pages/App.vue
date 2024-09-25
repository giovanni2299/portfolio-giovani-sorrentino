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
    <header class="d-flex justify-content-between overflow">
      <HeaderPage/>
    </header>

    <main class="flex-grow-1">
      <RouterView/>
      
    </main>

    <footer class="d-flex align-items-center padding">
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
  background-color: #19AE47;
  border: 5px  solid gold;
}


footer{
  min-height: 90px;
  background-color: #19AE47;
  border-bottom: 5px solid gold;

}

</style>
