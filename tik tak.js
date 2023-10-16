const start = document.querySelector(".start .button");
const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    let block=document.querySelectorAll(".block")
    for(let elem of block){
        elem.textContent = "";
    }
    start.classList.remove("hide")
    
});
var stop = false;
for (let i=0; i<9; i++){
    document.getElementById("game").innerHTML+='<div class="block"></div>'
}

var had = 0;


start.addEventListener("click",startGames)

function startGames(){
    start.classList.add("hide") 
    document.getElementById("game").onclick = function (event) {
   if(event.target.className == 'block'){
    if( had % 2 ==0){
        event.target.style.color="white";
        event.target.innerHTML = 'X';
    }else{
        event.target.innerHTML = "O";
    }
    had ++;
    checkWinner();
   }
  }
}


function checkWinner(){
   
    
    
    var allblock =document.getElementsByClassName('block');
    if(allblock[0].innerHTML == "X" && allblock[1].innerHTML=="X" && allblock[2].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[3].innerHTML == "X" && allblock[4].innerHTML=="X" && allblock[5].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[6].innerHTML == "X" && allblock[7].innerHTML=="X" && allblock[8].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[0].innerHTML == "X" && allblock[3].innerHTML=="X" && allblock[6].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[1].innerHTML == "X" && allblock[4].innerHTML=="X" && allblock[7].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[2].innerHTML == "X" && allblock[5].innerHTML=="X" && allblock[8].innerHTML=="X" ){alert("X խաղացողը հաղթեց")} 
    if(allblock[0].innerHTML == "X" && allblock[4].innerHTML=="X" && allblock[8].innerHTML=="X" ){alert("X խաղացողը հաղթեց")}
    if(allblock[6].innerHTML == "X" && allblock[4].innerHTML=="X" && allblock[2].innerHTML=="X" ){alert("X խաղացողը հաղթեց")}
   

    if(allblock[0].innerHTML == "O" && allblock[1].innerHTML=="O" && allblock[2].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[3].innerHTML == "O" && allblock[4].innerHTML=="O" && allblock[5].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[6].innerHTML == "O" && allblock[7].innerHTML=="O" && allblock[8].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[0].innerHTML == "O" && allblock[3].innerHTML=="O" && allblock[6].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[1].innerHTML == "O" && allblock[4].innerHTML=="O" && allblock[7].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[2].innerHTML == "O" && allblock[5].innerHTML=="O" && allblock[8].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 
    if(allblock[0].innerHTML == "O" && allblock[4].innerHTML=="O" && allblock[8].innerHTML=="O" ){alert("O խաղացողը հաղթեց")}
    if(allblock[6].innerHTML == "O" && allblock[4].innerHTML=="O" && allblock[2].innerHTML=="O" ){alert("O խաղացողը հաղթեց")} 


    
}

