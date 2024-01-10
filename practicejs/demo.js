// function checkingnumber(a)
// {
//     var a1,b1;
//     var a1= prompt("enter a1 ");
//     var b1= prompt("enter b1 ");
//     a1=Number(a1);
//     b1=Number(b1);

//     switch(a)
//     {
//         case "add":
//             console.log("the  addition of the number",a1,"and",b1,"is...",a1+b1);
//             break;
//         case "sub":
//             console.log("the  subraction of the number",a1,"and",b1,"is...",a1-b1);
//             break;
//         case "mul":
//             console.log("the  multipication of the number",a1,"and",b1,"is...",a1*b1);
//             break;
//         case "div":
//             console.log("the divition of the number",a1,"and",b1,"is...",a1/b1);
//             break;
//             default:
//             alert("case is not in switch");
       

// }
// }

// checkingnumber(prompt("enter operator"));


var box1=document.getElementById("num1")
var box2=document.getElementById("num2")
var output=document.getElementById("result")

function add(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var box1value = Number(box1.value);
    var box2value = Number(box2.value);
    var total = box1value + box2value;
    output.textContent = total;
}
