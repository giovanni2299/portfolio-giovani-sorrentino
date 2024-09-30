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
        <div class="ms_col row col-3 text-center">
            
            <div class="col-6">
                <a href="/img/Giovanni_Sorrentino CV.pdf">
                    IT_CV

                </a>
            </div>
            <div class="col-6">EN_CV</div>
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