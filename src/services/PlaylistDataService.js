import firebase from "../firebase";

const db = firebase.collection("/playlist");

class PlaylistDataService {
  getAll() {
    return db;
  }

  create(playlist) {
    return db.add(playlist);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new PlaylistDataService();