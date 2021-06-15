# Tipo de Triângulo -  Isósceles, Equilátero, Escaleno.

```
function funcao(){

  var v1 = parseInt(document.getElementById("v1").value);
  var v2 = parseInt(document.getElementById("v2").value);
  var v3 = parseInt(document.getElementById("v3").value);

if(v1 + v2 && v1 + v3 >= v2 && v2 + v3 >= v1){
    if(v1 == v2 && v2 == v3 && v3 == v1){
      navigator.notification.alert("O triângulo é equilátero!", null, "Tipo:", "Ok");
    }else if(v1 == v2 || v2 == v3 || v3 == v1){
      navigator.notification.alert("O triângulo é isósceles!", null, "Tipo:", "Ok");
    }else if(v1 != v2 && v2 != v3 && v3 != v1){
      navigator.notification.alert("O triângulo é escaleno", null, "Tipo:", "Ok");
    }
  }else{
    navigator.notification.alert("Os valores digitados são inválidos!", null, "Aviso!", "Ok");
  }
}
```