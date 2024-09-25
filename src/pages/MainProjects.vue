<template>
    <div class="container padding">
        <div class="row g-3">
            <div v-for="project in store.data.projects" class="col-4">
                <CardComponents :item="project"/>
                
            </div>
            
        </div>

    </div>
</template>

<script>
import CardComponents from '../components/CardComponents.vue'
import store from '../../store'

    export default {
        components:{
            CardComponents,
        },
        data(){
            return{
                store
            }
        },
        mounted(){
            // this.store.data.getProjects()
        }
    }
</script>

<style lang="scss" scoped>

.padding{
    padding: 20px;
}

</style>