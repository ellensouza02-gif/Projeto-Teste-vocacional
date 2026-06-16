let pontos = {

    dev: 0,

    adm: 0,

    vendas: 0,

    enf: 0

};


let indice = 0;



const perguntaTexto = document.getElementById("pergunta");

const contador = document.querySelector(".progresso");

const botaoSim = document.getElementById("sim");

const botaoNao = document.getElementById("nao");




// carregar pergunta

function carregarPergunta(){


    perguntaTexto.textContent =
    perguntas[indice].pergunta;


    contador.textContent =
    `Pergunta ${indice + 1} de ${perguntas.length}`;


}





// botão SIM

botaoSim.addEventListener("click", ()=>{


    let resposta = perguntas[indice].sim;


    pontos[resposta]++;


    proximaPergunta();


});






// botão NÃO

botaoNao.addEventListener("click", ()=>{


    let resposta = perguntas[indice].nao;


    pontos[resposta]++;


    proximaPergunta();


});







function proximaPergunta(){


    indice++;


    if(indice < perguntas.length){


        carregarPergunta();


    }else{


        mostrarResultado();


    }


}







function mostrarResultado(){


    let resultado = Object.keys(pontos).reduce((a,b)=>{


        return pontos[a] > pontos[b] ? a : b;


    });



    console.log("Pontuação final:");

    console.log(pontos);



    console.log("Resultado:");

    console.log(resultado);



    alert(
        "Seu curso ideal é: " + resultado
    );


}





carregarPergunta();