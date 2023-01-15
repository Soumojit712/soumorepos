let flag=0;
let musicindex=0;
let k=0;
musicplay=["sadi gali","haseeno ka deewana","banjara"];
musicartist=["memer","pancho","lola"]
let music=document.querySelector('audio');
let prev=document.getElementById("prev");
let play=document.getElementById("play");
let song=document.getElementById("abc");
let artist=document.getElementById("bcd");
let next=document.getElementById("next");
let img=document.getElementById("def");
let cur=document.getElementById("current");
let dur=document.getElementById("duration");
let bar=document.getElementById("progress_bar");
function playmusic(){
    music.play();
    play.classList.replace("fa-play","fa-pause");
    flag=1;
}
function stopmusic(){
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    flag=0;
}
play.addEventListener("click",()=>{
    (flag==0)?playmusic():stopmusic();
    song.textContent=musicplay[musicindex];
    img.src = musicindex + 1 + "s.jfif";
    artist.textContent=musicartist[musicindex];
});
music.addEventListener('timeupdate',(event)=>{
    // console.log(event);
    const { currentTime , duration } = event.srcElement;
    cur.textContent=parseInt(currentTime/60)+":"+parseInt(currentTime%60);
    dur.textContent=parseInt(duration/60)+":"+parseInt(duration%60);
    k=currentTime/duration*100;
    console.log(k);
    bar.style.width=`${ k }%`;

});
function fxt(){
        musicindex = ( musicindex + 1 ) % 3;
        music.src = musicindex + 1 +".mp3";
        img.src = musicindex + 1 + "s.jfif";
        // alert("playing:" + music.src);
        song.textContent=musicplay[musicindex];
        artist.textContent=musicartist[musicindex];
}
next.addEventListener("click",fxt);
prev.addEventListener("click",()=>{
    musicindex = ( musicindex + 2 ) % 3;
    music.src = musicindex + 1 +".mp3";
    img.src = musicindex + 1 + "s.jfif";
    // alert("playing:" + music.src);
    song.textContent=musicplay[musicindex];
    artist.textContent=musicartist[musicindex];
});
music.addEventListener("ended",fxt);
bar.addEventListener("click",(event)=>{
    const { duration } = music;
    let moveprogress= ( event.offsetX/event.srcElement.clientWidth ) * duration ;
    music.currentTime =moveprogress; 
});