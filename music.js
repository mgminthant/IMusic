playBtn = document.querySelector(".fa-circle-play");
progress = document.querySelector(".progress-bar");
secText = document.querySelector(".sec");
min = document.querySelector(".min");
back = document.querySelector(".fa-backward");
forward = document.querySelector(".fa-forward");
img = document.querySelector(".image");
musicParent = document.querySelector(".music-parent");
progressContainer = document.querySelector(".progress-container");
audio = document.getElementsByTagName("audio")[0];

playBtn.addEventListener("click", playMusic);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("timeupdate", showtime);
progressContainer.addEventListener("click", setTime);
forward.addEventListener("click", moveforward);
back.addEventListener("click", backBackward);
setaudioImage();
