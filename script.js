// Banco de dados simulado
const listaConvidados = [
    "Adriano", "Beatriz", "Amanda", "Carlos", "Augusto", 
    "Daniela", "Eduardo", "Aline", "Fernando", "Gabriel", 
    "Arthur", "Heloísa", "Isabela", "Jack", "Alessandro"
];

function inicializarSistema() {
    const listTodos = document.getElementById('lista-todos');
    const listA = document.getElementById('lista-a');
    const listLongos = document.getElementById('lista-longos');

    let countA = 0;
    let countLongos = 0;

    // Loop para processar os nomes
    for (let i = 0; i < listaConvidados.length; i++) {
        const nomeOriginal = listaConvidados[i];
        const nomeUpper = nomeOriginal.toUpperCase(); // Requisito: Maiúsculas via loop

        // Criar elemento visual
        const li = document.createElement('li');
        li.textContent = nomeUpper;

        // Adicionar na lista geral
        listTodos.appendChild(li.cloneNode(true));

        // Filtro: Começa com A
        if (nomeUpper.startsWith('A')) {
            listA.appendChild(li.cloneNode(true));
            countA++;
        }

        // Filtro: Mais de 5 letras
        if (nomeOriginal.length > 5) {
            listLongos.appendChild(li.cloneNode(true));
            countLongos++;
        }
    }

    // Atualizar contadores na interface
    document.getElementById('stat-total').innerText = listaConvidados.length;
    document.getElementById('count-a').innerText = `${countA} convidados encontrados`;
    document.getElementById('count-longos').innerText = `${countLongos} convidados encontrados`;
}

// Lógica de navegação entre abas
function openTab(event, tabId) {
    // Esconder todas as abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remover estado ativo dos botões
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostrar aba selecionada e ativar botão
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Iniciar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', inicializarSistema);
