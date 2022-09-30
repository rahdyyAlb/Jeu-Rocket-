'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let btnStart;
let btnCancel;
let btnReset;
let rocket;
let compteur = 11;
let timer;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function onClickFiringButton()
{
    timer = setInterval(countDown,1000);
    
    btnStart.removeEventListener("click",onClickFiringButton);
    btnStart.classList.add("disabled");
    
    btnCancel.addEventListener("click",onClickCancelButton);
    btnCancel.classList.remove("disabled");
    
}

function countDown()
{
    compteur--;
    
    let span = document.querySelector("#billboard span");
    span.textContent = compteur;
    
    // changer l'image 
    rocket.src = "images/rocket2.gif";
    
    if(compteur <= 0)
    {
        clearInterval(timer);
        rocket.src = "images/rocket3.gif";
        rocket.classList.add('tookOff');
        
        btnCancel.removeEventListener("click",onClickCancelButton);
        btnCancel.classList.add("disabled");
    }
}

function onClickCancelButton()
{
    clearInterval(timer);
    btnStart.addEventListener("click",onClickFiringButton);
    btnStart.classList.remove("disabled");
    btnCancel.removeEventListener("click",onClickCancelButton);
    btnCancel.classList.add("disabled");
}

function onClickResetButton()
{
    compteur = 10;
    let span = document.querySelector("#billboard span");
    span.textContent = compteur;
    
    rocket.src = "images/rocket1.png";
    rocket.classList.remove('tookOff');
    
    btnStart.addEventListener("click",onClickFiringButton);
    btnStart.classList.remove("disabled");
    
    btnCancel.addEventListener("click",onClickCancelButton);
    btnCancel.classList.remove("disabled");
    
}

function stars()
{
  let divElement;
  let randomStar;
  // creation d'une div 
  divElement = document.createElement("div");
  
  // ajouter la class star sur la div 
  divElement.classList.add("star");
  
  // On tire au hasard un index pour  la taille des étoiles 
  randomStar = getRandomInteger(1,3);
  
  switch(randomStar)
  {
    case 1 :
        divElement.classList.add("tiny");
        break;
    case 2 :
        divElement.classList.add("normal");
        break;
    case 3 :
        divElement.classList.add("big");
        break;

  }
  
  // On tire au hasard la position de l'étoile entre 0 et 100%
  divElement.style.left = getRandomInteger(0,100)+"%";
  divElement.style.top = getRandomInteger(0,100)+"%";
  
  // inérer l'element div dans le body du document html
  document.body.appendChild(divElement);
  
}

function appelStars()
{
    for(let i=1;i<=10;i++)
    {
        stars();
    }
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener("DOMContentLoaded", function(){
    
    rocket = document.getElementById('rocket');

    btnStart = document.getElementById("firing-button");
    btnCancel = document.getElementById("cancel-button")
    btnReset = document.getElementById("reset-button");
    
    btnStart.addEventListener("click",onClickFiringButton);
    btnCancel.addEventListener("click",onClickCancelButton);
    btnReset.addEventListener("click",onClickResetButton);
    
    appelStars();
    setInterval(appelStars,5000);
    
});








