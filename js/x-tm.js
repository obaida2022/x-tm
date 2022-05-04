let inputEl = document.querySelector("#input-todo");
let addTodoButn = document.querySelector("#add-todo");
let divEl = document.querySelector("div");
let error =  document.getElementById("err")
let shams = [];

addTodoButn.addEventListener("click", addTodo);
function addTodo() {
  shams.push(inputEl.value);
  JSON.stringify(shams)
  divEl.innerHTML = "";
  for (let i = 0; i < shams.length; i++) {
    divEl.innerHTML += `<div> ${shams[i]} </div>`;
}



let y = inputEl.value
if (y != ""){

    error.innerHTML = "";
}

else{
    error.innerHTML = "You Fhould Fill Data";
}

inputEl.value = "";
}
console.log(shams)