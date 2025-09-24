function MostrarAumento(){
    let importe = document.getElementById('importe').value 
    let descuento = parseInt(importe) - (importe * 0.25)
    document.getElementById('resultado').value = descuento
}