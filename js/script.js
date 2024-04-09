// Definição da classe Veiculo
class Veiculo {
    constructor() {
        this.veiculos = [];
        this.idCounter = 1; //adiciona um contador
        const storedVeiculos = localStorage.getItem('tbVeiculos');
        if (storedVeiculos) {
            this.veiculos = JSON.parse(storedVeiculos);
            this.idCounter = this.veiculos.reduce((maxId, veiculo) => Math.max(maxId, veiculo.id), 0) + 1;
        }
    }

    // Salvar no localstore
    salva(veiculo) {
        veiculo.id = this.idCounter++;
        this.veiculos.push(veiculo);
        localStorage.setItem('tbVeiculos', JSON.stringify(this.veiculos));
        localStorage.setItem('idCounter', this.idCounter);
        alert('Veículo salvo com sucesso 💾');
    }
}

// Tratamento converter o caracteres para maiúsculas com chamando class maiusculo
document.querySelectorAll('.maiusculo').forEach(function (element) {
    element.addEventListener('input', function () {
        this.value = this.value.toUpperCase();
    });
});

// Tratamento ano maximo 4 digitos class ano
document.querySelectorAll('.ano').forEach(function (element) {
    element.addEventListener('input', function () {
        if (this.value.length > 4) {
            this.value = this.value.slice(0, 4);
        }
    });
});


const veiculo = new Veiculo();

document.addEventListener('DOMContentLoaded', function () {

    const salvarBtn = document.getElementById('salvar');


    // Adiciona um evento de clique aos botões de rádio
    document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.addEventListener('click', function () {
            // Se a opção "outra" for selecionada, exibe o campo de texto, caso contrário, oculta
            document.getElementById('outraMarca').style.display = this.id === 'outra' ? 'inline-block' : 'none';
        });
    });

    // Função obtém valor da marca selecionada ou do campo de texto "outraMarca"
    function getMarca() {
        let valormarca = '';
        document.querySelectorAll('input[type="radio"]').forEach(function (radio) {

            // Lógica para valormarca se diferente de outra
            if (radio.checked && radio.id !== 'outra') {
                valormarca = radio.value.toUpperCase();
            }
        });

        // Lógica valormarca quando selecionada outra
        if (document.getElementById('outra').checked) {
            valormarca = document.getElementById('outraMarca').value.toUpperCase();
        }

        return valormarca;
    }

    // Se clicado no botão salvar

    if (salvarBtn) {
        salvarBtn.addEventListener('click', (event) => {
            event.preventDefault();


            // Função para marca acima
            const valormarca = getMarca();

            const registro = {
                modelo: document.getElementById('modelo').value,
                ano: document.getElementById('ano').value,
                cor: document.getElementById('cor').value,
                cadastro: document.getElementById('cadastro').value,
                valor: document.getElementById('valor').value,
                cambio: document.getElementById('cambio').value,
                marca: valormarca
            };

            // Verifica se o checkbox está marcado antes de incluir no localstorage se estiver incluir se não deixa vazio
            if (document.getElementById('acessorios0').checked) {
                registro.acessorios0 = document.getElementById('acessorios0').value;
            } else {
                registro.acessorios0 = "";
            }

            if (document.getElementById('acessorios1').checked) {
                registro.acessorios1 = document.getElementById('acessorios1').value;
            } else {
                registro.acessorios1 = "";
            }

            if (document.getElementById('acessorios2').checked) {
                registro.acessorios2 = document.getElementById('acessorios2').value;
            } else {
                registro.acessorios2 = "";
            }

            if (document.getElementById('acessorios3').checked) {
                registro.acessorios3 = document.getElementById('acessorios3').value;
            } else {
                registro.acessorios3 = "";
            }

            // Validação do modelo não deixar vazio
            if (registro.modelo === '') {
                alert('Por favor, digite o modelo.');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

            // Validação do cor não deixar vazio
            if (registro.cor === '') {
                alert('Por favor, digite a cor.');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

            // Validação do valor não deixar vazio ou negativo
            if (registro.valor === '' || registro.valor < 0) {
                alert('Por favor, digite o valor positivo');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

             // Validação do seletor do câmbio não deixar vazio
             if (registro.marca === '') {
                alert('Por favor, digite a marca.');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

            // Validação do seletor do câmbio não deixar vazio
            if (registro.cambio === '') {
                alert('Por favor, selecione o tipo de câmbio.');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

            // Validação do ano tem obrigatóriamente 4 numeros
            if (registro.ano.toString().length !== 4 || isNaN(registro.ano)) {
                alert('Por favor, utilize 4 digitos no ano.');
                return; // Impede a execução do código abaixo se o câmbio não for selecionado
            }

            // Validação do cadastro não deixar vazio
            if (registro.cadastro === '') {
                alert('Por favor, selecione a data do cadastro.');
                return; // Impede a execução do código abaixo se o cadastro for vazio
            }

            veiculo.salva(registro);

            // Limpar o formulário após incluir em storege exceto id marca que volta para chevrolet checado evintado em no inserção deixar em branco
            document.getElementById('modelo').value = '';
            document.getElementById('ano').value = '';
            document.getElementById('cor').value = '';
            document.getElementById('cadastro').value = '';
            document.getElementById('valor').value = '';
            document.getElementById('acessorios0').value = '';
            document.getElementById('acessorios1').value = '';
            document.getElementById('acessorios2').value = '';
            document.getElementById('acessorios3').value = '';
            document.getElementById('cambio').value = '';
            document.getElementById('chevrolet').checked = true;
            document.getElementById('fiat').checked = false;
            document.getElementById('ford').checked = false;
            document.getElementById('volkswagen').checked = false;
            document.getElementById('outra').checked = false;

        });
    }

    //---------------------------------------------------------------------------------------------

    //Recupera dados para tabela 
    
    function getVeiculos() {
        var veiculosRecupera = localStorage.getItem("tbVeiculos");
        if (!veiculosRecupera) {
            return [];
        } else {
            return JSON.parse(veiculosRecupera);
        }
    }

    function insertIntoTableView(item, tableIndex) {
        var table = document.getElementById('tabela_veiculos').getElementsByTagName('tbody')[0];
        var row = table.insertRow();
        var idCell = row.insertCell(0);
        var cadastroCell = row.insertCell(1);
        var dataCadastro = new Date(item.cadastro); // Usando Date
        var marcaCell = row.insertCell(2);
        var modeloCell = row.insertCell(3);
        var anoCell = row.insertCell(4);
        var corCell = row.insertCell(5);
        var valorCell = row.insertCell(6);
        var acessoriosTodosCheckCell = row.insertCell(7);
        var cambioCell = row.insertCell(8);

        idCell.textContent = tableIndex;
        cadastroCell.innerHTML = dataCadastro.toLocaleDateString('pt-BR'); //tratamento da data para formato Brasil
        marcaCell.textContent = item.marca;
        modeloCell.textContent = item.modelo;
        anoCell.innerHTML = item.ano;
        corCell.innerHTML = item.cor;
        valorCell.textContent = 'R$ ' + item.valor; //adiciona o simbolo de R$  

        //  Concatena os acessórios em uma única coluna e separa por vingula
        var acessorios = [];
        if (item.acessorios0) acessorios.push(item.acessorios0);
        if (item.acessorios1) acessorios.push(item.acessorios1);
        if (item.acessorios2) acessorios.push(item.acessorios2);
        if (item.acessorios3) acessorios.push(item.acessorios3);
        acessoriosTodosCheckCell.textContent = acessorios.join(', ');

        cambioCell.textContent = item.cambio;
    }
    function getTableData() {
        var veiculos = getVeiculos();
        var table = document.getElementById('tabela_veiculos').getElementsByTagName('tbody')[0];
        table.innerHTML = '';
    
        // Lógica para se não hover linhas no localstorage aprecer (Não há veículos em estoque. Aguarde para novidades.)
        if (veiculos.length === 0) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.colSpan = 9; // Colspan para ocupar todas as colunas
            cell.textContent = 'Não há veículos em estoque. Aguarde para novidades.';
        } else {
            veiculos.forEach(function (item, index) {
                insertIntoTableView(item, index + 1);
            });
        }
    }
    
    // Verifica se a tabela existe antes de chamar a função getTableData()
    if (document.getElementById('tabela_veiculos')) {
        getTableData();
    }
    

});

