function calculo() {
  //guarda la operacion en una variable
  var operacion = document.getElementById('pantalla').innerHTML;
  //separa el string de la operacion por el elemento suma
  operacion=operacion.split('+');
  //inicializa dos variables para mas tarde
  var multi = 1;
  var resultado;
  //si el array creado es de 3 elementos, son dos sumas
  if (operacion.length==3) {
    resultado=0;
    for (var i = 0; i < operacion.length; i++) {
      //pasamos los numeros a int
      var numero=parseInt(operacion[i]);
      //hacemos las sumas recorriendo el array
      resultado=resultado+numero;
    }
    //si el array es de dos elementos, es una suma y una multiplicación
  }else if (operacion.length==2) {
    //separamos los dos elementos del array por el elemento multiplicación
    var ope1=operacion[0].split("*");
    var ope2=operacion[1].split("*");
    //el elemento que se separe es el que contiene la multiplicacion
    if (ope1.length==2){
      //pasamos los numeros a int y hacemos la multiplicacion
      multi=parseInt(ope1[0])*parseInt(ope1[1]);
      //al resultado de la multiplicacion le añadimos la suma
      resultado=multi+parseInt(ope2);
    }else if (ope2.length==2) {
      //pasamos los numeros a int y hacemos la multiplicacion
      multi=parseInt(ope2[0])*parseInt(ope2[1]);
      //al resultado de la multiplicacion le añadimos la suma
      resultado=multi+parseInt(ope1);
    }
    //si la largaria del array es 1, se trata de dos multiplicaciones
  }else if (operacion.length==1) {
    //inicializamos el resultado a 1 para que no de error
    resultado=1;
    //volvemos a unir el array en un string y lo separamos por el elemento multiplicacion
    operacion=operacion.join("");
    operacion=operacion.split('*');
    for (var i = 0; i < operacion.length; i++) {
      //recorriendo el array creado, convertimos los numeros a int y los multiplicamos
      var numero=parseInt(operacion[i]);
      resultado=resultado*numero;
    }
  }
  //guardamos el resultado en contenido que es la variable que escribe en la pantalla
  contenido=resultado;
  //cambiamos los colores de la pantalla
  pantalla.style.backgroundColor='green';
  pantalla.style.color='white';
}
var contenido="";
//funcion para guardar las teclas pulsadas. le pasamos el elemento para saber qual se pulsa
function Pulsar(elemento) {
  //sacamos el id del elemento pulsado
  var id= elemento.id;
  //guardamos el elemento pulsado en una variable
  var elemento= document.getElementById(id);
  //cambiamos los colores de la tecla pulsada
  elemento.style.backgroundColor='darkblue';
  elemento.style.color='white';
  //guardamos el elemento pantalla en una variable
  var pantalla = document.getElementById('pantalla');
  //si se pulsa al = llamamos a la funcion de realizar el calculo
  if (id=="=") {
    calculo();
    //si se pulsa la C se borra todo lo que hay en pantalla
  }else if (id=="C") {
    contenido="";
    //si se pulsa CE borramos el ultimo elemento
  }else if (id=="CE") {
    //separamos el string en un array
    contenido=contenido.split("");
    //calculamos cual es su ultimo elemento
    var ultimo=contenido.length-1;
    //quitamos el ultimo elemento. (Funcion buscada por internet )
    eliminados=contenido.splice(ultimo, 1);
    //volvemos a unir el array en un string sin el ultimo elemento
    contenido=contenido.join("");
  }else {
    //si es una tecla numerica, simplemente la uardamos en contenido
    contenido=contenido+id;
  }
  //escribimos el contenido en la pantalla 
    pantalla.innerHTML=contenido;
}
