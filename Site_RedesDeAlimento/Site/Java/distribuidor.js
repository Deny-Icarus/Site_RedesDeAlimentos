document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu-link");
    const tabs = document.querySelectorAll(".tab-content");
    const formDoacao = document.getElementById("form-doacao");
    const tabelaDoacoes = document.getElementById("tabela-doacoes").querySelector("tbody");
    let contadorId = 1;
  
    // Função para alternar abas
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
  
        // Remover 'active' de todas as abas
        tabs.forEach(tab => tab.classList.remove("active"));
  
        // Adicionar 'active' à aba clicada
        const target = document.querySelector(link.getAttribute("href"));
        target.classList.add("active");
      });
    });
  
    // Função para adicionar doações
    formDoacao.addEventListener("submit", event => {
      event.preventDefault();
  
      const item = document.getElementById("item").value;
      const validade = document.getElementById("validade").value;
      const data = new Date().toLocaleDateString();
  
      // Criar nova linha na tabela
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td>${contadorId++}</td>
        <td>${item}</td>
        <td>${validade}</td>
        <td>Disponível</td>
        <td>${data}</td>
      `;
  
      tabelaDoacoes.appendChild(novaLinha);
  
      // Limpar formulário
      formDoacao.reset();
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const fotoPerfilInput = document.getElementById("foto-perfil");
    const profilePic = document.querySelector(".profile-pic");
  
    fotoPerfilInput.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          profilePic.style.backgroundImage = `url(${e.target.result})`;
        };
  
        reader.readAsDataURL(file);
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const formEditarPerfil = document.getElementById("form-editar-perfil");
    const nomeElemento = document.querySelector("#perfil p strong + span");
    const instituicaoElemento = document.querySelector("#perfil p:nth-child(2) strong + span");
    const telefoneElemento = document.querySelector("#perfil p:nth-child(3) strong + span");
    const emailElemento = document.querySelector("#perfil p:nth-child(4) strong + span");
  
    // Preenchendo o formulário com as informações atuais
    formEditarPerfil.nome.value = nomeElemento.innerText;
    formEditarPerfil.instituicao.value = instituicaoElemento.innerText;
    formEditarPerfil.telefone.value = telefoneElemento.innerText;
    formEditarPerfil.email.value = emailElemento.innerText;
  
    // Função para atualizar as informações do perfil
    formEditarPerfil.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Atualizando os valores exibidos na página
      nomeElemento.innerText = formEditarPerfil.nome.value;
      instituicaoElemento.innerText = formEditarPerfil.instituicao.value;
      telefoneElemento.innerText = formEditarPerfil.telefone.value;
      emailElemento.innerText = formEditarPerfil.email.value;
  
      alert("Informações do perfil atualizadas com sucesso!");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const formAvaliacao = document.getElementById("form-avaliacao");
    const avaliacoesList = document.getElementById("avaliacoes-list");
  
    formAvaliacao.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Pegando os valores dos campos
      const disponibilidade = document.getElementById("disponibilidade").value;
      const ajuda = document.getElementById("ajuda").value;
      const classificacao = document.querySelector("input[name='classificacao']:checked");
  
      if (!classificacao) {
        alert("Por favor, selecione uma classificação.");
        return;
      }
  
      // Criando um novo item de avaliação
      const novaAvaliacao = document.createElement("li");
      novaAvaliacao.innerHTML = `
        <h4>Classificação: ${"★".repeat(classificacao.value)}</h4>
        <p><strong>Disponibilidade:</strong> ${disponibilidade}</p>
        <p><strong>Ajuda:</strong> ${ajuda}</p>
      `;
  
      // Adicionando a avaliação à lista
      avaliacoesList.appendChild(novaAvaliacao);
  
      // Limpando o formulário
      formAvaliacao.reset();
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar as doações e distribuições, simulação com dados estáticos
    const doacoes = [
      { id: 1, item: 'Arroz', validade: '2024-12-10', quantidade: 100, status: 'Recebido', data: '2024-12-01' },
      { id: 2, item: 'Feijão', validade: '2024-12-15', quantidade: 200, status: 'Recebido', data: '2024-12-02' }
    ];
  
    const distribuicoes = [
      { id: 1, item: 'Arroz', quantidade: 50, local: 'Rua A', data: '2024-12-02' },
      { id: 2, item: 'Feijão', quantidade: 100, local: 'Rua B', data: '2024-12-03' }
    ];
  
    // Função para preencher a tabela de doações
    function preencherTabelaDoacoes() {
      const tabela = document.querySelector('#tabela-doacoes tbody');
      tabela.innerHTML = '';
      doacoes.forEach(doacao => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${doacao.id}</td>
          <td>${doacao.item}</td>
          <td>${doacao.validade}</td>
          <td>${doacao.quantidade}</td>
          <td>${doacao.status}</td>
          <td>${doacao.data}</td>
        `;
        tabela.appendChild(tr);
      });
    }
  
    // Função para preencher a tabela de distribuições
    function preencherTabelaDistribuicoes() {
      const tabela = document.querySelector('#tabela-distribuicao tbody');
      tabela.innerHTML = '';
      distribuicoes.forEach(distribuicao => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${distribuicao.id}</td>
          <td>${distribuicao.item}</td>
          <td>${distribuicao.quantidade}</td>
          <td>${distribuicao.local}</td>
          <td>${distribuicao.data}</td>
        `;
        tabela.appendChild(tr);
      });
    }
  
    preencherTabelaDoacoes();
    preencherTabelaDistribuicoes();
  });
  