console.log("Welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('1.mp3');
let myProgressBar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName')
let songs=[
    {songName:"Dil Nu", filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Spaceship", filePath:"2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Chances", filePath:"3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Jugni", filePath:"4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Lover", filePath:"5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Never Fold", filePath:"6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Sheesha", filePath:"7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Wo Noor", filePath:"8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Goat", filePath:"9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Da Crew", filePath:"10.mp3",coverPath:"covers/10.jpg"},
]
function Play()
{
  if(audioElement.paused) {
      audioElement.play();
      document.getElementById('masterPlay').classList.remove("fa-circle-play")
      document.getElementById('masterPlay').classList.add("fa-circle-pause")
      document.getElementById('gif').style.opacity = 1;
    }
    else {
      audioElement.pause();
      document.getElementById('masterPlay').classList.remove("fa-circle-pause")
      document.getElementById('masterPlay').classList.add("fa-circle-play")
      document.getElementById('gif').style.opacity = 0;
  }
}
audioElement.addEventListener('timeupdate',()=>{
    progess = parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById('myProgressBar').value= progess;
})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime= document.getElementById('myProgressBar').value* audioElement.duration/100;
})

const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((elememt)=>{
       elememt.classList.remove("fa-circle-pause");
       elememt.classList.add("fa-circle-play");
  })
}
const makeOnePlay=()=>{
  
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((elememt)=>{
  elememt.addEventListener('click',(e)=>{
    console.log(e.target)
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src= `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    document.getElementById('gif').style.opacity = 1;
    document.getElementById('masterPlay').classList.remove("fa-circle-play")
    document.getElementById('masterPlay').classList.add("fa-circle-pause")
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
  audioElement.src= `${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  document.getElementById('masterPlay').classList.remove("fa-circle-play")
  document.getElementById('masterPlay').classList.add("fa-circle-pause")
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  audioElement.src= `${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  document.getElementById('masterPlay').classList.remove("fa-circle-play")
  document.getElementById('masterPlay').classList.add("fa-circle-pause")
})