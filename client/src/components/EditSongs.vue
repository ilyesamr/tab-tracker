<template>
    <div class="container">
      <h1>Modification de musique</h1>
            <div class="alert alert-danger" v-show="error">
           {{error}}
      </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Titre</label>
    <div class="col-sm-4">
      <label>
        <input required :rules="[required]" type="text" class="form-control-plaintext" name="title" v-model="song.title">
      </label>
    </div>
  </div>
      <div class="form-group row">
    <label class="col-sm-2 col-form-label">Artiste : </label>
    <div class="col-sm-4">
      <label>
        <input required :rules="[required]" type="text" class="form-control-plaintext" name="artist" v-model="song.artist">
      </label>
    </div>
  </div>
   <div class="form-group row">
    <label class="col-sm-2 col-form-label">Genre : </label>
    <div class="col-sm-4">
      <input required :rules="[required]" type="text" class="form-control-plaintext" name="genre" v-model="song.genre">
    </div>
  </div>
   <div class="form-group row">
    <label class="col-sm-2 col-form-label">Album : </label>
    <div class="col-sm-4">
      <input required :rules="[required]" type="text" class="form-control-plaintext" name="album" v-model="song.album">
    </div>
  </div>
     <div class="form-group row">
    <label class="col-sm-2 col-form-label">L'image de l'album : </label>
    <div class="col-sm-4">
      <input required :rules="[required]" type="text" class="form-control-plaintext" name="albumImageUrl" v-model="song.albumImageUrl">
    </div>
  </div>
     <div class="form-group row">
    <label class="col-sm-2 col-form-label">L'id youtube : </label>
    <div class="col-sm-4">
      <input required :rules="[required]" type="text" class="form-control-plaintext" name="youtubeId" v-model="song.youtubeId">
    </div>
  </div>
  <div class="form-group green-border-focus">
  <label >Lyrics : </label>
      <textarea required :rules="[required]" class="form-control" name="lyrics" v-model="song.lyrics"></textarea>
  </div>
  <div class="form-group green-border-focus">
  <label>Tab : </label>
  <textarea required :rules="[required]" class="form-control" rows="3" name="tab" v-model="song.tab"></textarea>
</div>
    <br>
   <button @click="save" class="btn btn-success">Valider les modifications</button>
        <br>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const songId = this.$store.state.route.params.songId
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Merci de remplir toutes les informations.'
        return
      }
      try {
        await SongsService.put(this.song)
        await this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log('song', this.song)
  }
}
</script>

<style scoped>

</style>
