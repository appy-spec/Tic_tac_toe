
console.log("hi");

let turn="X";
var gameOver = "False";

const checkTurn =()=>{

    if(turn==="X"){
        return '0';
    }
    else{
        return 'X';
    }

}

function winCheck(){

    let boxtext= document.querySelectorAll(".boxtext");
    let win = [

        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [2,4,6],
        
    ]
    win.forEach(e=>{

        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText && (boxtext[e[0]].innerText!=='' ))){

           gameOver="True";
           turn=checkTurn()
           document.querySelector(".info").innerText= turn + " Winn!! ";
           document.querySelector(".gift").setAttribute("src","giphy.gif");
        }

    })

}

let box = document.querySelectorAll(".box");
Array.from(box).forEach(element =>{
   
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener("click", () =>{

        if(boxtext.innerText===''){

            boxtext.innerText=turn;
            turn=checkTurn()
            winCheck()
            if(gameOver==="False"){
                document.querySelector(".info").innerText=" Turn for "+ turn;

            }
        }        
    })
})

document.querySelector(".reset").addEventListener("click", ()=>{

    let boxtext= document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e=>{

      e.innerText='';
     
    })
    turn = "X";
    document.querySelector(".info").innerText=" Turn for "+ turn;
    gameOver = "False";
    document.querySelector(".gift").setAttribute("src"," ");


})
