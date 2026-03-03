// Lista de convidados
const convidados = [
    "Alice", "Bruna", "Amanda", "Carlos", "Ana", "Fernando", "Aline", "Juliana", "Mateus", "André"
];

// Função para iniciar as listas e tabs
function init() {
    const convidadosList = document.getElementById('convidados-list');
    const letraAList = document.getElementById('letraA-list');
    const maisCincoList = document.getElementById('maisCinco-list');

    // Preencher a lista de convidados
    convidados.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome.toUpperCase(); // Coloca o nome em maiúsculas
        convidadosList.appendChild(li);
    });

    // Filtrar convidados que começam com a letra 'A'
    const convidadosA = convidados.filter(nome => nome.toLowerCase().startsWith('a'));
    convidadosA.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome.toUpperCase();
        letraAList.appendChild(li);
    });

    // Filtrar convidados com mais de 5 letras
    const convidadosCinco = convidados.filter(nome => nome.length > 5);
    convidadosCinco.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome.toUpperCase();
        maisCincoList.appendChild(li);
    });

    // Exibir a aba inicial
    openTab('convidados');
}

// Função para abrir as abas
function openTab(tabName) {
    // Esconde todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Exibe a aba correspondente
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Inicializa o site
window.onload = init;
