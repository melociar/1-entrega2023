// -funcion 1 = vamos a ver los productos que hay en stock 
// -funcion 2 = seleccion de uno de esos productos 
// -funcion 3 = vemos los precios 
// -funcion 4, 5 y 6 = medio de pago, efectivo (descuento) y tarjeta (recargo)
// -funcion 7 = registramos datos del usuario




alert ('Bienvenida/o al mundo del skin')
alert (' La idea de esta interaccion es seleccionar un producto de los 4 que ofrecemos, y luego seleccionar el medio de pago (efectivo o tarjeta) y en base a eso , hay descuento o regargo')
verListaProductos()


//funcion 1
function verListaProductos () {
let solicitarProductos = prompt ( "desea ver la lista de productos y sus precios ? s/n")

if ( solicitarProductos == 's') {
    lista ()
 
} else{
    console.log ('salio del if ')
}
}

//funcion 2
function lista (){
    alert ("Productos disponibles: crema1, crema2, crema y crema4")

    let nombreProducto = prompt (" seleccione el producto que desea (crema1)" )

    if (nombreProducto == 'crema1' ||  nombreProducto== 'crema2' ||  nombreProducto == 'crema3'  ||       nombreProducto == 'crema4'){
       precio(nombreProducto)

    }else{
        alert("dato incorrecto, volver a intentarlo")
    }
}

//funcion 3
function precio (nombreProducto){
    let crema1 = 300;
    let crema2 = 400;
    let crema3 = 500;
    let crema4 = 600;


    if(nombreProducto == 'crema1'){
        alert("El valor de la crema1 es: "+crema1)
        medioDePago(crema1)
    } else if (nombreProducto == 'crema2') {
        alert ("El valor de la crema2 es: "+crema2)
        medioDePago(crema2)
    }else if (nombreProducto == 'crema3'){
        alert ("El valor de la crema 3 es: "+crema3)
        medioDePago(crema3)
    }else if ( nombreProducto == 'crema4'){
        alert ("El valor de la crema4 es: "+crema4)
        medioDePago(crema4)
    }else{
        alert("no se encuntra valor para el dato ingresado")
    }
} medioDePago()

//funcion 4
function medioDePago (nombreProducto) {
    let medio = prompt ("como desea abonar en efectivo o con tarjeta? con efectivo obtine un 10% off y con tarjeta un 15% de recargo, presione e/t")

  if( medio == "e"){
    alert ("Medio de pago es efectivo, usted tiene un 10 % off")
    efectivo (nombreProducto)
}else{ 

    alert ("Medio de pago seleccionado fue tarjeta, tiene un 15% de recargo ")
    tarjeta (nombreProducto)
}
}

//funcion 5
function efectivo (valor) {
    let descuento = valor - valor*0.10
    alert ("el nuevo valor es: "+descuento)
    alert ("Producto reservado por 24hs, te esperamos para retirlarlo")
}

//funcion 6
function tarjeta (valor) {
    let recargo = valor + valor*0.15
    alert ("valor con recargo: "+recargo)
    let cuotas = prompt ("Usted desea abonar en 3,6 o 12 cuotas?")

    if (cuotas == 3){
        recargo = recargo/3
        alert ("Usted por cuota va a abonar: "+recargo)
        registrandoTarjeta()
    }else if ( cuotas == 6){
        recargo = recargo/6
        alert ("usted por cuota va a abonar: "+recargo)
        registrandoTarjeta()
     }else {
        recargo = recargo/12
        alert ("Usted por cuota va a abonar: "+recargo)
        registrandoTarjeta()
     }
        
    }

//funcion 7 
function  registrandoTarjeta(){
    let nombreUsuario = prompt ("Ingrese su nombre y apellido")
    let numeroTarjeta =parseInt(prompt ("Ingrese los numeros de la tarjeta"))
    alert ("Datos ingresados: "+nombreUsuario )
    alert ("Datos tarjeta: "+numeroTarjeta )


    do{
        alert ("Compra confirmada")
        break
        
    }while (registrandoTarjeta)
 }