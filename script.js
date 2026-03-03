// Iniciamos com a sua lista original
let convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Beatriz", "Alberto", "Ricardo"];

const inputNome = document.getElementById('novoNome');
const listaVisual = document.getElementById('listaVisual');
const resultDisplay = document.getElementById('result');

// Função para exibir os nomes na tela como etiquetas (tags)
function atualizarInterface() {
    listaVisual.innerHTML = "";
    convidados.forEach(nome => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = nome;
        listaVisual.appendChild(span);
    });
}

// Adiciona novo convidado à lista
function adicionarConvidado() {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        convidados.push(nome);
        inputNome.value = "";
        inputNome.focus();
        atualizarInterface();
    }
}

// Permite adicionar apertando "Enter" no teclado
inputNome.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarConvidado();
});

// --- Lógica do Algoritmo Original ---

function transformarMaiusculas() {
    const maiusculos = convidados.map(n => n.toUpperCase());
    resultDisplay.textContent = `[ ${maiusculos.join(", ")} ]`;
}

function contarNomesComA() {
    const total = convidados.filter(n => n.toUpperCase().startsWith("A")).length;
    resultDisplay.innerHTML = `Total que começa com 'A': <span style="color:white">${total}</span>`;
}

function filtrarNomesLongos() {
    const longos = convidados.filter(n => n.length > 5);
    resultDisplay.textContent = longos.length > 0 ? `[ ${longos.join(", ")} ]` : "Nenhum encontrado.";
}

// Inicializa a lista ao carregar a página
atualizarInterface();
