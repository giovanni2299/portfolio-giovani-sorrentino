<template>
    <div class="col-4 text-center">
        <h4 class="mb-3">Paese di Residenza</h4>
            <p>Pavullo Nel Frignano (MO) 
                <img class="flag" src="/img/italy-flag.png" alt="">
            </p>
    </div>
    <div class="col-4 text-center">
        <h4 class="mb-3 ">Contattami</h4>
        <a  href="">giovanni-sorrentino@hotmail.it</a>
        <p class="mt-3">+39 3408601646</p>
    </div>
    <div class="col-4 text-center">
        <h4 class="mb-3 ">Seguimi su</h4>
        <div class="d-flex gap-2 justify-content-center">
            <a href="https://www.linkedin.com/in/giovanni-sorrentino-2b2b2a314/">
                <img class="logo-footer" src="/img/linkedin.png" alt="">
            </a>
    
            <a  href="https://github.com/giovanni2299">
                <img class="logo-footer" src="/img/github.png" alt="">
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.logo-footer{
    width: 50px;
}

.flag{
    max-width: 20px;
    max-height: 20px;
    border-radius: 5px;
}

</style>