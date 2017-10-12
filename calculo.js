function calculo() {
  var operacion = document.getElementById('pantalla').innerHTML;
  console.log(operacion);
  operacion=operacion.split('+');

  var multi = 1;
  var resultado;

  if (operacion.length==3) {
    resultado=0;
    for (var i = 0; i < operacion.length; i++) {
      var numero=parseInt(operacion[i]);
      resultado=resultado+numero;
    }
  }else if (operacion.length==2) {
    var ope1=operacion[0].split("*");
    var ope2=operacion[1].split("*");
    if (ope1.length==2){
      multi=parseInt(ope1[0])*parseInt(ope1[1]);
      resultado=multi+parseInt(ope2);
    }else if (ope2.length==2) {
      multi=parseInt(ope2[0])*parseInt(ope2[1]);
      resultado=multi+parseInt(ope1);
    }
  }else if (operacion.length==1) {
    resultado=1;
    operacion=operacion.join("");
    operacion=operacion.split('*');
    for (var i = 0; i < operacion.length; i++) {
      var numero=parseInt(operacion[i]);
      resultado=resultado*numero;
    }
  }
  console.log(resultado);
  contenido=resultado;
  pantalla.style.backgroundColor='green';
  pantalla.style.color='white';
}
var contenido="";
function Pulsar(elemento) {
  var id= elemento.id;
  var elemento= document.getElementById(id);
  elemento.style.backgroundColor='darkblue';
  elemento.style.color='white';
  var pantalla = document.getElementById('pantalla');
  if (id=="=") {
    calculo();
  }else if (id=="C") {
    contenido="";
  }else if (id=="CE") {
    contenido=contenido.split("");
    var ultimo=contenido.length-1;
    eliminados=contenido.splice(ultimo, 1);
    contenido=contenido.join("");
  }else {
    contenido=contenido+id;
  }
    pantalla.innerHTML=contenido;
}
