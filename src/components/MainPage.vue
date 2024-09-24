<template>
    <section class="d-flex">
        <div class="col-6 padding text-center">
            <img class="foto-personale" src="/img/foto-personale.jpeg" alt="">
        </div>
        <div class="col-6 padding ms-description">
            Ciao a tutti, sono <strong> Giovanni Sorrentino,</strong>  Junior Full Stack Web Developer. 
            Ho recentemente completato un corso intensivo di formazione presso <strong>Boolean,</strong> 
             una delle accademie più rinomate in Italia, il 17 luglio 2024.
              Durante il mio percorso, ho acquisito solide competenze sia in <strong>front-end</strong>  che in <strong>back-end</strong>  development. 
              Ho creato questo portfolio per mettere in pratica ciò che ho appreso e per mostrarvi alcuni dei progetti che ho sviluppato durante il mio percorso formativo.
        </div>

    </section>

    <section class=" ms-background padding text-center ms-carousel-section ms-border">
        <h2 class="padding text-light">Tecniche e Linguaggi appresi</h2>
        <div class="col-12 ms-fix ms-background padding">
            <div class="carosello">
                <div class="carosello-item">
                        <img src="/img/bootstrap.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/css.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/html.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/js.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/laravel.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/mysql.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/php.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/sass.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/vue.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item">
                        <img src="/img/vite.png" alt="" class="carosello-img">
                    </div>
                </div>
            </div>
        
    </section>
</template>

<script>
    export default {
        
    }
</script >

<style lang="scss" scoped>
@use '../../style/partials/reset.scss';

.foto-personale{
    width: 300px;
    border-radius: 25px;
    box-shadow: 2px 5px 5px 2px lightgrey;
}

.ms-description{
    font-size: 25px;
}

.padding{
    padding: 30px;
}


.ms-fix{
    display: block ruby;
}

.ms-background{
    background-color: rgb(0, 0, 78);
}


.ms-border{
    border: 5px solid gold;
}

.carosello {
    position: relative;
    width: 300px;
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(6000px) rotateY(0deg);
    animation: rotazione 45s linear infinite;
}
.carosello-item {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-origin:center;
    transform-style: preserve-3d;
    
}
.carosello-item:nth-child(1){
    transform: rotateY(0deg) translateZ(450px);
}
.carosello-item:nth-child(2){
    transform: rotateY(36deg) translateZ(450px);
}
.carosello-item:nth-child(3){
    transform: rotateY(72deg) translateZ(450px);
}
.carosello-item:nth-child(4){
    transform: rotateY(108deg) translateZ(450px);
}
.carosello-item:nth-child(5){
    transform: rotateY(144deg) translateZ(450px);
}
.carosello-item:nth-child(6){
    transform: rotateY(180deg) translateZ(450px);
}
.carosello-item:nth-child(7){
    transform: rotateY(216deg) translateZ(450px);
}
.carosello-item:nth-child(8){
    transform: rotateY(252deg) translateZ(450px);
}

.carosello-item:nth-child(9){
    transform: rotateY(288deg) translateZ(450px);
}

.carosello-item:nth-child(10){
    transform: rotateY(324deg) translateZ(450px);
}

.carosello-img {
    border-radius: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@keyframes rotazione {
    100% {
        transform: perspective(11000px) rotateY(360deg);
    }
}







</style>