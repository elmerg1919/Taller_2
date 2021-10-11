
var BTN = document.getElementById("boton");


var gFinal = 0;

BTN.addEventListener('click',sumaGasto,true)

function sumaGasto(){
    
 
 
    var OPS1 = document.querySelector("#ensalada"),
    OPS2 = document.querySelector("#papaFrita"),
    OPS3 = document.querySelector("#p_grande"),
    OPS4 = document.querySelector("#p_mediano"),
    OPS5 = document.querySelector("#p_pequeña"),
    OPS6 = document.querySelector("#b_masgrande"),
    OPS7 = document.querySelector("#b_grande"),
    OPS8 = document.querySelector("#b_pequeña"),
    OPS9 = document.querySelector("#cafe"),
    OPS10 = document.querySelector("#postre");
    OPSC1 = document.querySelector("#combo1");
    OPSC2 = document.querySelector("#combo2");
    OPSC3 = document.querySelector("#combo3");

    var sumaChecks = 0;

    if(OPS1.checked) {
        sumaChecks += parseFloat(OPS1.value);
    }
    if(OPS2.checked) {
        sumaChecks += parseFloat(OPS2.value);
    }
    if(OPS3.checked) {
      sumaChecks += parseFloat(OPS3.value);
    }
    if(OPS4.checked) {
      sumaChecks += parseFloat(OPS4.value);
    }
    if(OPS5.checked) {
      sumaChecks += parseFloat(OPS5.value);
    }
    if(OPS6.checked) {
      sumaChecks += parseFloat(OPS6.value);
    }
    if(OPS7.checked) {
    sumaChecks += parseFloat(OPS7.value);
    }
    if(OPS8.checked) {
      sumaChecks += parseFloat(OPS6.value);
    }
    if(OPS9.checked) {
      sumaChecks += parseFloat(OPS9.value);
    }
    if(OPS10.checked) {
    sumaChecks += parseFloat(OPS10.value);
    }
    if(OPSC1.checked) {
      sumaChecks += parseFloat(OPSC1.value);
    }
    if(OPSC2.checked) {
      sumaChecks += parseFloat(OPSC2.value);
    }
    if(OPSC3.checked) {
    sumaChecks += parseFloat(OPSC3.value);
    }


  
  var gFinal = ( sumaChecks);
  if (sumaChecks==0)
  {
    alert("No a seleccionado ");
  }
  else(sumaChecks>=0.50)
  {
 document.querySelector("#gastoFinal").innerHTML = "$"+gFinal;
  }
 

   
}



document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault()
    document.getElementById('area').removeAttribute("disabled")
    var eleme = document.getElementById('area')
    eleme.focus()
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault()
    alert("Comentario guardado exitosamente :D")
   
    }
});




