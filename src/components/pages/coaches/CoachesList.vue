<template>
    <section>Filter</section>

    <section>

        <div class="controls">
<button>Refresh</button>
<router-link to="/register">Register</router-link>
        </div>
        <ul v-if="isCoach">
            <li v-for="coach in filteredCoaches" :key="coach.id">
{{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>No coaches found</h3>
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
export default {
    computed:{
      filteredCoaches(){
        return this.$store.getters['coaches/coaches'];
      },

      isCoach(){
        return this.$store.getters['coaches/hasCoaches'];
      }
    }
}
</script>