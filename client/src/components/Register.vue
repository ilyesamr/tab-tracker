<template>
   <div class="container">
     <br>
        <h1>Bienvenue dans la page d'inscription</h1>
<form autocomplete="off">
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" name="email" v-model="email">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control-plaintext" name="password" placeholder="Password" v-model="password" autocomplete="new-password">
    </div>
  </div><br>

     <div class="alert alert-danger" v-html="error" v-show="error">

     </div>

   <button @click="register" class="btn btn-primary">S'inscrire</button>
</form>
   </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
        await this.$router.push({
          name: 'login'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
