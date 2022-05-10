function formaUm(){

    var alunoUm = new Object();

    alunoUm.raUm = document.getElementById('ra1').value;
    alunoUm.nomeUm = document.getElementById('nome1').value;

    limpar();

    return alert("Criação de objeto na primeira forma deu certo! Uhul!\n\nVeja o resultado:\nRA: " + alunoUm.raUm + "\nNome: " + alunoUm.nomeUm);
}

function formaDois(){

    var alunoDois = {};

    alunoDois.raDois = document.getElementById('ra2').value;
    alunoDois.nomeDois = document.getElementById('nome2').value;

    limpar();

    return alert("Criação de objeto na segunda forma deu certo! Uhul!\n\nVeja o resultado:\nRA: " + alunoDois.raDois + "\nNome: " + alunoDois.nomeDois);
}

function formaTres(){

    var alunoTres = {
        raTres: document.getElementById('ra3').value,
        nomeTres: document.getElementById('nome3').value
    };

    limpar();

    return alert("Criação de objeto na terceira forma deu certo! Uhul!\n\nVeja o resultado:\nRA: " + alunoTres.raTres + "\nNome: " + alunoTres.nomeTres);
}

function limpar(){

    document.getElementById('ra1').value = "";
    document.getElementById('nome1').value = "";
    document.getElementById('ra2').value = "";
    document.getElementById('nome2').value = "";
    document.getElementById('ra3').value = "";
    document.getElementById('nome3').value = "";

}