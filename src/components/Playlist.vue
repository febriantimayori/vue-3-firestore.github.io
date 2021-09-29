<template>
  <div v-if="currentPlaylist" class="edit-form">
    <h4>Playlist</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentPlaylist.title"
        />
      </div>

      <div class="form-group">
        <label for="description">Link</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentPlaylist.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPlaylist.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentPlaylist.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deletePlaylist">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updatePlaylist">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Playlist...</p>
  </div>
</template>

<script>
import PlaylistDataService from "../services/PlaylistDataService";
export default {
  name: "playlist",
  props: ["playlist"],
  data() {
    return {
      currentPlaylist: null,
      message: "",
    };
  },
  watch: {
    playlist: function(playlist) {
      this.currentPlaylist = { ...playlist};
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      PlaylistDataService.update(this.currentPlaylist.id, {
        published: status,
      })
        .then(() => {
          this.currentPlaylist.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePlaylist() {
      const data = {
        title: this.currentPlaylist.title,
        description: this.currentPlaylist.description,
      };
      PlaylistDataService.update(this.currentPlaylist.id, data)
        .then(() => {
          this.message = "The Playlist was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePlaylist() {
      PlaylistDataService.delete(this.currentPlaylist.id)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentPlaylist = { ...this.playlist }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>