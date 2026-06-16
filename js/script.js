// ===============================
// PONTUAÇÃO DA MISSÃO
// ===============================


let pontos = {

    dev:0,

    adm:0,

    vendas:0,

    enf:0

};


let indice = 0;

let fotoCapturada = false;



// ===============================
// ELEMENTOS
// ===============================


const intro =
document.getElementById("intro");


const quiz =
document.getElementById("quiz");


const analise =
document.getElementById("analise");


const camera =
document.getElementById("camera");


const revelacao =
document.getElementById("revelacao");



const btnIniciar =
document.getElementById("btnIniciar");


const btnFoto =
document.getElementById("btnFoto");


const fotoInput =
document.getElementById("fotoInput");



const previewFoto =
document.getElementById("previewFoto");


const fotoFinal =
document.getElementById("fotoFinal");



const perguntaTexto =
document.getElementById("pergunta");


const atual =
document.getElementById("atual");


const total =
document.getElementById("total");


const barra =
document.getElementById("barra");



const botaoSim =
document.getElementById("sim");


const botaoNao =
document.getElementById("nao");



const profissaoResultado =
document.getElementById("profissaoResultado");


const descricaoResultado =
document.getElementById("descricaoResultado");



const btnReiniciar =
document.getElementById("btnReiniciar");




// ===============================
// PROFISSÕES
// ===============================


const profissoes = {


dev:{

nome:
"💻 Desenvolvedor de Software",

descricao:
"Seu perfil indica criatividade, lógica e facilidade para resolver problemas usando tecnologia."

},



adm:{

nome:
"📊 Gestor de Negócios",

descricao:
"Você demonstra organização, estratégia e habilidade para liderar projetos."

},



vendas:{

nome:
"🚀 Especialista em Vendas",

descricao:
"Seu perfil mostra comunicação, influência e facilidade para conectar pessoas."

},



enf:{

nome:
"🩺 Profissional da Saúde",

descricao:
"Você demonstra empatia, cuidado e desejo de ajudar pessoas."

}


};




// ===============================
// INICIAR MISSÃO
// ===============================


btnIniciar.addEventListener("click",()=>{


intro.classList.add("oculto");


quiz.classList.remove("oculto");


carregarPergunta();


});





// ===============================
// CARREGAR PERGUNTA
// ===============================


function carregarPergunta(){


perguntaTexto.style.opacity = 0;



setTimeout(()=>{


perguntaTexto.textContent =
perguntas[indice].pergunta;


perguntaTexto.style.opacity = 1;



},200);



atual.textContent =
indice + 1;



total.textContent =
perguntas.length;



atualizarBarra();



}




// ===============================
// PROGRESSO
// ===============================


function atualizarBarra(){


let valor =
((indice + 1) / perguntas.length) * 100;



barra.style.width =
valor + "%";


}




// ===============================
// RESPOSTAS
// ===============================


botaoSim.addEventListener("click",()=>{


responder("sim");


});



botaoNao.addEventListener("click",()=>{


responder("nao");


});





function responder(tipo){


let resposta =
perguntas[indice][tipo];



Object.keys(resposta).forEach(area=>{


pontos[area] += resposta[area];


});


proximaPergunta();


}





// ===============================
// PRÓXIMA
// ===============================


function proximaPergunta(){


indice++;



if(indice < perguntas.length){


carregarPergunta();



}else{


iniciarAnalise();



}



}





// ===============================
// ANALISE COM SUSPENSE
// ===============================


function iniciarAnalise(){


quiz.classList.add("oculto");


analise.classList.remove("oculto");



// apenas analisa,
// NÃO mostra resultado


setTimeout(()=>{


analise.classList.add("oculto");


camera.classList.remove("oculto");



},4000);



}







// ===============================
// FOTO
// ===============================


btnFoto.addEventListener("click",()=>{


fotoInput.click();



});






fotoInput.addEventListener("change",(evento)=>{



const arquivo =
evento.target.files[0];



if(arquivo){



const url =
URL.createObjectURL(arquivo);



previewFoto.src = url;


fotoFinal.src = url;



fotoCapturada = true;



setTimeout(()=>{


mostrarResultado();



},2000);



}



});









// ===============================
// RESULTADO FINAL
// ===============================


function mostrarResultado(){


if(!fotoCapturada){

return;

}



camera.classList.add("oculto");

revelacao.classList.remove("oculto");



let resultado =

Object.keys(pontos).reduce((a,b)=>{

return pontos[a] > pontos[b] ? a : b;

});



let perfil = profissoes[resultado];



profissaoResultado.textContent =
perfil.nome;


descricaoResultado.textContent =
perfil.descricao;



fotoFinal.src =
previewFoto.src;



}




// ===============================
// REINICIAR
// ===============================


btnReiniciar.addEventListener("click",()=>{


indice = 0;



pontos = {


dev:0,

adm:0,

vendas:0,

enf:0


};



fotoCapturada=false;



revelacao.classList.add("oculto");


intro.classList.remove("oculto");



});