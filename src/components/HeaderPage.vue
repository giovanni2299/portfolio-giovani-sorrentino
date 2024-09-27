<template>
    
        <div class="ms_col col-3 text-center">
            <RouterLink class="color" :to="{name:'home'}" >
                <img class="logo" src="/img/logo-principale.png" alt="">
            </RouterLink>
        </div>
        <div class="ms_col col-3 text-center">
            <RouterLink class="color" :to="{name:'projects'}" >
                Progetti

            </RouterLink>
        </div>
        <div class="ms_col col-3 text-center">
            Scarica CV
        </div>
  
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.ms_col{
    align-self: center;
    font-size: 20px;
}

.logo{
    max-width: 300px;
}

.color{
    color: currentColor;
    text-decoration: none;
}
</style>