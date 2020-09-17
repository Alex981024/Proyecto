function obtenerDatos(){
    var num = document.getElementById("numero").value;
    var num_c = document.getElementById("numero_c").value;
    var ca = document.getElementById("pwd").value;
    if(num==num_c && ca==4525){
     var r = [num, num_c, ca];
     return r;
    }else{
	return"Error numero incorrecto";
    }
    
}

var input = document.getElementsByTagName("INPUT");

for (i=0; i<input.length; i++) {
 input[i].addEventListener("change",  function(){
  resultados = obtenerDatos();
  console.log(resultados);
 });
};
