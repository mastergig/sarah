/*

===========================================================
===> Page:  Sarah Chibi Arts
Created by: Giovanni Perillo
===========================================================

*/

//Valores css para mover o AAAAAAA enquanto carrega
var APositions = ['left top','left center','left bottom','right top','right center','right bottom','center top','center center','center bottom'];
var Aid = 0; //valor da posição dos AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

function AAA()
{
    var loadDiv = document.getElementById("load");

    Aid = randomNoRepeat(Aid, APositions.length);
    loadDiv.style.backgroundPosition = APositions[Aid];
}


function carrega(verdade)
{
    var loadDiv = document.getElementById("load");
    if(verdade)
    {
        loadDiv.className = "load";
    }
    else
    {
        loadDiv.className = "unload";
    }
    AAA();
}

/*=========================================================
================  Funções de Usabilidade  ================
=========================================================*/

//carrega arquivo como texto
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

//gera um numero aleatório
function randomNumber(min,max)
{
    var calc = max - min;
    var numero = Math.floor(Math.random() * calc)+min; 
    return numero;
}

//gera um numero aleatorio sem ser o ultimo gerado
function randomNoRepeat(num, qtd)
{
    var i = randomNumber(0,qtd);
    if(num == i) return randomNoRepeat(num, qtd);
    return i;
}

function addJs(file, onEnd)
{
    var imported = document.createElement('script');
    imported.src = file;
    if(onEnd != null) imported.onload = onEnd;
    document.head.appendChild(imported);
}

function waitLoadFile(file, onEnd)
{
    var imported = document.createElement('img');
    imported.src = file;
    if(onEnd != null) imported.onload = onEnd;
}

/*=========================================================
==================  Inicio de Execução  ==================
=========================================================*/
$( document ).ready(function() {
    var carregado = false;
    //inicia tela
    try {
        
        addJs('./js/loadScreen.js', function ()
        {
            start();
        });

        //se tudo deu ok, espera carregar arquivos
        carregado = true;
    }
    finally{
        carrega(carregado);
    }
});