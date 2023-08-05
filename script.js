
// initlize a variable
let audioindex = 0;
let audioElement = new Audio('./songs/1.mp3');
// audioelement.play();
let playmaster = document.getElementById("playmaster");
let songscale = document.getElementById("songscale")
let mastersongnav = document.getElementById("mastersongnav")
let gif = document.getElementById("gif")
let songitem = Array.from( document.getElementsByClassName("songItem"));

let songs= [
    {songname: "wadia re", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Mat ja re", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Janu na me", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    {songname: "Sun shathiya", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    {songname: "kon tujhe", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    {songname: "wadia re", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    {songname: "na be wafa", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    {songname: "ek mulakat", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    {songname: "wadia re", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    {songname: "tu hoke", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
]
songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src =songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
    
});



// handle song 
playmaster.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        playmaster.classList.remove('fa-circle-play');
        playmaster.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        playmaster.classList.remove('fa-circle-pause');
        playmaster.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
   
// update seekbar means  song scale
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

songscale.value =progress;
})

songscale.addEventListener('change',()=>{
    audioElement.currentTime = songscale.value * audioElement.duration/100;

})

const makeallplay= ()=>{
    Array.from( document.getElementsByClassName("songitemplay")).forEach((element)=>{
         element.classList.add('fa-circle-play');
         element.classList.remove('fa-circle-pause');

    })
}

Array.from( document.getElementsByClassName("songitemplay")).forEach((element)=>{
      element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeallplay();

        audioindex  = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')

         audioElement.src = `songs/${audioindex }.mp3`;
         mastersongnav.innerText = songs[audioindex-1].songname;

         audioElement.currentTime=0;
         audioElement.play()
         playmaster.classList.remove('fa-circle-play');
         playmaster.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
      })
})

document.getElementById("next").addEventListener('click',()=>{
    if(audioindex>=9){
        audioindex=0
    }else{
        audioindex +=1;
    }
    audioElement.src = `songs/${audioindex+1 }.mp3`;
    mastersongnav.innerText = songs[audioindex].songname;

         audioElement.currentTime=0;
         audioElement.play()
         playmaster.classList.remove('fa-circle-play');
         playmaster.classList.add('fa-circle-pause');
})

document.getElementById("previous").addEventListener('click',()=>{
    if(audioindex<=0){
        audioindex=0
    }else{
        audioindex -=1;
    }
    audioElement.src = `songs/${audioindex+1 }.mp3`;
    mastersongnav.innerText = songs[audioindex].songname;
         audioElement.currentTime=0;
         audioElement.play()
         playmaster.classList.remove('fa-circle-play');
         playmaster.classList.add('fa-circle-pause');
})



 
