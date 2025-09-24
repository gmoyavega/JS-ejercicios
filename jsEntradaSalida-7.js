function sumar(){
    let numero1 = document.getElementById('numeroUno').value 
    let numero2 = document.getElementById('numeroDos').value 
    let resultado = parseInt(numero1) + parseInt(numero2)
    alert('la suma es ' + resultado)
}

function restar(){
    let numero1 = document.getElementById('numeroUno').value 
    let numero2 = document.getElementById('numeroDos').value 
    let resultado = parseInt(numero1) - parseInt(numero2)
    alert('la resta es ' + resultado)
}

function multiplicar(){
    let numero1 = document.getElementById('numeroUno').value 
    let numero2 = document.getElementById('numeroDos').value 
    let resultado = parseInt(numero1) * parseInt(numero2)
    alert('la multiplicacion es ' + resultado)
}

function dividir(){
    let numero1 = document.getElementById('numeroUno').value 
    let numero2 = document.getElementById('numeroDos').value 
    let resultado = parseInt(numero1) / parseInt(numero2)
    alert('la division es ' + resultado)
}