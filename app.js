let hours = document.getElementById('hour')
let min = document.getElementById('minutes')
let sec = document.getElementById('seconds')
let mili = document.getElementById('milli')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')
let Mili= 0
let Sec = 0
let Min = 0
let hrs = 0
let clear;
function starter(){
    Mili++
    if(Mili > 60){
        Sec++
        Mili=0
    }
    if(Sec > 60){
        Min++
        Sec=0
    } 
    if(Min > 60){
        hrs++
        Min=0
    } 
    
    mili.innerText= Mili
    sec.innerText = Sec
    min.innerText = Min
    hrs.innerText = hours
}
function colorchange(value){
    if(value.style="background-color: #273c75"){
        value.style="background-color: #353b48"
    }
}

function oldcolor(variable){

    if(variable.style="background-color: #353b48"){
        variable.style="background-color: #273c75" 
        
    }
}

function on (){
    clear = setInterval(starter,100)
    start.setAttribute('disabled','disabled')
    colorchange(start)
    oldcolor(pause)
    oldcolor(reset)
   

}

function off (){
    clearInterval(clear)
    start.removeAttribute('disabled','disabled')
    colorchange(pause)
    oldcolor(start)
    oldcolor(reset)
    
}
function clears (){
    clearInterval(clear)
    start.removeAttribute('disabled','disabled')
    colorchange(reset)
   
    oldcolor(start)
    oldcolor(pause)
     Mili= 0
     Sec = 0
     Min = 0
     hrs = 0

     mili.innerText= 0
     sec.innerText = 0
     min.innerText = 0
     hours.innerText = 0
     
}
