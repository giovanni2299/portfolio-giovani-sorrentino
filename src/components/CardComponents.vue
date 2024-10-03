<template>
    <div class="card ms-card">
        <div class="ms_card_header card-header text-center">
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

@media (min-width: 576px){
    .ms-card:hover{
        width: 165px;
        box-shadow: 2px 5px 5px 0px orange;

    }
}


@media (min-width: 768px){
    .ms-card:hover{
        width: 222px;
        box-shadow: 2px 5px 5px 0px orange;
        
    }
    
}

@media (min-width: 992px){
    .ms-card:hover{
        width: 305px;
        box-shadow: 2px 5px 5px 0px orange;
        
    }
    
}


@media (min-width: 1100px){
    .ms-card:hover{
        width: 305px;
        box-shadow: 2px 5px 5px 0px orange;
        
    }
    
}

@media (min-width: 1200px){
    .ms-card:hover{
        width: 365px;
        box-shadow: 2px 5px 5px 0px orange;
        
    }
    
}


@media (min-width: 1400px){
    .ms-card:hover{
        width: 425px;
        box-shadow: 2px 5px 5px 0px orange;
        
    }
    
}

.img-projects{
    max-width: 100%;
    border-radius: 5px;
    
}

.ms_card_header{
    background-color: rgb(244, 223, 205);
    padding: 20px;
}
</style>