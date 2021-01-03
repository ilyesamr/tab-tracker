<template>
   <div class="container">
     <br>
        <h1>Voici la liste des musiques</h1>
     <router-link :to="{name: 'songs-create'}"><button type="button" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
</svg>
              </button></router-link>
     <br><br>
    <songs-search />
     <br>
      <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
     <div v-for="song in songs" :key="song.id" class="col-md-4 col-xs-12">
       <div class="serv">
          <h2>
            {{song.title}}
          </h2>

          <p>
            {{song.artist}}
          </p>
          <p>
            {{song.genre}}
          </p>

       <img class="img-fluid" width="60%" height="100%" :src="song.albumImageUrl" />
            <br> <br>
       </div>
         <button  class="btn btn-info"
            @click="navigateTo({
            name:'song',
            params: {
              songId: song.id
            }
            })">
            Détails </button>
     </div>
        </div>
      </div>
      </div>

   </div>
</template>

<script>
import SongsService from '../services/SongsService'
import SongsSearch from './SongsSearch'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    SongsSearch
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>

</style>
