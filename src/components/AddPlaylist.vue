<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="playlist.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Link</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="playlist.description"
          name="description"
        />
      </div>

      <button @click="savePlaylist" class="btn btn-info">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-info" @click="newPlaylist">Add</button>
    </div>
  </div>
</template>

<script>
import PlaylistDataService from "../services/PlaylistDataService";
export default {
  name: "add-playlist",
  data() {
    return {
      playlist: {
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePlaylist() {
      var data = {
        title: this.playlist.title,
        description: this.playlist.description,
        published: false
      };
      PlaylistDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPlaylist() {
      this.submitted = false;
      this.tplaylist = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>