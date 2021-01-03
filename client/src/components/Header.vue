<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <h2 class="navbar-brand" href="#">TabTracker</h2>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link :to="'/'">Home</router-link> </a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" href="#"><router-link :to="'/songs'">Browse</router-link> </a>
      </li>
      <li class="nav-item">
        <a v-if="!$store.state.isUserLoggedIn" class="nav-link" href="#"><router-link :to="'/register'">Inscription</router-link></a>
      </li>
       <li class="nav-item">
        <a v-if="!$store.state.isUserLoggedIn" class="nav-link" href="#"><router-link :to="'/login'">Connexion</router-link></a>
      </li>
           <li class="nav-item">
        <a v-if="$store.state.isUserLoggedIn" href="#" class="nav-link" v-on:click="logout">Déconnexion</a>
      </li>
    </ul>
  </div>
  <br>
</nav>

</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'hello'
      })
    }
  }
}
</script>

<style scoped>

</style>
