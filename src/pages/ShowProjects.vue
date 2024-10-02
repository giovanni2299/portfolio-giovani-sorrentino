<template>
    <div class="container">
        <div class="text-center p-2">
            <h1>{{store.data.projectsingle.name}}</h1>
        </div>

        <div>
            <h3>Anteprima Progetto:</h3>

            <img class="img-project p-2" :src="store.data.projectsingle.image" alt="">
        </div>

        <div class="mb-2 mt-2">
            <h3 class="text-center">Linguaggi utilizzati</h3>
            <ul class="mb-2 mt-2" v-for="language in store.data.projectsingle.all_languages">
               <li>{{language}}</li> 
            </ul>
        </div>
        

        <div>
           {{store.data.projectsingle.description}} 
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

</style>