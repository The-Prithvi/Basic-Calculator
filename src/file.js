// let b9 = document.getElementById("b9").innerHTML
// let b8 = document.getElementById("b8").innerHTML
// let b7 = document.getElementById("b7").innerHTML
// let b6 = document.getElementById("b6").innerHTML
// let b5 = document.getElementById("b5").innerHTML
// let b4 = document.getElementById("b4").innerHTML
// let b3 = document.getElementById("b3").innerHTML
// let b2 = document.getElementById("b2").innerHTML
// let b1 = document.getElementById("b1").innerHTML
// let b0 = document.getElementById("b0").innerHTML
// let bpls = document.getElementById("b+").innerHTML
// let bmns = document.getElementById("b-").innerHTML
// let beq = document.getElementById("b=").innerHTML
// let bmul = document.getElementById("bx").innerHTML
// let bdiv = document.getElementById("b/").innerHTML
// let bc = document.getElementById("bc").innerHTML

let scr = document.getElementById("screen")
let val = "";
let arr1 = [];
let str = "";
let ques;

function act(control){
    console.log(document.getElementById(control.id).innerText);
    val += document.getElementById(control.id).innerText 
    scr.innerHTML = val
    arr1.push(scr.innerHTML)
    let len = arr1.length
    ques = arr1[len-1]
    console.log("ques=",ques);
    str = ques;
}
function sol(){
    let ans = eval(ques);
    scr.innerHTML = ans;
    console.log(ans)
}