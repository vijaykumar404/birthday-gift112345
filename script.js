let current = 1;

function nextLayer() {
    document.getElementById("layer" + current).classList.remove("active");
    current++;
    document.getElementById("layer" + current).classList.add("active");
}

function playMusic() {
    let song = document.getElementById("music");
    song.play();
}