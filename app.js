let song = document.getElementById("song");

let songTime = document.getElementById("songTime");

let skipButton = document.getElementById("skipButton");

let resetSong = document.getElementById("reset");

let playPause = document.getElementById("playPause")

let songCoverArt = document.getElementById("image")

// let songName = document.querySelector(".songName")

// let artistName = document.querySelector(".artistName")

//Play Stop Button - IT WORKS ALI
function playStop(){

    if(playButtonStopButton.classList.contains("fa-pause")){
        song.pause();
        playButtonStopButton.classList.remove("fa-pause");
        playButtonStopButton.classList.add("fa-play");
    }
    else{
        song.play();
        playButtonStopButton.classList.add("fa-pause");
        playButtonStopButton.classList.remove("fa-play");
    }
}

playPause.addEventListener("click", playStop);

// If Space bar is Pressed, Play/Stop
window.addEventListener('keydown', function(event){
    if (event.key === ' '){
        playStop();
    }
});

// Resets Song to Beginning / goes backwards
function reset() {
    song.currentTime = 0;
    
    
}


// Keeps moving slider up to move with the song
if(song.play()){
    setInterval(()=> {
        songTime.value = song.currentTime;
    }, 650);
};

// Changes Play Button to Pause Button Etc
songTime.onchange = function(){
    
    song.play();
    song.currentTime = songTime.value;
    playButtonStopButton.classList.add("fa-pause");
    playButtonStopButton.classList.remove("fa-play")
    
    
}

// Change Duration via the slider
song.onloadedmetadata = function(){
    song.pause(); //Loads page, pauses song.
    songTime.max = song.duration;
    songTime.value = song.current;
    
    // if it's reset, set songTime to 0
    if(reset){
        songTime.value = song.current;
    }


}

let songPlaylist = [
    {
      id: 0,
      title: "Ustu Kalsin",
      artist: "Kendimden Hallice",
      image: "/media/albumArt/ustuKalsin.jpg",
      audio: "/media/songs/UstuKalsin_KendimdenHallice",
    },
    {
      id: 1,
      title: "Cardigan",
      artist: "Taylor Swift",
      image: "/media/albumArt/cardigan.jpg",
      audio: "/media/songs/Cardigan_TaylorSwift.mp3",
    },
    {
        id: 2,
        title: "Felfena",
        artist: "Emircan Igrek",
        image: "/media/albumArt/felfena.jpg",
        audio: "/media/songs/Felfena_EmirCanIgrek.mp3",
      },
      {
        id: 3,
        title: "Felfena",
        artist: "Emircan Igrek",
        image: "/media/albumArt/felfena.jpg",
        audio: "/media/songs/Felfena_EmirCanIgrek.mp3",
      },
      {
        id: 4,
        title: "Heaven",
        artist: "Niall Horan",
        image: "/media/albumArt/heaven.jpg",
        audio: "/media/songs/Heaven_NiallHoran.mp3",
      },
      {
        id: 5,
        title: "Help!",
        artist: "The Beatles",
        image: "/media/albumArt/help!.jpg",
        audio: "/media/songs/Help!_TheBeatles.mp3",
      },
      {
        id: 6,
        title: "Revolution",
        artist: "The Score",
        image: "/media/albumArt/revolution.jpg",
        audio: "/media/songs/Revolution_TheScore.mp3",
      },
      {
        id: 7,
        title: "Tenerife Sea",
        artist: "Ed Sheeran",
        image: "/media/albumArt/tenerifeSea.jpg",
        audio: "/media/songs/TenerifeSea_EdSheeran.mp3",
      },
      {
        id: 8,
        title: "Woman",
        artist: "Harry Styles",
        image: "/media/albumArt/woman.jpg",
        audio: "/media/songs/Woman_HarryStyles.mp3",
      },
    // Add more songs as necessary
];

let currentSongIndex = 0;


function changeSong(){
    console.log("Listening...");

    // Increment the currentSongIndex variable
    currentSongIndex++;
    // If the index is greater than or equal to the length of the songPlaylist array, set it back to 0 to start over
    if (currentSongIndex >= songPlaylist.length) {
        currentSongIndex = 0;
        song.play();

    }
    // Get the data for the next song based on the currentSongIndex
    let nextSongData = songPlaylist[currentSongIndex];
    // Update the song title, artist, image, and source
    songName.innerHTML = nextSongData.title;
    artistName.innerHTML = nextSongData.artist;
    song.src = nextSongData.audio;
    songCoverArt.src = nextSongData.image;
    // Play the new song
   

}

skipButton.addEventListener("click", changeSong);
