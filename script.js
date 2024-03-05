const header = document.getElementsByTagName("header")[0];
const bot = document.getElementsByClassName("bot")[0];
const parent = document.getElementsByClassName("parent")[0];
const homediv = document.getElementsByClassName("home")[0];

const home = document.getElementById("home");
const about = document.getElementById("about");
/**
 * Preloader
 */
let preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

// header
let ele, left, width;
const makeHeader = () => {
  if (window.scrollY > 25) {
    header.classList.add("head_bg");
  } else {
    header.classList.remove("head_bg");
  }
};

const movebottom = (e) => {
  ele = e.target;
  move();
};

const firstmovebottom = () => {
  ele = home;
  move();
};

const move = () => {
  left = ele.offsetLeft;
  wid = ele.clientWidth;

  bot.style.width = wid + "px";
  bot.style.left = left + "px";
};

about.addEventListener("click", movebottom);
home.addEventListener("click", movebottom);
window.addEventListener("scroll", makeHeader);
window.addEventListener("resize", move);
firstmovebottom();

// for music
let index = 0;
let playBtn;
let progress;
let secText;
let min;
let back;
let forward;
let img;
let musicParent;
let progressContainer;
let audio;

const musicSource = [
  "./music/one.mp3",
  "./music/two.mp3",
  "./music/two.mp3",
  "./music/four.mp3",
  "./music/five.mp3",
  "./music/six.mp3",
  "./music/seven.mp3",
  "./music/eight.mp3",
  "./music/nine.mp3",
  "./music/ten.mp3",
  "./music/eleven.mp3",
  "./music/twelve.mp3",
];

const imageSource = [
  "./images/one.jpeg",
  "./images/two.jpeg",
  "./images/three.jpeg",
  "./images/four.jpeg",
  "./images/five.jpeg",
  "./images/six.jpeg",
  "./images/seven.jpeg",
  "./images/eight.jpeg",
  "./images/nine.jpeg",
  "./images/ten.jpeg",
  "./images/eleven.jpeg",
  "./images/twelve.jpeg",
];

const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.marginLeft = `${progressPercent}%`;
};

const showtime = (e) => {
  let { duration, currentTime } = e.srcElement;

  if (duration == currentTime) {
    index++;
    if (index > 11) {
      index = 0;
    }
    playPause();
  }

  var sec, secd;
  var minute, minuted;
  duration = isNaN(duration) ? 0 : duration;
  minute = Math.floor(currentTime / 60);
  minute = minute < 10 ? `0${minute}` : minute;

  sec = Math.floor(currentTime % 60);
  sec = sec < 10 ? `0${sec}` : sec;

  minuted = Math.floor(duration / 60);
  minuted = minuted < 10 ? `0${minuted}` : minuted;

  secd = Math.floor(duration % 60);
  secd = secd < 10 ? `0${secd}` : secd;

  secText.innerText = minute + ":" + sec + " /";
  min.innerText = minuted + ":" + secd;
};

function setTime(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = Math.floor(audio.duration);
  audio.currentTime = (clickX / width) * duration;
}

const moveforward = () => {
  index++;
  if (index > 11) {
    index = 0;
  }
  playPause();
  if (audio.play()) {
    playBtn.classList.add("fa-circle-pause");
  }
};

const backBackward = () => {
  index--;
  if (index < 0) {
    index = 11;
  }
  playPause();
  if (audio.play()) {
    playBtn.classList.add("fa-circle-pause");
  }
};

const setaudioImage = () => {
  audio.src = musicSource[index];
  img.src = imageSource[index];
};

const playMusic = () => {
  if (playBtn.classList.contains("fa-circle-pause")) {
    audio.pause();
    musicParent.classList.remove("play");
  } else {
    audio.play();
    musicParent.classList.add("play");
  }
  playBtn.classList.toggle("fa-circle-pause");
};

const playPause = () => {
  audio.src = musicSource[index];
  img.src = imageSource[index];
  if (audio.play()) {
    audio.play();
  } else {
    audio.pause();
  }
};

// res menu
const menu = document.getElementsByClassName("humberger")[0];
const res_hum = document.getElementsByClassName("res-hum")[0];
const des = document.querySelectorAll(".ds");

const showMenuBar = () => {
  res_hum.classList.toggle("show-hum");
  if (header.classList.contains("head_bg")) {
    header.classList.remove("head_bg");
  }
  if (!res_hum.classList.contains("show-hum")) {
    header.classList.add("head_bg");
  }
  menuAni();
};

const menuAni = () => {
  for (let i = 0; i < des.length; i++) {
    des[i].classList.toggle("show");
  }
  des[1].classList.toggle("mid");
};

menu.addEventListener("click", showMenuBar);

const listen = document.getElementById("listen");

listen.addEventListener("click", () => {
  bot.style.width = 0 + "px";
});
