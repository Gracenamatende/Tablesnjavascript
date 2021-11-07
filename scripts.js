// console.log("What what what");
// let ages=12;
// if(ages<18){
//     console.log("You can't buy alcohol");

// }
// else{
//     console.log("Here is your alcohol");
// }
// }
function checkage(){
    let ages=document.getElementById("Age").value
    if(ages<18){
        document.getElementById("outputage").innerHTML="You can't buy alcohol.";
    }
    else if(ages<0){
        document.getElementById("outputage").innerHTML="This is an invalid age";
    }
    else{
        document.getElementById("outputage").innerHTML="Have your beer!";
    }
}


function Delete(){
    document.getElementById("Age").value="";
}