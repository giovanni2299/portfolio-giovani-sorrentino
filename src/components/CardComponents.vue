<template>
    <div class="card ms-card">
        <div class="card-header text-center">
            <img class="img-projects" :src="item.image" alt="">
        </div>
        <div class="card-body text-center">
            <h4>{{item.name}}</h4>
            
            <RouterLink :to="{name: 'project', params: {id:item.id} }">
                Visualizza Progetto
            </RouterLink>


        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        data(){
            return{

            }
        },
        props:{
            item:{
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
.ms-card{
    height: 100%;
}

.img-projects{
    max-width: 100%;
    max-height: 100px;
}
</style>