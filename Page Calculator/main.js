const contenedor = document.getElementById("botones");
const btn = contenedor.querySelector("#Calcular");
const input_a = document.getElementById("a");
const input_b = document.getElementById("b");
const selecter = document.getElementById("select");
const display = document.getElementById("pantalla");


const orders = {
    sumar: (x, y) => (x + y),
    restar: (x, y) => (x - y),
    multiplicar: (x, y) => (x * y),
    dividir: function(x, y){
        if (y === 0)
            return 0;
        return x/y
    }
}



btn.addEventListener("click", function (event){
    display.textContent = orders[selecter.value](Number(input_a.value), Number(input_b.value));
})


Fibracci = function(Entry){

    return Fibracci(Entry -= 4)
}