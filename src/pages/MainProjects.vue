<template>
    <div class="container padding">
        <div class="row g-3">
            <div v-for="project in currentProjects" class="col-4">
                <CardComponents :item="project" />

            </div>
            
            <div class="d-flex justify-content-between">
                <div @click="previousPage" :disabled="currentPage === 1" class="prev align-self-center ">indietro</div>
                <span class="m-3 c-sand align-self-center description">Pagina {{ currentPage }} di {{ totalPages
                    }}</span>
                <div @click="nextPage" :disabled="currentPage === totalPages" class="next align-self-center ">avanti
                </div>
            </div>
        </div>

    </div>


</template>

<script>
import CardComponents from '../components/CardComponents.vue'
import store from '../../store'

export default {
    components: {
        CardComponents,
    },
    data() {
        return {
            store,
            isLoading: true,
            currentPage: 1,
            projectsPerPage: 6
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.store.data.viewProjects.length / this.projectsPerPage);
        },
        currentProjects() {
            const start = (this.currentPage - 1) * this.projectsPerPage;
            const end = start + this.projectsPerPage;
            return this.store.data.viewProjects.slice(start, end);
        }
    },
    mounted() {

        this.loadProjects();
    },
    methods: {
        loadProjects() {

            setTimeout(() => {

                this.isLoading = false;
            }, 2000);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
};

</script>

<style lang="scss" scoped>
.padding {
    padding: 20px;
}

.next, .prev{
    padding: 5px;
    cursor: pointer;
    font-size: 18px;
}

.next:hover{
  background-color:  rgba(255, 166, 0, 0.6);
  border-radius: 5px;
}
.prev:hover{
   background-color:  rgba(255, 166, 0, 0.6);
  border-radius: 5px;


}
</style>