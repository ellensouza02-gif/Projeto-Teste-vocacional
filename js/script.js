let pontos = { dev: 0, adm: 0, vendas: 0, enf: 0 };
let indice = 0;
let fotoCapturada = false;

// Seleção de elementos
const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const analise = document.getElementById("analise");
const camera = document.getElementById("camera");
const revelacao = document.getElementById("revelacao");
const container = document.getElementById("botoes-container"); // NOVO: Container dos botões
const pergunta = document.getElementById("pergunta");
const barra = document.getElementById("barra");
const atual = document.getElementById("atual");
const total = document.getElementById("total");
const btnIniciar = document.getElementById("btnIniciar");
const btnFoto = document.getElementById("btnFoto");
const fotoInput = document.getElementById("fotoInput");
const profissaoResultado = document.getElementById("profissaoResultado");
const descricaoResultado = document.getElementById("descricaoResultado");

btnIniciar.addEventListener("click", () => {
    intro.classList.add("oculto");
    quiz.classList.remove("oculto");
    carregar();
});

function carregar() {
    pergunta.textContent = perguntas[indice].pergunta;
    atual.textContent = indice + 1;
    total.textContent = perguntas.length;
    barra.style.width = ((indice + 1) / perguntas.length) * 100 + "%";

    // botões  dinamico
    container.innerHTML = "";
    const opcoes = perguntas[indice].opcoes;
    
    Object.keys(opcoes).forEach(textoBotao => {
        const btn = document.createElement("button");
        btn.textContent = textoBotao;
        btn.onclick = () => responder(textoBotao);
        container.appendChild(btn);
    });
}

function responder(escolha) {
    let r = perguntas[indice].opcoes[escolha];
    Object.keys(r).forEach(k => { pontos[k] += r[k]; });

    indice++;
    if (indice < perguntas.length) {
        carregar();
    } else {
        analisar();
    }
}

function analisar() {
    quiz.classList.add("oculto");
    analise.classList.remove("oculto");
    setTimeout(() => {
        analise.classList.add("oculto");
        camera.classList.remove("oculto");
    }, 3000);
}

// Lógica de foto 
btnFoto.onclick = () => fotoInput.click();
fotoInput.onchange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    document.getElementById("previewFoto").src = url;
    document.getElementById("fotoFinal").src = url;
    fotoCapturada = true;
    setTimeout(resultado, 1500);
};

function resultado() {
    camera.classList.add("oculto");
    revelacao.classList.remove("oculto");

    let res = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);
    const nomes = { dev: "💻 Desenvolvedor", adm: "📊 Gestor", vendas: "🚀 Vendas", enf: "🩺 Saúde" };

    profissaoResultado.textContent = nomes[res];
    descricaoResultado.textContent = "Resultado gerado com base no seu perfil.";
}