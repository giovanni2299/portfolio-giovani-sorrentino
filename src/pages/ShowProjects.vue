<template>
    <div class="container">
        <div class="text-center p-2">
            <h1>{{store.data.projectsingle.name}}</h1>
        </div>

        <div >
            <h3>Anteprima Progetto:</h3>

            <img class="img-project p-2" :src="store.data.projectsingle.image" alt="">
        </div>

        <div class="mb-3 mt-3">
            <h3 class="text-center">Linguaggi utilizzati</h3>
            <ul class="ms-style d-flex gap-3 mb-2 mt-2 p-3">
               <li v-for="language in store.data.projectsingle.all_languages" class="ms_li_font">{{language}}</li> 
            </ul>
        </div>
        

        <div class="text-center mt-3 mb-3">
            <h3>Descrizione:</h3>

          <p class="ms_font"> {{store.data.projectsingle.description}} </p>
        </div>

    </div>
</template>

<script>
import store from '../../store';
    export default {
        data(){
            return{
                store
            }
        },
        watch: {
        'store.data.projects'(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue.length > 0) {
                    this.store.data.getSingleProject(this.$route.params.id)
                }
            }
        }
    },
        mounted(){
            if (this.store.data.projects.length > 0) {
            this.store.data.getSingleProject(this.$route.params.id)
        }
            
        }
    }
</script>

<style lang="scss" scoped>
.img-project{
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

}
.ms-style{
    list-style: none;
}

.ms_font{
    font-size: 20px;
}


.ms_li_font{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    
}
</style>