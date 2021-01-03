<template>
       <div class="container">
  <div class="row">
    <div class="col text-center">
        <input class="form-control" placeholder="Rechercher une chanson par son: titre, artiste, album, genre" type="text" name="search" v-model="search">
    </div>
  </div></div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
