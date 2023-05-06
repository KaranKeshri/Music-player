let play = document.getElementById("Play");


let previous = document.getElementById("Previous");


let next = document.getElementById("Next");


let audio = document.querySelector("audio");


let img = document.querySelector("img");


let title = document.getElementById("title");


let artist = document.getElementById("artist");


let songs = [
    
    {


        name: "Alone",
        
        title: "Alone",
        
        artist: "Alan Walker",
        
    },


    {


        name: "Sugar",
        
        title: "sugar & Brownies",
        
        artist: "Dharia",
        
    },


    {


        name: "Peaches",
        
        title: "Peaches",
        
        artist: "Justin Bieber",
    },


];
let isplaying = false;

let playmusic = () => {


    isplaying = true;
    
    audio.play();
    
    play.classList.replace('fa-play', 'fa-pause');
    
    img.classList.add("anime");
};



let pausemusic = () => {




    isplaying = false;
    
    audio.pause();
    
    play.classList.replace('fa-pause', 'fa-play');
};



play.addEventListener("click", () => {




    if (isplaying == false) {


        playmusic();
    } else {

        
        pausemusic();
    };
});



const loadsong = (songs) => {


    title.textContent = songs.title;
    
    artist.textContent = songs.artist;
    
    audio.src = "Music/" + songs.name + ".mp3";
    
    img.src = "images/" + songs.name + ".jpg";
}


songindex = 0;

const nextsong = () => {


    songindex = (songindex + 1) % songs.length;
    
    loadsong(songs[songindex]);
    
    playmusic();
}


const prevsong = () => {


    songindex = (songindex - 1 + songs.length) % songs.length;
    
    loadsong(songs[songindex]);
    
    playmusic();
}


next.addEventListener('click', nextsong);


previous.addEventListener('click', prevsong);
//Step 1: Defining all the variables and accessing the HTML elements 
The required elements in the HTML layout that are to be dynamically changed are first selected using the querySelector() method. They are then assigned variable names so that they could be accessed and modified. Other variables that would be accessed throughout the program are also defined.
Step 2: Loading a new track from the tracklist 
All the tracks that have to be played are defined in the tracklist as objects. These objects contain properties like the name, artist, image and path to the track. Each of the tracks can then be accessed using its track index.//
