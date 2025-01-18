// Função para salvar os dados
function saveData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const difficulty = document.getElementById('difficulty').value;
    const dropCount = document.getElementById('dropCount').value;
    const onuSignal = document.getElementById('onuSignal').value;
    const router = document.querySelector('input[name="router"]:checked')?.value || '';
    const onu = document.querySelector('input[name="onu"]:checked')?.value || '';
    const activationDate = document.getElementById('activationDate').value;
    const lastService = document.getElementById('lastService').value;

    // Validar campos obrigatórios
    if (!name || !phone) {
        alert("Nome e telefone são obrigatórios.");
        return;
    }

    // Recuperar dados existentes no localStorage
    const data = JSON.parse(localStorage.getItem('formData')) || [];

    // Adicionar novo registro
    data.push({ name, phone, difficulty, dropCount, onuSignal, router, onu, activationDate, lastService });

    // Salvar novamente no localStorage
    localStorage.setItem('formData', JSON.stringify(data));

    alert('Dados salvos com sucesso!');
    updateSelectOptions();
    clearForm();
}

// Função para carregar as opções do select
function updateSelectOptions() {
    const data = JSON.parse(localStorage.getItem('formData')) || [];
    const select = document.getElementById('savedData');

    // Limpar opções anteriores
    select.innerHTML = '<option value="">Selecione...</option>';

    // Adicionar opções
    data.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.name || `Registro ${index + 1}`;
        select.appendChild(option);
    });
}

// Função para carregar dados selecionados
function loadSelectedData() {
    const data = JSON.parse(localStorage.getItem('formData')) || [];
    const select = document.getElementById('savedData');
    const selectedIndex = select.value;

    if (selectedIndex === "") {
        clearForm();
        return;
    }

    const selectedData = data[selectedIndex];
    document.getElementById('name').value = selectedData.name || '';
    document.getElementById('phone').value = selectedData.phone || '';
    document.getElementById('difficulty').value = selectedData.difficulty || '';
    document.getElementById('dropCount').value = selectedData.dropCount || '';
    document.getElementById('onuSignal').value = selectedData.onuSignal || '';
    document.querySelector(`input[name="router"][value="${selectedData.router}"]`)?.click();
    document.querySelector(`input[name="onu"][value="${selectedData.onu}"]`)?.click();
    document.getElementById('activationDate').value = selectedData.activationDate || '';
    document.getElementById('lastService').value = selectedData.lastService || '';
}

// Função para apagar um registro selecionado
function deleteSelectedData() {
    const select = document.getElementById('savedData');
    const selectedIndex = select.value;

    if (selectedIndex === "") {
        alert("Por favor, selecione um registro para apagar.");
        return;
    }

    // Recuperar dados do localStorage
    const data = JSON.parse(localStorage.getItem('formData')) || [];

    // Remover o registro selecionado
    data.splice(selectedIndex, 1);

    // Salvar novamente no localStorage
    localStorage.setItem('formData', JSON.stringify(data));

    alert("Registro apagado com sucesso!");
    updateSelectOptions();
    clearForm();
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('difficulty').value = '';
    document.getElementById('dropCount').value = '';
    document.getElementById('onuSignal').value = '';
    document.querySelectorAll('input[name="router"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="onu"]').forEach(el => el.checked = false);
    document.getElementById('activationDate').value = '';
    document.getElementById('lastService').value = '';
    document.getElementById('savedData').value = '';
}

// Função para copiar o formulário preenchido
function copyFormData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const difficulty = document.getElementById('difficulty').value;
    const dropCount = document.getElementById('dropCount').value;
    const onuSignal = document.getElementById('onuSignal').value;
    const router = document.querySelector('input[name="router"]:checked')?.value || "Não informado";
    const onu = document.querySelector('input[name="onu"]:checked')?.value || "Não informado";
    const activationDate = document.getElementById('activationDate').value || "Não informado";
    const lastService = document.getElementById('lastService').value;

    const formData = `
=========================================
Nome: ${name || "Não informado"}
Telefone: ${phone || "Não informado"}
Dificuldade Relatada: ${difficulty || "Não informado"}
Quantidade de Quedas: ${dropCount || "Não informado"}
Sinal da ONU: ${onuSignal || "Não informado"}
Roteador: ${router}
ONU: ${onu}
Ativado em: ${activationDate}
Último Atendimento: ${lastService || "Não informado"}
=========================================
`;

    navigator.clipboard.writeText(formData)
        .then(() => alert('Formulário copiado com sucesso!'))
        .catch(() => alert('Erro ao copiar o formulário.'));
}

// Atualizar opções ao carregar a página
window.onload = updateSelectOptions;
