// Base de dados
const convidados = ["Ana", "Bernardo", "Alice", "Gustavo", "Amanda", "Pedro", "Arthur", "Beatriz", "Caio"];

function inicializarListas() {
    const listaTodos = document.getElementById('lista-todos');
    const listaA = document.getElementById('lista-a');
    const listaLongos = document.getElementById('lista-longos');

    let countA = 0;
    let countLongos = 0;

    // Loop principal para processar os nomes
    convidados.forEach(nome => {
        const nomeMaiusculo = nome.toUpperCase(); // Transformando em maiúsculas via JS
        const li = document.createElement('li');
        li.textContent = nomeMaiusculo;

        // 1. Adiciona à lista geral
        listaTodos.appendChild(li.cloneNode(true));

        // 2. Filtra nomes que começam com "A"
        if (nomeMaiusculo.startsWith('A')) {
            listaA.appendChild(li.cloneNode(true));
            countA++;
        }

        // 3. Filtra nomes com mais de 5 letras
        if (nome.length > 5) {
            listaLongos.appendChild(li.cloneNode(true));
            countLongos++;
        }
    });

    // Atualiza os contadores na tela
    document.getElementById('contagem-a').textContent = `Total: ${countA}`;
    document.getElementById('contagem-longos').textContent = `Total: ${countLongos}`;
}

// Função para trocar de aba
function showTab(tabId) {
    // Remove classe 'active' de todos
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Adiciona apenas na selecionada
    document.getElementById(tabId).classList.add('active');
}

// Executa ao carregar a página
window.onload = inicializarListas;
