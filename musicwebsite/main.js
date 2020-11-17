let furbutton = document.getElementById('furElise');
let endbutton = document.getElementById('inTheEnd');
let summerbutton = document.getElementById('summerDay');
const body = document.querySelector('body');
const mainH1 = document.getElementById('mainH1');

let songs = ['/Users/gregnoble/Documents/musicwebsite/songs/In the End.mp3', '/Users/gregnoble/Documents/musicwebsite/songs/In the End.mp3', '/Users/gregnoble/Documents/musicwebsite/songs/summer_day.m4r'];

furElise = new Audio('/Users/gregnoble/Documents/musicwebsite/songs/fur_elise.m4r');
inTheEnd = new Audio('/Users/gregnoble/Documents/musicwebsite/songs/In the End.mp3');
summerDay = new Audio('/Users/gregnoble/Documents/musicwebsite/songs/summer_day.m4r');

furbutton.addEventListener('click', playFurElise);
endbutton.addEventListener('click', playInTheEnd);
summerbutton.addEventListener('click', playSummerDay);



function playFurElise() {
  let newSong = parseInt(Math.random() * songs.length);
  body.style.backgroundImage = "url('/Users/gregnoble/Documents/musicwebsite/images/furelise.jpg')";
  mainH1.style.color = 'white';
  furElise.play();
  inTheEnd.pause();
  summerDay.pause();
  body.style.backgroundSize = "1900px 1000px";
  body.style.backgroundRepeat = "no-repeat";
  furElise.style.maxWidth = "100%";
}

function playInTheEnd() {
  let newSong = parseInt(Math.random() * songs.length);
  body.style.backgroundImage = "url('/Users/gregnoble/Documents/musicwebsite/images/intheend.jpg')";
  inTheEnd.play();
  furElise.pause();
  summerDay.pause();
  mainH1.style.color = 'white';
  body.style.backgroundSize = "2300px 2000px";
  body.style.backgroundRepeat = "no-repeat";
}

function playSummerDay() {
  let newSong = parseInt(Math.random() * songs.length);
  body.style.backgroundImage = "url('/Users/gregnoble/Documents/musicwebsite/images/summerDay.jpg')";
  summerDay.play();
  furElise.pause();
    inTheEnd.pause();
    mainH1.style.color = '#3C403D';
    body.style.backgroundSize = "2300px 2000px";
    body.style.backgroundRepeat = "no-repeat";
}
