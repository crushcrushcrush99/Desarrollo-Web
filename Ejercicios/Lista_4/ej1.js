 var cuentaCorriente = {
    saldo: 2500,
    facturaActual: 2000,
    creditoDisponible: 570,
    comprobante/*extrato*/: {
        entrada:[
            {
                data:"20/03/1999",
                valor: 2500
            },
            {
    
                data:"19/09/2010",
                valor: 3000
            
            }
            
        ],
            salida: [
            {
                data: "18/03/2020",
                valor: 1000,
                descripcion: 'Restaurante'
            }
        ]

    },
    exibirComprobante: true
 }

 if(cuentaCorriente.saldo > cuentaCorriente.facturaActual){
    console.log('Usted posee saldo suficiente para pagar la factura actual.')
 } else {
    console.log('Usted no posee saldo suficiente para pagar la factura, intente hacer la operación con credito para conseguir pagar. ')
 }

 if(cuentaCorriente.exibirComprobante == true){
    //cuentaCorriente.comprobante.entrada
    //var entradas = cuentaCorriente.comprobante.entrada;
    for(var i = 0; i < cuentaCorriente.comprobante.entrada.length; i++){
        var data = cuentaCorriente.comprobante.entrada[i].data;
        var valor = cuentaCorriente.comprobante.entrada[i].valor;
        console.log("Tipo E Data: " + data + ", valor: " + valor)
    }
    //var entradas = cuentaCorriente.comprobante.salida;
    for(var i = 0; i < cuentaCorriente.comprobante.salida.length; i++){
        var data = cuentaCorriente.comprobante.salida[i].data;
        var valor = cuentaCorriente.comprobante.salida[i].valor;
        var descripcion = cuentaCorriente.comprobante.salida[i].descripcion;
        console.log("Tipo S Data: " + data + ", valor: " + valor + ", descripcion: " + descripcion)
    }
 }

 //console.log(cuentaCorriente)