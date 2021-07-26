'use strict';
let imagesDiv=document.getElementById('images-div');
let leftImageElement= document.getElementById('left-image');
let middleImageElement= document.getElementById('middle-image');
let rightImageElement= document.getElementById('right-image');
let buttonElement=document.getElementById('button');



let maxAttempts=25;
let userAttemptsCounter=0;


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

function BusMall(name,src) {
  this.name= name;
  this.source= src;
  this.votes=0;
  BusMall.all.push(this);
  this.shown=0;

}

BusMall.all=[];

new BusMall('bag','pic/bag.jpg');
new BusMall('banana','pic/banana.jpg');
new BusMall('bathroom','pic/bathroom.jpg');
new BusMall('boots','pic/boots.jpg');
new BusMall('breakfast','pic/breakfast.jpg');
new BusMall('bubblegum','pic/bubblegum.jpg');
new BusMall('chair','pic/chair.jpg');
new BusMall('cthulhu','pic/cthulhu.jpg');
new BusMall('dog-duck','pic/dog-duck.jpg');
new BusMall('dragon','pic/dragon.jpg');
new BusMall('pen','pic/pen.jpg');
new BusMall('pet-sweep','pic/pet-sweep.jpg');
new BusMall('scissors','pic/scissors.jpg');
new BusMall('shark','pic/shark.jpg');
new BusMall('sweep','pic/sweep.png');
new BusMall('tauntaun','pic/tauntaun.jpg');
new BusMall('unicorn','pic/unicorn.jpg');
new BusMall('water-can','pic/water-can.jpg');
new BusMall('wine-glass','pic/wine-glass.jpg');



function getRandomIndex() {
  // 0=>6
  return Math.floor(Math.random() * BusMall.all.length);
}

console.log(getRandomIndex());


// render

function renderTwoImages() {

  leftImageIndex=getRandomIndex();
  middleImageIndex=getRandomIndex();
  rightImageIndex=getRandomIndex();

  while (leftImageIndex===rightImageIndex ||leftImageIndex===middleImageIndex||rightImageIndex===middleImageIndex) {
    rightImageIndex=getRandomIndex();
    leftImageIndex=getRandomIndex();
  }


  leftImageElement.src=BusMall.all[leftImageIndex].source;
  BusMall.all[leftImageIndex].shown++;
  middleImageElement.src=BusMall.all[middleImageIndex].source;
  BusMall.all[middleImageIndex].shown++;
  rightImageElement.src=BusMall.all[rightImageIndex].source;
  BusMall.all[rightImageIndex].shown++;



}

renderTwoImages();


imagesDiv.addEventListener('click',handleUserClick);




function handleUserClick(event) {

  console.log(event.target.id);




  if (userAttemptsCounter<maxAttempts) {


    if (event.target.id==='left-image') {

      BusMall.all[leftImageIndex].votes++;

    }else if(event.target.id==='right-image'){
      BusMall.all[rightImageIndex].votes++;
    }else if(event.target.id==='middle-image'){
      BusMall.all[middleImageIndex].votes++;
    }else{
      alert('please click on the images');
      userAttemptsCounter--;
    }

    renderTwoImages();

  }else{
    let buttonElement=document.getElementById('button');
    buttonElement.hidden=false;
    buttonElement.addEventListener('click',showingList);




    imagesDiv.removeEventListener('click',handleUserClick);

  }
  userAttemptsCounter++;

}


function showingList(){

  let list= document.getElementById('results-list');

  for (let i = 0; i < BusMall.all.length; i++) {
    let listItem=document.createElement('li');

    list.appendChild(listItem);

    listItem.textContent=`${BusMall.all[i].name} has ${BusMall.all[i].votes} votes`;

  }
  buttonElement.removeEventListener('click',showingList);
}


