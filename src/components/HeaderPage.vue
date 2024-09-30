<template>
    
        <div class="ms_col col-3 text-center">
            <RouterLink class="color" :to="{name:'home'}" >
                <img class="logo" src="/img/logo-principale.png" alt="">
            </RouterLink>
        </div>
        <div class="ms_col col-3 text-center">
            <RouterLink class="color ms_hover" :to="{name:'projects'}" >
                Progetti

            </RouterLink>
        </div>
        <div class="ms_col row col-3 text-center">
            
            <div class="col-6">
                <span class="ms_a">
                    <img class="download-img" src="/img/dowload_icon.png" alt="">
                    <a href="/img/Giovanni_Sorrentino_CV.pdf" download="Giovanni_Sorrentino_CV.pdf">
                        IT_CV
                    </a>

                </span>
            </div>
            <div class="col-6">
                <span class="ms_a">
                    <img class="download-img" src="/img/dowload_icon.png" alt="">
                    <a href="/img/Giovanni_Sorrentino_CV_EN.pdf" download="Giovanni_Sorrentino_CV_EN.pdf">
                        EN_CV
                    </a>

                </span>
            </div>
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

.ms_a > a{
    text-decoration: none;
    color: currentColor;
}

.ms_a:hover{
    padding-bottom: 5px;
    color: orange;
    box-shadow: 0px 2px 0px 0px  orange;
    cursor: pointer;
}

.logo{
    max-width: 300px;
}

.color{
    color: currentColor;
    text-decoration: none;
}

.ms_hover:hover{
    padding-bottom: 5px;
    color: orange;
    box-shadow: 0px 2px 0px 0px  rgb(255, 166, 0);
    cursor: pointer;
}

.download-img{
    width: 20px;
}
</style>