'use strict';
let imagesDiv = document.getElementById('images-div');
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');
let buttonElement = document.getElementById('button');



let maxAttempts = 25;
let userAttemptsCounter = 1;


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
let namesArr = [];

let votesArr = [];

let shownArr = [];
let picIndex=[];
// let picIndex=[];




function BusMall(name, src) {
  this.name = name;
  this.source = src;
  this.votes = 0;
  BusMall.all.push(this);
  this.shown = 0;
  namesArr.push(this.name);



}


BusMall.all = [];
new BusMall('bag', 'pic/bag.jpg');
new BusMall('banana', 'pic/banana.jpg');
new BusMall('bathroom', 'pic/bathroom.jpg');
new BusMall('boots', 'pic/boots.jpg');
new BusMall('breakfast', 'pic/breakfast.jpg');
new BusMall('bubblegum', 'pic/bubblegum.jpg');
new BusMall('chair', 'pic/chair.jpg');
new BusMall('cthulhu', 'pic/cthulhu.jpg');
new BusMall('dog-duck', 'pic/dog-duck.jpg');
new BusMall('dragon', 'pic/dragon.jpg');
new BusMall('pen', 'pic/pen.jpg');
new BusMall('pet-sweep', 'pic/pet-sweep.jpg');
new BusMall('scissors', 'pic/scissors.jpg');
new BusMall('shark', 'pic/shark.jpg');
new BusMall('sweep', 'pic/sweep.png');
new BusMall('tauntaun', 'pic/tauntaun.jpg');
new BusMall('unicorn', 'pic/unicorn.jpg');
new BusMall('water-can', 'pic/water-can.jpg');
new BusMall('wine-glass', 'pic/wine-glass.jpg');



function getRandomIndex() {
  // 0=>6
  return Math.floor(Math.random() * BusMall.all.length);
}


function renderTwoImages() {

  leftImageIndex = getRandomIndex();
  middleImageIndex = getRandomIndex();
  rightImageIndex = getRandomIndex();



  while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex || picIndex.includes(leftImageIndex) ||picIndex.includes(rightImageIndex) || picIndex.includes(middleImageIndex)) {

    leftImageIndex = getRandomIndex();
    middleImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

  }
  picIndex = [leftImageIndex, middleImageIndex, rightImageIndex];
  console.log(picIndex);





  leftImageElement.src = BusMall.all[leftImageIndex].source;
  BusMall.all[leftImageIndex].shown++;
  middleImageElement.src = BusMall.all[middleImageIndex].source;
  BusMall.all[middleImageIndex].shown++;
  rightImageElement.src = BusMall.all[rightImageIndex].source;
  BusMall.all[rightImageIndex].shown++;



}


renderTwoImages();


imagesDiv.addEventListener('click', handleUserClick);




function handleUserClick(event) {

  // console.log(event.target.id);




  if (userAttemptsCounter < maxAttempts) {


    if (event.target.id === 'left-image') {

      BusMall.all[leftImageIndex].votes++;

    } else if (event.target.id === 'right-image') {
      BusMall.all[rightImageIndex].votes++;
    } else if (event.target.id === 'middle-image') {
      BusMall.all[middleImageIndex].votes++;
    } else {
      alert('please click on the images');
      userAttemptsCounter--;
    }

    renderTwoImages();

  } else {
    let buttonElement = document.getElementById('button');
    buttonElement.hidden = false;
    buttonElement.addEventListener('click', showingList);


    for (let i = 0; i < BusMall.all.length; i++) {
      votesArr.push(BusMall.all[i].votes);
      shownArr.push(BusMall.all[i].shown);


    }



    // console.log(votesArr);
    imagesDiv.removeEventListener('click', handleUserClick);
    showChart();



  }

  userAttemptsCounter++;

}


function showingList() {

  let list = document.getElementById('results-list');

  for (let i = 0; i < BusMall.all.length; i++) {
    let listItem = document.createElement('li');

    list.appendChild(listItem);

    listItem.textContent = `${BusMall.all[i].name} has ${BusMall.all[i].votes} votes`;


  }
  buttonElement.removeEventListener('click', showingList);

}


function showChart() {
  const data = {
    labels: namesArr,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: 'blue',
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shownArr,
      backgroundColor: 'rgb(232,167,0)',
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  let myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}



