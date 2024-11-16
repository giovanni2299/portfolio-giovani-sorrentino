<template>
    <section class="ms-backgroudcolor-light padding d-flex flex-wrap ms_border_b">
        <div class="col-12 col-md-6 padding text-center">
            <img class="foto-personale" src="/img/foto-personale.jpeg" alt="">
        </div>
        <div class="col-12 col-md-6 padding ms-description ms_font">
            Ciao a tutti, sono <strong> <mark>Giovanni Sorrentino,</mark> </strong> Junior Full Stack Web Developer.
            Ho recentemente completato un corso intensivo di formazione presso <strong> <mark>Boolean</mark></strong> ,
            una delle accademie più rinomate in Italia, il 17 luglio 2024.
            Durante il mio percorso, ho acquisito solide competenze sia in <strong> <mark>front-end</mark> </strong> che
            in <strong><mark>back-end</mark> </strong> development.
            Ho creato questo portfolio per mettere in pratica ciò che ho appreso e per mostrarvi alcuni dei progetti che
            ho sviluppato durante il mio percorso formativo.
        </div>
    </section>

    <section class="ms-backgroudcolor-light padding">

        <div class="ms_row ">


            <div class="col-12 d-none d-md-flex col-md-6 ms-flex text-center ms_py">
                <img class="boolean-logo" src="/img/boolean.png" alt="">
                <div class="download-attestato d-flex jusify-content-center mt-4" @click="opendocument()">
                    visualizza attestato
                </div>
                <div v-if="mostraImmagine" class="overlay">
                    <img class="attestato_img" src="/img/Giovanni_Sorrentino_Attestato.png" alt="">
                    <span @click="opendocument()" class="chiudi">Chiudi</span>
                </div>

            </div>
            
            <div class="col-12 col-md-6 ms-description-boolean padding  tex-center">
                <strong><mark>Boolean</mark> </strong> è la <strong><mark>1° tech academy online</mark> </strong> che
                offre a chiunque l'opportunità di imparare da zero a creare una pagina web,
                utilizzando i <strong><mark>linguaggi di programmazione</mark></strong> e i
                <strong><mark>framework</mark></strong> più richiesti nel settore.
                Durante il corso intensivo di 6 mesi, ho sviluppato competenze sia nel
                <strong><mark>back-end</mark></strong> che nel <strong><mark>front-end</mark></strong>,
                affrontando tecnologie fondamentali per lo sviluppo web. Alla fine del percorso formativo, ho
                partecipato a un <strong><mark>progetto in Team</mark></strong> ,
                dove abbiamo collaborato per realizzare un'<strong><mark>applicazione completa</mark></strong> che
                riprendesse la famosa App di booking B&B, che abbiamo poi presentato a professori, tutor e project
                manager,
                mettendo in pratica tutto ciò che avevamo appreso.
            </div>

            <div class="col-12 mb-3 d-md-none col-md-6 ms-flex text-center ms_py p-4">
                <img class="boolean-logo" src="/img/boolean.png" alt="">
                <div class="download-attestato d-flex jusify-content-center mt-4" @click="opendocument()">
                    visualizza attestato
                </div>
                <div v-if="mostraImmagine" class="overlay">
                    <img class="attestato_img" src="/img/Giovanni_Sorrentino_Attestato.png" alt="">
                    <span @click="opendocument()" class="chiudi">Chiudi</span>
                </div>

            </div>
        </div>

    </section>

    <section class=" ms-background-coral padding text-center ms-carousel-section ms-border">
        <div class="container-fluid">
            <h2 class="padding text-light">Tecniche e Linguaggi appresi</h2>
            <div class="ms-fix ms-background-coral">
                <div class="carosello d-none d-md-block">
                    <div class="carosello-item col-3">
                        <img src="/img/bootstrap.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/css.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/html.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/js.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/laravel.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/mysql.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/php.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/sass.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/vue.png" alt="" class="carosello-img">
                    </div>
                    <div class="carosello-item col-3">
                        <img src="/img/vite.png" alt="" class="carosello-img">
                    </div>
                </div>
            </div>



            <div class="d-md-none flex-wrap justify-content-center d-flex gap-3">
                <div class="col-4 ">
                    <img src="/img/bootstrap.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/css.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/html.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/js.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/laravel.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/mysql.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/php.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/sass.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/vue.png" alt="">
                </div>

                <div class="col-4">
                    <img src="/img/vite.png" alt="">
                </div>
            </div>
        




        </div>


    </section>


</template>

<script>
export default {
    data(){
        return{
            mostraImmagine:false,
        }
    },
    methods:{
        opendocument(){
            this.mostraImmagine = !this.mostraImmagine
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/reset.scss';

.foto-personale {
    object-fit: cover;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 2px 5px 5px 2px rgb(153, 153, 153);
}

.ms-description {
    font-size: 22px;
    line-height: 36px;

}

// .ms_font{
//     font-family: "Open Sans", sans-serif;
// }

.download-attestato {
    display: none;
    max-width: 200px;
    background-color: gold;
    border-radius: 20px;
    padding: 12px;
    cursor: pointer;
}

.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
}

.chiudi{
    padding: 10px;
    margin-top: 12px;
    background-color: orange;
    cursor: pointer;
    border-radius: 10px;
}

.chiudi:hover{
    box-shadow: 0px 5px 2px 2px rgb(103, 67, 0);
}

.attestato_img{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 80%;
    z-index: 1001;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

.ms-description-boolean {
    line-height: 36px;
    font-size: 22px;

}

.ms_row {
    display: flex;
    flex-wrap: wrap;
}

.ms-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.ms_py {
    padding-top: 50px;
}

.padding {
    padding: 30px;
}

.boolean-logo {
    max-width: 300px;
    border-radius: 15px;
}

.ms-fix {
    display: block ruby;
}

.ms-backgroudcolor-light {
    background-color: #E9F4FB;
}


.ms-background-coral {
    background-color: #9e2424;
}

.ms-background {
    background-color: rgb(0, 0, 135);
}

.ms_border_b {
    border-bottom: 5px solid orange;
}

.ms-border {
    border-top: 5px solid orange;
    // border-bottom: 5px solid orange;

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
    transform-origin: center;
    transform-style: preserve-3d;

}

.carosello-item:nth-child(1) {
    transform: rotateY(0deg) translateZ(450px);
}

.carosello-item:nth-child(2) {
    transform: rotateY(36deg) translateZ(450px);
}

.carosello-item:nth-child(3) {
    transform: rotateY(72deg) translateZ(450px);
}

.carosello-item:nth-child(4) {
    transform: rotateY(108deg) translateZ(450px);
}

.carosello-item:nth-child(5) {
    transform: rotateY(144deg) translateZ(450px);
}

.carosello-item:nth-child(6) {
    transform: rotateY(180deg) translateZ(450px);
}

.carosello-item:nth-child(7) {
    transform: rotateY(216deg) translateZ(450px);
}

.carosello-item:nth-child(8) {
    transform: rotateY(252deg) translateZ(450px);
}

.carosello-item:nth-child(9) {
    transform: rotateY(288deg) translateZ(450px);
}

.carosello-item:nth-child(10) {
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