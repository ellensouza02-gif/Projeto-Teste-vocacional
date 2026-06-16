const perguntas = [
    { q: "Você gosta de resolver problemas lógicos?", a: "dev" },
    { q: "Gosta de organizar processos e fluxos?", a: "adm" },
    { q: "Gosta de negociar e convencer?", a: "vendas" },
    { q: "Gosta de cuidar do bem-estar alheio?", a: "enf" }
];

let contagem = { dev: 0, adm: 0, vendas: 0, enf: 0 };
let indice = 0;

function carregarPergunta() {
    if(indice < perguntas.length) {
        document.getElementById('pergunta').innerText = perguntas[indice].q;
        document.getElementById('opcoes').innerHTML = `
            <button class="btn" onclick="responder('${perguntas[indice].a}')">Sim</button>
            <button class="btn" onclick="proxima()">Não</button>`;
    } else {
        iniciarCamera();
    }
}

function responder(area) { contagem[area]++; proxima(); }
function proxima() { indice++; carregarPergunta(); }

function iniciarCamera() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('camera-area').style.display = 'block';
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        document.getElementById('video').srcObject = stream;
    });
}

function tirarFoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 600, 800);
    const vencedor = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Quiz Vocacional</title>
</head>
<body>
    <div id="container">
        <h1>Descubra seu Curso</h1>
        <div id="quiz-area">
            <p id="pergunta">Carregando...</p>
            <div id="opcoes"></div>
        </div>
        
        <div id="camera-area" style="display:none;">
            <video id="video" width="300" height="300" autoplay playsinline></video><br>
            <button class="btn" onclick="tirarFoto()">Tirar Foto e Revelar</button>
        </div>
        
        <canvas id="canvas" width="600" height="800"></canvas>
        <img id="resultado-final" style="width: 100%; display: none;">
    </div>
    <script src="js/script.js"></script>
</body>
</html>    ctx.fillText("Perfil: " + vencedor.toUpperCase(), 50, 700);
    document.getElementById('resultado-final').src = canvas.toDataURL('image/png');
    document.getElementById('resultado-final').style.display = 'block';
    document.getElementById('camera-area').style.display = 'none';
}

carregarPergunta();
