//intialize the variables
let songIdx = 0;
let audioEl = new Audio("songs/1.mp3");
let playBtn = document.querySelector("#play");
let progressbar = document.querySelector("#progressbar");  
let gif = document.querySelector("#gif");

let songs = [
    {//song-1
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-2
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-3
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-4
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-5
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-6
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-7
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    {//song-8
        name: "O-Mahi",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    }
]
// Handle play/pause event
playBtn.addEventListener("click",()=>{
    if(audioEl.paused || audioEl.currentTime<=0) {
        audioEl.play();
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
        gif.style.opacity= "1";
    } else {
        audioEl.pause();
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        gif.style.opacity= "0";
    }
})

// listen to Events
audioEl.addEventListener("timeupdate",()=>{
    // console.log("timeupdate");
    //update seekBar
    progress = parseInt((audioEl.currentTime/audioEl.duration)*100);
    // console.log(progress);
    progressbar.value=progress;
})
