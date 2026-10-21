/* Busca global — Eletrotécnica 2026 */
(() => {
  const paginas = [
    {
      titulo: "Início",
      url: "index.html",
      descricao: "Central de estudos da turma de Eletrotécnica 2026.",
      termos: "início home turma eletrotécnica 2026 portal estudos"
    },
    {
      titulo: "Matérias da formação",
      url: "materias.html",
      descricao: "Conteúdos das disciplinas organizados por módulos.",
      termos: "matérias módulos circuito eletricidade eletromagnetismo sep potência manutenção instalações indústria segurança"
    },
    {
      titulo: "Ferramentas elétricas",
      url: "ferramentas.html",
      descricao: "Calculadoras, conversores e fórmulas para os estudos.",
      termos: "ferramentas lei de ohm potência resistores trifásico queda tensão energia consumo conversor unidades fórmulas"
    },
    {
      titulo: "Normas técnicas",
      url: "normas.html",
      descricao: "NBR, NR e IEC relacionadas à área elétrica.",
      termos: "normas nbr abnt nr nr-10 iec 5410 14039 5419 segurança instalações proteção spda"
    },
    {
      titulo: "SENAI e serviços da turma",
      url: "senai.html",
      descricao: "Portais, serviços e informações do curso no SENAI.",
      termos: "senai portal aluno fiemg biblioteca ambiente virtual curso"
    },
    {
      titulo: "Sobre a turma",
      url: "sobre.html",
      descricao: "Trajetória, objetivo e integrantes da turma.",
      termos: "sobre alunos professores trajetória objetivo turma contato"
    }
  ];

  function normalizar(texto) {
    return texto
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function abrirBusca() {
    let modal = document.getElementById("busca-modal");

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "busca-modal";
      modal.className = "busca-modal";
      modal.innerHTML = `
        <div class="busca-dialog" role="dialog" aria-modal="true" aria-labelledby="busca-titulo">
          <div class="busca-dialog-header">
            <div>
              <span class="busca-label">PESQUISA</span>
              <h2 id="busca-titulo">Buscar no site</h2>
            </div>
            <button class="busca-fechar" type="button" aria-label="Fechar busca">×</button>
          </div>
          <label class="busca-campo">
            <span aria-hidden="true">⌕</span>
            <input id="busca-input" type="search" placeholder="Digite uma matéria, fórmula ou norma..." autocomplete="off">
          </label>
          <p class="busca-ajuda">Pesquise por nome, assunto ou palavra-chave.</p>
          <div id="busca-resultados" class="busca-resultados" aria-live="polite"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (evento) => {
        if (evento.target === modal) fecharBusca();
      });
      modal.querySelector(".busca-fechar").addEventListener("click", fecharBusca);
    }

    modal.classList.add("aberta");
    const input = modal.querySelector("#busca-input");
    input.value = "";
    renderizarResultados("");
    window.setTimeout(() => input.focus(), 50);
  }

  function fecharBusca() {
    document.getElementById("busca-modal")?.classList.remove("aberta");
  }

  function renderizarResultados(termo) {
    const container = document.getElementById("busca-resultados");
    if (!container) return;

    const busca = normalizar(termo.trim());
    const encontrados = busca
      ? paginas.filter((pagina) => normalizar(`${pagina.titulo} ${pagina.descricao} ${pagina.termos}`).includes(busca))
      : paginas;

    if (!encontrados.length) {
      container.innerHTML = `<p class="busca-vazio">Nenhum resultado encontrado. Tente outro termo.</p>`;
      return;
    }

    container.innerHTML = encontrados.map((pagina) => `
      <a class="busca-resultado" href="${pagina.url}">
        <span class="busca-resultado-icone">→</span>
        <span><strong>${pagina.titulo}</strong><small>${pagina.descricao}</small></span>
      </a>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-btn").forEach((botao) => {
      botao.addEventListener("click", abrirBusca);
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") fecharBusca();
      if ((evento.ctrlKey || evento.metaKey) && evento.key.toLowerCase() === "k") {
        evento.preventDefault();
        abrirBusca();
      }
    });

    document.addEventListener("input", (evento) => {
      if (evento.target.id === "busca-input") renderizarResultados(evento.target.value);
    });
  });
})();
