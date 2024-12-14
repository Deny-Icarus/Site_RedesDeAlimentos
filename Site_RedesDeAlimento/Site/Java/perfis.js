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
