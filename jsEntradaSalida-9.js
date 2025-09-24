function MostrarAumento(){
    let sueldo = document.getElementById('sueldo').value 
    let resultado = parseInt(sueldo) + (sueldo * 0,100 )
    document.getElementById('resultado').value=resultado
}