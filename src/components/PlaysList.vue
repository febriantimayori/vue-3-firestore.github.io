<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Playlist Songs</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(playlist, index) in playlists"
          :key="index"
          @click="setActivePlaylist(playlist, index)"
        >
          {{ playlist.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentPlaylist">
        <playlist-details
          :playlist="currentPlaylist"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Playlist...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistDataService from "../services/PlaylistDataService";
import PlaylistDetails from "./Playlist";
export default {
  name: "plays-list",
  components: { PlaylistDetails },
  data() {
    return {
      playlists: [],
      currentPlaylist: null,
      currentIndex: -1,
      unsubscribe: null
    };
  },
  methods: {
    onDataChange(items) {
      let _playlists = [];
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _playlists.push({
          id: id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });
      this.playlists = _playlists;
    },
    refreshList() {
      this.currentPlaylist = null;
      this.currentIndex = -1;
    },
    setActivePlaylist(playlist, index) {
      this.currentPlaylist = playlist;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.unsubscribe = PlaylistDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  },
  beforeUnmount() {
    this.unsubscribe();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>