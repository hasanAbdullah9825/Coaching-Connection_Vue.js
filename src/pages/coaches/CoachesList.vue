<template>
    <section>Filter</section>

    <section>
<base-card>
        <div class="controls">
<button>Refresh</button>
<router-link to="/register">Register As a Coach</router-link>
        </div>
        <ul v-if="isCoach">
            <Coach-item 
            v-for="coach in filteredCoaches" :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            
            ></Coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body{
    margin: 0;
}
</style>


<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components:{
    CoachItem
  },

    computed:{
      filteredCoaches(){
        return this.$store.getters['coaches/coaches'];
      },

      isCoach(){
        return this.$store.getters['coaches/hasCoaches'];
      },


    }
}
</script>


<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>