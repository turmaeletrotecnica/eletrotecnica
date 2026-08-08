/* =========================================================
   MATÉRIAS
   ELETROTÉCNICA 2026
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     ELEMENTOS
  ======================================================= */

  const materiasGrid = document.getElementById("materias-grid");

  const materiasCount = document.getElementById("materias-count");

  const conteudoSection = document.getElementById("conteudo-section");

  const conteudoLista = document.getElementById("conteudo-lista");

  const sidebarNumero = document.getElementById("sidebar-numero");

  const sidebarMateria = document.getElementById("sidebar-materia");

  const sidebarDescricao = document.getElementById("sidebar-descricao");

  const conteudoNumero = document.getElementById("conteudo-numero");

  const conteudoTitulo = document.getElementById("conteudo-titulo");

  const conteudoDescricao = document.getElementById("conteudo-descricao");

  const conteudoTexto = document.getElementById("conteudo-texto");

  const btnAnterior = document.getElementById("btn-anterior");

  const btnProximo = document.getElementById("btn-proximo");

  const btnVoltar = document.getElementById("btn-voltar");

  const btnFechar = document.getElementById("conteudo-fechar");

  /* =======================================================
     ESTADO
  ======================================================= */

  let materias = [];

  let materiaAtual = null;

  let conteudoAtual = 0;

  /* =======================================================
     CARREGAR JSON
  ======================================================= */

  async function carregarMaterias() {
    try {
      const resposta = await fetch("./JSON/materias.json");

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      const dados = await resposta.json();

      materias = dados.materias || [];

      renderizarMaterias();
    } catch (erro) {
      console.error("Erro ao carregar matérias:", erro);

      materiasGrid.innerHTML = `

        <div class="materias-erro">

          <strong>
            Não foi possível carregar as matérias.
          </strong>

          <p>
            Verifique o caminho do arquivo
            materias.json.
          </p>

        </div>

      `;
    }
  }

  /* =======================================================
     RENDERIZAR MATÉRIAS
  ======================================================= */

  function renderizarMaterias() {
    materiasGrid.innerHTML = "";

    materiasCount.textContent = `${materias.length} matérias`;

    materias.forEach((materia) => {
      const card = document.createElement("article");

      card.className = "materia-card";

      card.dataset.id = materia.id;

      card.innerHTML = `

        <span class="materia-numero">
          ${materia.numero}
        </span>

        <h3>
          ${materia.nome}
        </h3>

        <p>
          ${materia.descricao}
        </p>

        <span class="materia-arrow">
          →
        </span>

      `;

      card.addEventListener("click", () => abrirMateria(materia.id));

      materiasGrid.appendChild(card);
    });
  }

  /* =======================================================
     ABRIR MATÉRIA
  ======================================================= */

  function abrirMateria(id) {
    const materia = materias.find((item) => item.id === id);

    if (!materia) return;

    materiaAtual = materia;

    conteudoAtual = 0;

    /* Atualiza cards */

    document.querySelectorAll(".materia-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.id === id);
    });

    /* Atualiza sidebar */

    sidebarNumero.textContent = materia.numero;

    sidebarMateria.textContent = materia.nome;

    sidebarDescricao.textContent = materia.descricao;

    /* Renderiza lista */

    renderizarLista();

    /* Abre primeiro conteúdo */

    abrirConteudo(0);

    /* Exibe painel */

    conteudoSection.classList.add("open");

    /* Scroll suave */

    setTimeout(() => {
      conteudoSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  /* =======================================================
     RENDERIZAR LISTA LATERAL
  ======================================================= */

  function renderizarLista() {
    conteudoLista.innerHTML = "";

    materiaAtual.conteudos.forEach((item, index) => {
      const button = document.createElement("button");

      button.className = "conteudo-item";

      button.dataset.index = index;

      button.innerHTML = `

          <span>
            ${String(index + 1).padStart(2, "0")}
          </span>

          <strong>
            ${item.titulo}
          </strong>

        `;

      button.addEventListener("click", () => abrirConteudo(index));

      conteudoLista.appendChild(button);
    });
  }

  /* =======================================================
     ABRIR CONTEÚDO
  ======================================================= */

  function abrirConteudo(index) {
    if (!materiaAtual) return;

    const lista = materiaAtual.conteudos;

    if (!lista[index]) return;

    conteudoAtual = index;

    const item = lista[index];

    /* Número */

    conteudoNumero.textContent = String(item.id).padStart(2, "0");

    /* Título */

    conteudoTitulo.textContent = item.titulo;

    /* Descrição */

    conteudoDescricao.textContent = item.descricao;

    /* Texto */

    conteudoTexto.innerHTML = "";

    if (Array.isArray(item.conteudo)) {
      item.conteudo.forEach((paragrafo) => {
        const p = document.createElement("p");

        p.textContent = paragrafo;

        conteudoTexto.appendChild(p);
      });
    }

    /* Ativar item lateral */

    document.querySelectorAll(".conteudo-item").forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });

    /* Botões */

    atualizarNavegacao();
  }

  /* =======================================================
     NAVEGAÇÃO
  ======================================================= */

  function atualizarNavegacao() {
    const total = materiaAtual.conteudos.length;

    btnAnterior.disabled = conteudoAtual === 0;

    btnProximo.disabled = conteudoAtual === total - 1;
  }

  /* =======================================================
     ANTERIOR
  ======================================================= */

  btnAnterior.addEventListener("click", () => {
    if (conteudoAtual > 0) {
      abrirConteudo(conteudoAtual - 1);
    }
  });

  /* =======================================================
     PRÓXIMO
  ======================================================= */

  btnProximo.addEventListener("click", () => {
    if (materiaAtual && conteudoAtual < materiaAtual.conteudos.length - 1) {
      abrirConteudo(conteudoAtual + 1);
    }
  });

  /* =======================================================
     VOLTAR PARA LISTA
  ======================================================= */

  btnVoltar.addEventListener("click", fecharConteudo);

  btnFechar.addEventListener("click", fecharConteudo);

  function fecharConteudo() {
    conteudoSection.classList.remove("open");

    document.querySelectorAll(".materia-card").forEach((card) => {
      card.classList.remove("active");
    });

    materiaAtual = null;
  }

  /* =======================================================
     INICIAR
  ======================================================= */

  carregarMaterias();
});
