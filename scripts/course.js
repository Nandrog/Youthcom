const slide = document.querySelectorAll('.slides div');
let slideIndex=0;
let intervalId=null;

document.addEventListener('DOMContentLoaded',initialize);

function initialize(){
  if(slide.length>0){
slide[slideIndex].classList.add('displaySlide');
intervalId=setInterval(next,10000);
  }
}

function slideShow(index){
  if(index>=slide.length){
  slideIndex=0;
  }else if(index<0){
  slideIndex=slide.length-1;
  }
  slide.forEach(slide=>{
    slide.classList.remove('displaySlide');
  });
  slide[slideIndex].classList.add('displaySlide');
}

function previous(){
slideIndex--;
slideShow(slideIndex);
}

function next(){
  slideIndex++;
  slideShow(slideIndex)
}
function calculateTotal(){
  const inputElement=document.querySelector('.js-input');
  const paraElement=document.querySelector('.js-results');

  let cost=Number(inputElement.value);
  if(cost>=400000 && cost<1000000){
  cost+=(10/100)*cost;
  }else if(cost>=1000000 && cost<4000000){
  cost+=(15/100)*cost;
  }else if(cost>=4000000 && cost<10000000) {
  cost+=(25/100)*cost;
  } else{
    cost='not available';
  }
  paraElement.innerHTML=`Shs.${cost}`;
}