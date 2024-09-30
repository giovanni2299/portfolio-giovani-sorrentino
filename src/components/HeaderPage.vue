<template>

    <div class="ms_col col-3-md text-center col-sm-6">
        <RouterLink class="color" :to="{ name: 'home' }">
            <img class="logo" src="/img/logo-principale.png" alt="">
        </RouterLink>
    </div>
    <div class="ms_col col-3-md text-center d-none d-md-block">
        <RouterLink class="color ms_hover" :to="{ name: 'projects' }">
            Progetti

        </RouterLink>
    </div>
    <div class="ms_col d-flex justify-content-around col-3-md text-center d-none d-md-flex">

        <div class="">
            <span class="ms_a">
                <img class="download-img" src="/img/dowload_icon.png" alt="">
                <a href="/img/Giovanni_Sorrentino_CV.pdf" download="Giovanni_Sorrentino_CV.pdf">
                    IT_CV
                </a>

            </span>
        </div>
        <div class="divider ms-3 me-3">
            <span class="ms_a">
                <img class="download-img" src="/img/dowload_icon.png" alt="">
                <a href="/img/Giovanni_Sorrentino_CV_EN.pdf" download="Giovanni_Sorrentino_CV_EN.pdf">
                    EN_CV
                </a>

            </span>
        </div>
    </div>

    <div class="d-block d-md-none col-6 d-flex justify-content-center aling-items-center ms_position text-center">
        <img @click="changeBooleanValue()" class="hamburger-menu" src="/img/icons-hamburgher.png" alt="">
        <div :class="modal === false ? 'modal_class' : ''">
            <div class="absolute">
                <RouterLink class="color ms_hover" :to="{ name: 'projects' }">
                    Progetti

                </RouterLink>

                <div class="ms_a mt-3 mb-3">
                    <img class="download-img" src="/img/dowload_icon.png" alt="">
                    <a href="/img/Giovanni_Sorrentino_CV_EN.pdf" download="Giovanni_Sorrentino_CV_EN.pdf">
                        EN_CV
                    </a>

                </div>


                <div class="ms_a">
                    <img class="download-img" src="/img/dowload_icon.png" alt="">
                    <a href="/img/Giovanni_Sorrentino_CV_EN.pdf" download="Giovanni_Sorrentino_CV_EN.pdf">
                        EN_CV
                    </a>

                </div>
            </div>
        </div>

    </div>


</template>

<script>
export default {
    data() {
        return {
            modal: false,

        }


    }, methods: {
        changeBooleanValue() {
            this.modal = !this.modal
            console.log('ho cliccato')
        }
    }
}
</script>

<style lang="scss" scoped>
.ms_col {
    align-self: center;
    font-size: 20px;
}

.ms_a>a {
    text-decoration: none;
    color: currentColor;
}

.ms_a:hover {
    padding-bottom: 5px;
    color: orange;
    box-shadow: 0px 2px 0px 0px orange;
    cursor: pointer;
}

.logo {
    max-width: 250px;
    object-fit: cover;
}

.color {
    color: currentColor;
    text-decoration: none;
}

.ms_hover:hover {
    padding-bottom: 5px;
    color: orange;
    box-shadow: 0px 2px 0px 0px rgb(255, 166, 0);
    cursor: pointer;
}

.download-img {
    width: 20px;
}


.hamburger-menu {
    width: 50px;
    height: 50px;
    cursor: pointer;
}

// .ms_position{
//     position: relative;
// }

.modal_class {
    display: none;

}

.modal_class>p:last-child {
    border: none;
}


.absolute{
    width: 120px;
    position: absolute;
    background-color: white;
    color: black;
    border-radius: 5px;
    padding: 0 5px;
    z-index: 1;
    top: 0;
    right: 0;
    
}
</style>