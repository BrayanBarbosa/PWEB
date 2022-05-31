function maiusculas(){
  var checkbox = document.getElementById('maius');
  if (checkbox.checked == true){
    document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toUpperCase();
    document.forms.atividade.elements.minus.checked = false;
  }
}

function minusculas(){
  var checkbox = document.getElementById('minus');
  if (checkbox.checked == true){
    document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toLowerCase();
    document.forms.atividade.elements.maius.checked = false;
  }
}