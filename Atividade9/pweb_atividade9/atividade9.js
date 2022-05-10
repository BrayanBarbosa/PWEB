function CustomAlert(){
  this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      //dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH+"px";
      dialogbox.style.left = (winW/2) - (550 * .5)+"px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
      document.getElementById('dialogboxhead').innerHTML = "Título";
      document.getElementById('dialogboxbody').innerHTML = dialog;
      document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
  }
  this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
  }
}
var Alert = new CustomAlert();


function maiorDosTres() {
var n1 = parseFloat(document.getElementById("numero1").value);
var n2 = parseFloat(document.getElementById("numero2").value);
var n3 = parseFloat(document.getElementById("numero3").value);

var numbers = [n1, n2, n3];

var sorted_arr = numbers.sort();  
var results = [];
for (var i = 0; i < numbers.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
var repetido = (results[0]);

if (results!=""){
  Alert.render(repetido);
}else{
  Alert.render("O maior número informado foi : " + (Math.max(n1, n2, n3)));
}
}
maiorDosTres(n1, n2, n3);

function exibir(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    var aux = num1;

    if(num2 < num1){
     aux=num2;
     num2=num1;
     num1=aux;
    }

    if(num3 < num1){
     aux=num3;
     num3=num1;
     num1=aux;
    }

    if(num3 < num2){
     aux=num3;
     num3=num2;
     num2=aux;
    }
    Alert.render(num1+"-"+num2+"-"+num3);
   }
