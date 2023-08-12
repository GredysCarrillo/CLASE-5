let add = document.querySelector("#add");
let substract = document.querySelector("#substract");

add.addEventListener("click", function(){
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) + 1;

    if (result <= 10) {
        output.innerText = result;
    } else {
        alert("¡Ya llegó a fin!");
    }
});

substract.addEventListener("click", function(){
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) - 1;

    if (result >= 0) {
        output.innerText = result;
    } else {
        alert("¡Ya llegó a fin!");
    }
});