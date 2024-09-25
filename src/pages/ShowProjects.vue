<template>
    <div>
        {{}}
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
        watch:{
            
        },
        mounted(){
            this.store.data.getSingleProject()
        }
    }
</script>

<style lang="scss" scoped>

</style>