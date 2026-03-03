const convidados = ["Ana", "Bernardo", "Alice", "Gustavo", "Amanda", "Pedro", "Arthur", "Beatriz", "Caio", "Mariana", "Leonardo"];

function popularListas() {
    const elementos = {
        todos: document.getElementById('lista-todos'),
        letraA: document.getElementById('lista-a'),
        longos: document.getElementById('lista-longos')
    };

    let counts = { a: 0, longos: 0 };

    // Limpar listas antes de popular (boa prática)
    Object.values(elementos).forEach(el => el.innerHTML = '');

    // Loop com template strings para código mais limpo
    convidados.forEach(nome => {
        const UPPER = nome.toUpperCase();
        const li = `<li>${UPPER}</li>`;

        // Todos
        elementos.todos.innerHTML += li;

        // Começam com A
        if (UPPER.startsWith('A')) {
            elementos.letraA.innerHTML += li;
            counts.a++;
        }

        // Mais de 5 letras
        if (nome.length > 5) {
            elementos.longos.innerHTML += li;
            counts.longos++;
        }
    });

    // Atualizar indicadores visuais
    document.getElementById('total-geral').textContent = convidados.length;
    document.getElementById('contagem-a').textContent = counts.a;
    document.getElementById('contagem-longos').textContent = counts.longos;
}

function showTab(event, tabId) {
    // Esconder todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    // Remover classe ativa de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    // Mostrar a aba atual e ativar o botão clicado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Iniciar
window.onload = popularListas;
