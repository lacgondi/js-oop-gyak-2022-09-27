let songList = [];

class Song {
    #song;
    #length;

  constructor(song, length) {
    this.#song = song;
    this.#length = length;
  }

  get song() {
    return this.#song;
  }

  get length() {
    return this.#length;
  }
}

function addToList() {
  var data = new Song(
    document.getElementById("song").value,
    document.getElementById("length").value
  );
  songList.push(data);
  document.getElementById("feedback").innerText =
    "A zene adatai hozzá lettek adva a listához";
  setTimeout(() => {
    document.getElementById("feedback").innerText = "";
  }, 2000);
}

function init() {
  document.getElementById("add").addEventListener("click", addToList);
}

document.addEventListener("DOMContentLoaded", init);
