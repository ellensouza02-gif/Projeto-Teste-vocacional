let pontos = {dev:0, adm:0, vendas:0, enf:0};
let indice = 0;
let fotoCapturada = false;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const analise = document.getElementById("analise");
const camera = document.getElementById("camera");
const revelacao = document.getElementById("revelacao");

const btnIniciar = document.getElementById("btnIniciar");
const btnFoto = document.getElementById("btnFoto");
const fotoInput = document.getElementById("fotoInput");

const pergunta = document.getElementById("pergunta");
const barra = document.getElementById("barra");

const atual = document.getElementById("atual");
const total = document.getElementById("total");

const previewFoto = document.getElementById("previewFoto");
const fotoFinal = document.getElementById("fotoFinal");

const profissaoResultado = document.getElementById("profissaoResultado");
const descricaoResultado = document.getElementById("descricaoResultado");

btnIniciar.addEventListener("click",()=>{
intro.classList.add("oculto");
quiz.classList.remove("oculto");
carregar();
});

function carregar(){
pergunta.textContent = perguntas[indice].pergunta;
atual.textContent = indice+1;
total.textContent = perguntas.length;

barra.style.width = ((indice+1)/perguntas.length)*100 + "%";
}

function responder(tipo){
let r = perguntas[indice][tipo];
Object.keys(r).forEach(k=>{
pontos[k]+=r[k];
});

indice++;

if(indice < perguntas.length){
carregar();
}else{
analisar();
}
}

document.getElementById("sim").onclick=()=>responder("sim");
document.getElementById("nao").onclick=()=>responder("nao");

function analisar(){
quiz.classList.add("oculto");
analise.classList.remove("oculto");

setTimeout(()=>{
analise.classList.add("oculto");
camera.classList.remove("oculto");
},3000);
}

btnFoto.onclick=()=>fotoInput.click();

fotoInput.onchange=(e)=>{
let file = e.target.files[0];
let url = URL.createObjectURL(file);

previewFoto.src = url;
fotoFinal.src = url;

fotoCapturada = true;

setTimeout(()=>{
resultado();
},1500);
};

function resultado(){
if(!fotoCapturada) return;

camera.classList.add("oculto");
revelacao.classList.remove("oculto");

let res = Object.keys(pontos).reduce((a,b)=>{
return pontos[a]>pontos[b]?a:b;
});

const nomes = {
dev:"💻 Desenvolvedor",
adm:"📊 Gestor",
vendas:"🚀 Vendas",
enf:"🩺 Saúde"
};

profissaoResultado.textContent = nomes[res];
descricaoResultado.textContent = "Resultado gerado com base no seu perfil.";
}