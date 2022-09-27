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

function sum() {
  var sum = 0;
  for (let i = 0; i < songList.length; i++) {
    sum += songList[i]._length;
  }
  return sum;
}

function addToList() {
  var data = new Song(
    document.getElementById("song").value,
    document.getElementById("length").value
  );
  songList.push(data);
  var sPlaceHolder = sum();
  document.getElementById("feedback").innerText =
    "A zene adatai hozzá lettek adva a listához";
  document.getElementById("sum").innerText =
    "A zeneszámok össz hossza: " + sPlaceHolder + " perc";
  setTimeout(() => {
    document.getElementById("feedback").innerText = "";
  }, 2000);
}

function init() {
  document.getElementById("add").addEventListener("click", addToList);
}

document.addEventListener("DOMContentLoaded", init);