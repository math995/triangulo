function funcao(){

  var v1 = parseInt(document.getElementById("v1").value);
  var v2 = parseInt(document.getElementById("v2").value);
  var v3 = parseInt(document.getElementById("v3").value);
 
  // let img = document.createElement('img')
  // img.src = "https://doutormultas.com.br/wp-content/uploads/2017/11/cnh-provisoria-pode-dirigir-em-rodovias-conheca-as-regras.jpg";
  // img.style = " width: 100vw";

  // let img2 = document.createElement('img')
  // img2.src = "https://images.emojiterra.com/google/android-pie/512px/1f51e.png";
  // img2.style = "width: 100vw";
  
  // equilatero
  // if(v1 == v2 && v2 == v3){
  //   navigator.notification.alert("O triângulo é equilátero!", null, "Tipo:", "Ok");
  //   // document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é equilátero!</h1><br>");
  //   // location.reload();

  // }else if (v1 == v2 || v2 == v3){
  //   navigator.notification.alert("O triângulo é isósceles!", null, "Tipo:", "Ok");
  //   // document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é isósceles!</h1><br>");
  //   // location.reload();
  // }else if(v1 != v2 && v2 != v3 || v1 != null && v2 != null && v3 != null){
  //   navigator.notification.alert("O triângulo é escaleno", null, "Tipo:", "Ok");
  //   // document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é escaleno!</h1><br>");
  //   // location.reload();
  // }else if(v1 == NaN || v2 == NaN || v3 == NaN){
  //   // caso valores sejam inválidos.
  //    navigator.notification.alert("Os valores digitados são inválidos!", null, "Aviso!", "Ok");
  //   // https://github.com/AndreyMouraGouvea/PluginsCordova/blob/master/www/components/plugins.js
  //   // https://github.com/AndreyMouraGouvea/Tabuada-Mobile/blob/master/www/components/plugins.js
  //   // https://github.com/AndreyMouraGouvea/CalculadoraCompletaMobile/blob/master/www/components/acao.js
  // }else{
  //   navigator.notification.alert("Os valores digitados são inválidos!", null, "Aviso!", "Ok");
  // }
  if(v1 + v2 && v1 + v3 >= v2 && v2 + v3 >= v1){
    if(v1 == v2 && v2 == v3 && v3 == v1){
      navigator.notification.alert("O triângulo é equilátero!", null, "Tipo:", "Ok");
    }else if(v1 == v2 || v2 == v3 || v3 == v1){
      navigator.notification.alert("O triângulo é isósceles!", null, "Tipo:", "Ok");
    }else if(v1 != v2 && v2 != v3 && v3 != v1){
      navigator.notification.alert("O triângulo é escaleno", null, "Tipo:", "Ok");
    }
  }else{
    navigator.vibrate(2000);
    navigator.notification.alert("Os valores digitados são inválidos!", null, "Aviso!", "Ok");
  }
}
//https://www.clubedohardware.com.br/topic/1249858-programa-que-identifica-triangulos-e-calcula-seus-angulos/

