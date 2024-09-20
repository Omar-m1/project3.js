
var counter = 0 ;
function incData(){
    counter++;
    document.getElementById("demo").innerHTML =counter;
}


function decData(){
    counter--;
    document.getElementById("demo").innerHTML =counter;
}


// var x = prompt("Whats the Price?");


// if(x>20){
//     alert("expensive");
// }else if (x==20){
//     alert("cool");
// }else if (x<20){
//     alert("cheap");
// }else{
//     alert("Not A Number");
// }


function convert(){
    var myinput =document.getElementById("myinput").value;
    var result = document.getElementById("result");

    if(isNaN(myinput)){
        result.innerHTML ="enter number not text";
        return false;
    }

    if(isNaN(myinput)){
        result.innerHTML ="enter postive number";
        return false;
    }

    if(isNaN(myinput)){
        result.innerHTML ="enter number rather than zero";
        return false;
    }

    if(isNaN(myinput)){
        result.innerHTML ="enter number not text";
        return false;
    }

    result.innerHTML =myinput*48 + "Egypion Pound";
    return false;
    
}






