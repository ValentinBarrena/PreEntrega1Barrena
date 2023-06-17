// Calculador de pago en cuotas sobre un monto determinado y calcular segun eleccion del usuario el precio final con IVA (0.21)
function calculoCuotas() {
let precio = parseFloat(prompt('Ingrese el precio del producto'))
let cantidadCuotas = parseInt(prompt('Ingrese la cantidad de cuotas'))
let calcularIva = prompt('Ingrese la palabra "CALCULAR", en mayusculas, si desea calcular el precio final con IVA, de lo contrario ingrese "NO"') 
    if (isNaN(precio) || isNaN(cantidadCuotas))  {
        alert('Intente denuevo e ingrese un valor numerico o la palabra correspondiente segun el caso.')
        return
    } 

    let precioFinalSinIva = precio / cantidadCuotas

    if (calcularIva === 'CALCULAR'){
        precioConIva = precio * 1.21
        precioFinalConIva = precioConIva / cantidadCuotas
        alert('El precio final con IVA, por cuota, es de: $' + precioFinalConIva + ' en ' + cantidadCuotas + ' cuotas')
    } else{ 
        alert('El precio final sin IVA, por cuota, es de: $' + precioFinalSinIva + ' en ' + cantidadCuotas + ' cuotas')
    }
}

calculoCuotas()
