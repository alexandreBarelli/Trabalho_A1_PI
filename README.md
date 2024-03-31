# MULTIMARCAS 2 D'OUROS - Primeiro Trabalho da Disciplina - FATEC

O trabalho constituido no desenvolvimento de uma página HTML que contemple
os seguintes elementos:
● Toda a interface deverá utilizar no mínimo duas diferentes fontes com
quatro diferentes cores;
● Criação de uma área de Cabeçalho onde deverá constar uma imagem e
o nome da empresa fictícia e uma estrutura de menu;
● Criação de um formulário para inclusão de um novo registro. O tipo do
dado é livre, porém o formulário deverá ter no mínimo:
● um campo do tipo data;
● um campo do tipo número;
● um campo do tipo checkbox;
● um campo do tipo radio e
● um campo do tipo texto.
● um botão para Salvar e um para Limpar os dados. (obviamente
ainda não será necessário salvar nenhuma informação).
● Utilizando o CSS, formate os campos do formulário e os botões.
(insira emoji ou ícones nos botões)
● O formulário deverá salvar os dados no navegador, utilizando a
propriedade LocalStorage e exibir embaixo ou ao lado do formulário,
uma tabela que deverá efetuar a listagem dos registros inseridos. (é
importante criar uma formatação com CSS para os elementos da tabela)
● Fazer o deploy no GITHUB e publicar o projeto no GITPAGES. Criação do arquivo README.


## 🚀 Começando

● Página criada simulado uma empresa de venda de veículos em titulada "2 D'OUROS - MULTIMARCAS", com um formulário de cadastro para ser exibido no index.html recuperando os dados do localstorage.

Obs. Para se paracer mais com um sistema foi recuperado os dados no index.html ao invés da página cadastro.
 

### 📋 Estrutura de arquivos

Criado estrutura com os arquivos:
● estilo.css:	
- utilizado para definições de estilos no formulário, estruturas e organização;
- cumprindo os requisitos nas utilizações de 4 cores e 2 fontes diferentes;
- cumprindo a estilização da tabela que recupera os dados.
- comprovação - nav ul li a fonte Didot cor white , label com fonte Verdana cor black e cores diversas footer h3 color: #1f1e1e e footer p  e color: #2c2b2b 
- extra usado recurso @media only screen and (max-width: 600px) para definições em telas menores como dispotivo mobile.

● index.html: 
- criado um menu início e cadastro de veículo;
- utilizado imagem favicon para navegador;
- utilizado imagem de logo para menu;
- utilizado imagem banner para corpo;
- criação de tabela para exbir recuperados do localstore;
- criação de rodapé com dados em empresa ficticia;

● cadastro.html:
- criado formulário com: 
 - Input tipo data para representar a data do cadastro veículo; (requisito cumprido)
 - Input tipo radio para representar a marca do veículo; (requisito cumprido)
 - Input tipo text para representar o modelo do veículo; (requisito cumprido)
 - Input tipo text para representar a cor do veículo; 
 - Input tipo number para representar o ano do veículo; (requisito cumprido)
 - Input tipo number para representar o valor do veículo; (requisito cumprido)
 - Input tipo checkbox para representar acessorios do veículo; (requisito cumprido)
 - Select para representar o tipo câmbio do veículo; 
 - Botão Salvar com emoji; (requisito cumprido)

 ● script.js:

  - Realizada a classe com um contador id incremental;
  - salvar para inserção no local storage após um alerta;
  - Tratamento class para input receber letras maiúscula;
  - Tratamento class para input receber 4 dígitos (usado em ano);
  - document.addEventListener('DOMContentLoaded', function () ) (usado para carregar o javascript após o carregamento do html)
  - Função get(marca) para se usuário escolher uma marca não pré-estabelecida, nos inputs tipos radio, mostrar um input tipo text para digitar outra marca;
- condição SE salvar inserir os valores digitados;
- lógica se para inserir os valores dos input tipos checkbox. Se não for checado não será inserido vazio;
- lógica para validação nos input, exceto os acessórios;
- lógica que se o valor for salvo no localstorage limpar ou manter campos;
- Função para recuperar dados do localstore;
- Função ordenar e criar tabela;
   - Tratamento de data (mostrar formato Brasil);
   - Concatenar os acessórios e separar por virgula;
- lógica para chamar função apenas se tiver id=tabela_veiculos (evita mostrar erro no arquivo cadastro);


### 📋 Pré-requisitos

- Navegadores com suporte para localstorage e javascript.

### 🔧 Instalação

- Manter os arquivos nas suas estruturas de diretório, a fim de a segurar sua respectiva chamada na codificação correto;

## ⚙️ Executando os testes

- Aplicado teste execução nos navegadores:
  - Google Chorme Versão 123.0.6312.86;
  - Microsoft Edge Versão 122.0.2365.92;
  - Mozilla Firefox Versão 124.0.1.

### 🔩 Analise os testes de ponta a ponta

- Inseridos os dados e recuperados todos navegadores;
- Microsoft Edge e Mozilla Firefox respeitou a validação do JS e não do required no html;


## 🛠️ Construído com

* [VisualStudioCode] - Codificação (html, javascript, css);
* [Canva](https://www.canva.com/pt_br/) - Criação do logo;
* [Guimp] - Formatar imagem (transparencia e redimencionamento);

## 🖇️ Colaborando

* [youtube] https://www.youtube.com/watch?v=Rkw6D4s8Vmk&list=PLmY5AEiqDWwA_hbsX4b111SnFqAnEEkAP - Celke playlist localstorage;
* [apoio] - Referências de Apoio;


## ✒️ Autores

Alexandre Antônio Barelli

https://github.com/alexandreBarelli

* **Alexandre Antônio Barelli** - *Primeiro Trabalho da Disciplina* - [alexandreBarelli](https://github.com/alexandreBarelli)

## 📄 Licença

Este projeto está sob a licença de Alexandre Antônio Barelli - veja o arquivo [README.md](https://github.com/alexandreBarelli) para detalhes.

## 🎁 Expressões de gratidão

* Aproveito a oportunidade para renovar protestos de estima e consideração ao Senhor Prof. Ms. Ricardo Leme;

---