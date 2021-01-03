<template>
  <div class="container">
    <br>
    <router-link :to="{name: 'songs'}"><button type="button" class="btn btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"></path>
</svg></button></router-link>
     <h1 class="my-4">Titre : {{ song.title }}</h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-5" id="img">
      <img class="img-fluid" :src="song.albumImageUrl">
       <br> <br>
      <div class="card">
    <div class="card-body">
      <h5><strong>Lycris :</strong></h5>
    {{song.lyrics}}
  </div>
</div>
    </div>

    <div class="col-md-4">
      <h4 class="my-1">Artiste : {{ song.artist }}</h4>
      <h4 class="my-1">Album : {{ song.album }}</h4>
      <h2>Video Youtube : </h2>
      <youtube :video-id="song.youtubeId" :player-height="300" :player-width="500"></youtube>
            <div>
        <button  class="btn btn-info"
            @click="navigateTo({
            name:'song-edit',
            params: {
              songId: song.id
            }
            })">
            Modifier </button>
    </div>
    </div>

  <div>
    <br>
  </div>
  </div>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log('title', this.song)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
