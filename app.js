'use strict';

let leftImageElement=document.getElementById('left-pic');
let middleImageElement=document.getElementById('middle-pic');
let rightImageElement=document.getElementById('right-pic');
let sectionElement=document.getElementById('imgSection');

let maxAttepms=10;
let counter=0;
let leftImageIndex;
let rightImageIndex;
let middleImageIndex;


function BusMall(name,src)
{
  this.name=name;
  this.src=src;
  this.votes=0;
  this.shown=0;
  BusMall.all.push(this);


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


// from w3 schools
function getRandomIndex() {

  return Math.floor(Math.random() * BusMall.all.length);
}
// getRandomIndex();
// console.log(BusMall.all);



function renderThreeElements() {

  leftImageIndex=getRandomIndex();
  rightImageIndex=getRandomIndex();
  middleImageIndex=getRandomIndex();

  while (leftImageIndex===middleImageIndex || leftImageIndex===rightImageIndex || rightImageIndex===middleImageIndex) {
    middleImageIndex=getRandomIndex();

  }
  leftImageElement.src=BusMall.all[leftImageIndex].src;
  rightImageElement.src=BusMall.all[rightImageIndex].src;
  middleImageElement.src=BusMall.all[middleImageIndex].src;
}

renderThreeElements();

sectionElement.addEventListener('click',handleUserClick);


function handleUserClick(event) {

  console.log(event.target.id);

  counter++;
  if (counter<maxAttepms) {


    if (event.target.id==='left-image') {

      BusMall.all[leftImageIndex].votes++;
      console.log(BusMall.all[leftImageIndex]);

    }
    else {
      BusMall.all[rightImageIndex].votes++;
      console.log(BusMall.all[rightImageIndex]);
    }

    else{
        BusMall.all[middleImageIndex].votes++;
      console.log(BusMall.all[middleImageIndex]);
    }

    renderThreeElements();

  }else{

    let list= document.getElementById('results-list');

    for (let i = 0; i < BusMall.all.length; i++) {
      // const element = goats[i];
      let listItem=document.createElement('li');

      list.appendChild(listItem);

      listItem.textContent=`${ BusMall.all[i].name} has ${ BusMall.all[i].votes} votes`;

    }

  }
}





