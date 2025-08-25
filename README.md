# 📑 O.S Generator

Gerador de **Ordem de Serviço (O.S)** via formulário simples e intuitivo.
O sistema coleta informações essenciais para geração de scripts de O.S, como dados de contato, tratativas realizadas e informações técnicas de equipamentos.

## 🚧 Status do Projeto

> ⚠️ **Em desenvolvimento** – funcionalidades ainda em construção.

## ✨ Funcionalidades

* Formulário com perguntas predefinidas, incluindo:

  * **Dificuldade relatada**
  * **Informações de contato** (nome e telefone)
  * **Tratativa realizada**
  * **Quantidade de quedas**
  * **Sinal da ONU no sistema**
  * **Informações do equipamento** (roteador/ONU, comodato ou compra)
  * **Último atendimento / Ordem de serviço anterior**
* **Armazenamento local**: os dados são salvos automaticamente no **cache do navegador (localStorage)**, permitindo recuperação mesmo após atualizar a página.
* Geração automática de script formatado para O.S.

## 🛠️ Tecnologias Utilizadas

* **Frontend**: HTML, CSS, JavaScript
* **Armazenamento**: LocalStorage (cache do navegador)

## 🚀 Como Rodar Localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/os-generator.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd os-generator
   ```
3. Abra o arquivo `index.html` no navegador.
4. Preencha o formulário – as informações ficarão salvas no cache/localStorage do navegador.

## 📌 Próximos Passos

* Finalizar lógica de formatação do script
* Adicionar opção de **exportar dados** (ex.: copiar para área de transferência, exportar PDF ou TXT)
* Criar versão com **backend** opcional para salvar histórico de atendimentos em banco de dados
* Melhorar interface do usuário (UI/UX)

## 🤝 Contribuições

Sinta-se à vontade para abrir *issues* ou enviar *pull requests*.

## 📄 Licença

Este projeto está sob a licença MIT.
