// Dados do sistema
const convidados = [
    "Alice", "Bruno", "Amanda", "Caio", "Beatriz", 
    "Augusto", "Daniel", "Aline", "Fernando", "Gabriel", 
    "Adriano", "Helena", "Ítalo", "Jefferson", "Alexandre"
];

// Função principal disparada ao carregar o site
document.addEventListener('DOMContentLoaded', () => {
    renderizarListas();
});

function renderizarListas() {
    const containerGeral = document.getElementById('lista-geral');
    const containerA = document.getElementById('lista-a');
    const containerLongos = document.getElementById('lista-longos');

    let countA = 0;
    let countLongos = 0;

    // LOOP: Processando cada nome
    for (let i = 0; i < convidados.length; i++) {
        const nomeOriginal = convidados[i];
        const nomeFormatado = nomeOriginal.toUpperCase(); // Transformação obrigatória
        
        // Criar o elemento de lista (LI)
        const li = document.createElement('li');
        li.textContent = nomeFormatado;

        // 1. Adicionar à lista geral
        containerGeral.appendChild(li.cloneNode(true));

        // 2. Lógica para nomes com letra 'A'
        if (nomeFormatado.startsWith('A')) {
            containerA.appendChild(li.cloneNode(true));
            countA++;
        }

        // 3. Lógica para nomes com mais de 5 letras
        if (nomeOriginal.length > 5) {
            containerLongos.appendChild(li.cloneNode(true));
            countLongos++;
        }
    }

    // Atualizar números na interface
    document.getElementById('stat-total-val').textContent = convidados.length;
    document.getElementById('badge-a').textContent = `${countA} Encontrados`;
    document.getElementById('badge-longos').textContent = `${countLongos} Encontrados`;
}

// Função para trocar de abas
function switchTab(event, tabId) {
    // Esconder todas as abas
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(t => t.classList.remove('active'));

    // Desativar todos os botões
    const btns = document.querySelectorAll('.nav-item');
    btns.forEach(b => b.classList.remove('active'));

    // Ativar a selecionada
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
