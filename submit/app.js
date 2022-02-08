// app.js submit directory event-werkbook
// **UPDATE**
// use the JS DOM manipulation to add a new input to your form with its own id attribute
// upon clicking the submit button have the from data show up on the page (new element create and add to DOM)
// make sure this process can be repeated many times

// let i = 0;
// const newInput = () => {
//     const button = document.querySelector(".addtribute");
//     button.addEventListener("click", addInput());
//     addInput = () =>{
//         const nextInput = document.createElement('input');
//         nextInput.id = ("newField" + i);
//         i++;
//     }
// }

// const butn = document.getElementById("addtribute");
// const newInput = () => 
// {addInput = document.createElement('input');
//  document.body.appendChild(addInput);
//  butn.addEventListener("click", addInput);



let i = 0;
const button = document.getElementById('btn');
button.addEventListener("click" , addInput = () =>
 {var newInput = document.createElement('input')
 document.body.appendChild(newInput);})

