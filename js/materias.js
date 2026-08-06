const materias = {

  circuito1: {
    numero: "01",
    nome: "CIRCUITO I",
    titulo: "CIRCUITO I - FUNDAMENTOS DA ELETRICIDADE",
    subtitulo: "Fundamentos da Eletricidade",

    conteudos: [
      ["Átomo", "Estrutura da matéria e conceitos fundamentais sobre o átomo.", "fa-atom"],
      ["Sentido Convencional e Real", "Diferença entre o sentido convencional e o sentido real da corrente.", "fa-arrow-right-arrow-left"],
      ["Corrente Elétrica (CA e CC)", "Corrente contínua e corrente alternada.", "fa-bolt"],
      ["Grandezas Elétricas", "Principais grandezas elétricas e suas unidades.", "fa-wave-square"],
      ["Resistência Elétrica", "Conceito de resistência elétrica e seus fatores.", "fa-omega"],
      ["Tensão", "Diferença de potencial elétrico.", "fa-bolt"],
      ["Resistência de Materiais", "Propriedades dos materiais relacionadas à resistência.", "fa-cubes"],
      ["Associação de Resistores", "Associação de resistores em série e paralelo.", "fa-diagram-project"],
      ["Resistor", "Características, identificação e aplicações.", "fa-microchip"],
      ["Multímetro", "Instrumento utilizado para medições elétricas.", "fa-gauge-high"],
      ["Tabela de Cores", "Código de cores utilizado em resistores.", "fa-palette"],
      ["Múltiplos e Submúltiplos", "Prefixos e conversões das grandezas elétricas.", "fa-scale-balanced"],
      ["Potência Elétrica", "Relação entre tensão, corrente e potência.", "fa-bolt"],
      ["Geradores de Energia e seus Tipos", "Princípios e tipos de geradores.", "fa-charging-station"],
      ["Eficiência ou Rendimento", "Relação entre energia útil e energia fornecida.", "fa-percent"],
      ["Energia Elétrica", "Conceitos de energia e consumo elétrico.", "fa-plug"],
      ["Leis de Kirchhoff", "Leis fundamentais para análise de circuitos.", "fa-diagram-project"]
    ]
  },


  circuito2: {
    numero: "02",
    nome: "CIRCUITO II",
    titulo: "CIRCUITO II - ELETROMAGNETISMO E CA",
    subtitulo: "Eletromagnetismo e Corrente Alternada",

    conteudos: [
      ["Magnetismo e Eletromagnetismo", "Campos magnéticos e sua relação com a eletricidade.", "fa-magnet"],
      ["Indução Eletromagnética", "Princípios da indução e geração de tensão.", "fa-bolt"],
      ["Corrente Alternada e Contínua", "Diferenças e aplicações de CA e CC.", "fa-wave-square"],
      ["Onda Senoidal", "Características e representação da onda senoidal.", "fa-wave-square"],
      ["Valores Característicos", "Pico, pico a pico, eficaz, instantâneo, médio e RMS.", "fa-chart-line"],
      ["Forma de Onda", "Representação gráfica dos sinais elétricos.", "fa-chart-area"],
      ["Frequência", "Quantidade de ciclos por unidade de tempo.", "fa-arrows-rotate"],
      ["Indutor - Série ou Paralelo", "Funcionamento e associação de indutores.", "fa-wave-square"],
      ["Associação de Indutores", "Cálculo de indutores associados.", "fa-link"],
      ["Impedância", "Oposição total oferecida por um circuito em CA.", "fa-z"],
      ["Capacitor - Série ou Paralelo", "Funcionamento e associação de capacitores.", "fa-battery-half"],
      ["Associação de Capacitores", "Cálculo de capacitância equivalente.", "fa-link"],
      ["Constante", "Constantes utilizadas na análise dos circuitos.", "fa-calculator"],
      ["Transformadores", "Relação de transformação, tensão, corrente, potência, frequência, impedância e rendimento.", "fa-bolt"],
      ["Ressonância", "Comportamento dos circuitos na condição de ressonância.", "fa-wave-square"],
      ["Frequência de Ressonância", "Frequência na qual ocorre a ressonância.", "fa-arrows-to-circle"],
      ["Período", "Intervalo necessário para completar um ciclo.", "fa-clock"],
      ["Associação de Capacitores e Indutores", "Análise de componentes reativos associados.", "fa-diagram-project"],
      ["Consumo de Energia Elétrica", "Cálculo e análise do consumo de energia.", "fa-plug"]
    ]
  },


  sep: {
    numero: "03",
    nome: "SEP",
    titulo: "SEP - SISTEMAS ELÉTRICOS DE POTÊNCIA",
    subtitulo: "Sistemas Elétricos de Potência",

    conteudos: [
      ["Introdução ao SEP", "Conceitos fundamentais dos sistemas elétricos de potência.", "fa-bolt"],
      ["Geração de Energia Elétrica", "Fontes e processos de geração de energia.", "fa-industry"],
      ["Transformadores de Potência", "Funcionamento, tipos e aplicações.", "fa-bolt"],
      ["Linhas de Transmissão e Distribuição", "Estruturas, parâmetros e operação.", "fa-tower-broadcast"],
      ["Proteção de Sistemas Elétricos", "Dispositivos e sistemas de proteção.", "fa-shield-halved"],
      ["Aterramento Elétrico", "Tipos de aterramento e aplicações.", "fa-plug"],
      ["Curto-Circuito", "Análise e fundamentos de curto-circuito.", "fa-triangle-exclamation"],
      ["Coordenação de Proteção", "Seletividade e ajustes das proteções.", "fa-shield"],
      ["Compensação de Reativos", "Correção e controle do fator de potência.", "fa-wave-square"],
      ["Motores de Alta Potência", "Métodos de partida e aplicações.", "fa-gears"]
    ]
  },


  "manutencao-sep": {
    numero: "04",
    nome: "MANUTENÇÃO DE SEP",
    titulo: "MANUTENÇÃO DE SEP",
    subtitulo: "Manutenção de Sistemas Elétricos de Potência",

    conteudos: [
      ["Manutenção Preventiva", "Planejamento de inspeções e intervenções.", "fa-calendar-check"],
      ["Manutenção Preditiva", "Monitoramento das condições dos equipamentos.", "fa-chart-line"],
      ["Manutenção Corretiva", "Procedimentos para correção de falhas.", "fa-screwdriver-wrench"],
      ["Inspeção de Equipamentos", "Rotinas de inspeção em equipamentos do SEP.", "fa-magnifying-glass"],
      ["Ensaios Elétricos", "Ensaios utilizados na manutenção elétrica.", "fa-vial"],
      ["Segurança na Manutenção", "Procedimentos de segurança durante intervenções.", "fa-triangle-exclamation"]
    ]
  },


  "instalacoes-industriais": {
    numero: "05",
    nome: "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS",
    titulo: "INSTALAÇÕES ELÉTRICAS INDUSTRIAIS",
    subtitulo: "Projetos e Execução",

    conteudos: [
      ["Introdução às Instalações Industriais", "Fundamentos das instalações elétricas industriais.", "fa-industry"],
      ["Diagramas Elétricos", "Representação de circuitos e instalações.", "fa-diagram-project"],
      ["Dimensionamento de Condutores", "Critérios para escolha dos condutores.", "fa-ruler"],
      ["Proteções Elétricas", "Disjuntores, fusíveis e dispositivos de proteção.", "fa-shield-halved"],
      ["Motores Elétricos", "Aplicações de motores em instalações industriais.", "fa-gears"],
      ["Comandos Elétricos", "Circuitos de comando e força.", "fa-toggle-on"]
    ]
  },


  "manutencao-industriais": {
    numero: "06",
    nome: "MANUTENÇÃO DE INSTALAÇÕES ELÉTRICAS INDUSTRIAIS",
    titulo: "MANUTENÇÃO DE INSTALAÇÕES ELÉTRICAS INDUSTRIAIS",
    subtitulo: "Diagnóstico e Correção",

    conteudos: [
      ["Diagnóstico de Falhas", "Identificação sistemática de problemas elétricos.", "fa-magnifying-glass"],
      ["Manutenção Preventiva", "Rotinas para reduzir falhas e paradas.", "fa-calendar-check"],
      ["Manutenção Corretiva", "Correção de falhas em instalações industriais.", "fa-screwdriver-wrench"],
      ["Inspeção Elétrica", "Inspeções visuais e técnicas.", "fa-eye"],
      ["Testes e Medições", "Utilização de instrumentos para diagnóstico.", "fa-gauge-high"],
      ["Segurança em Manutenção", "Procedimentos de segurança durante intervenções.", "fa-triangle-exclamation"]
    ]
  }
};


/* ============================================================
   ESTADO
============================================================ */

let materiaAtual = "circuito1";
let conteudoAtual = 0;


/* ============================================================
   ELEMENTOS DA PÁGINA
============================================================ */

const carousel = document.getElementById("disciplinasCarousel");
const materiaCards = document.querySelectorAll(".disciplina-card");

const conteudosGrid = document.getElementById("conteudosGrid");
const materiaTitle = document.getElementById("materiaTitle");
const contentCount = document.getElementById("contentCount");

const lessonOverlay = document.getElementById("lessonOverlay");
const lessonList = document.getElementById("lessonList");
const lessonBody = document.getElementById("lessonBody");

const lessonMateriaNumber =
  document.getElementById("lessonMateriaNumber");

const lessonMateriaName =
  document.getElementById("lessonMateriaName");

const lessonMateriaSubtitle =
  document.getElementById("lessonMateriaSubtitle");

const lessonNumber =
  document.getElementById("lessonNumber");

const lessonTitle =
  document.getElementById("lessonTitle");

const scrollProgress =
  document.getElementById("scrollProgress");


/* ============================================================
   VERIFICAÇÃO
   Evita erro caso algum elemento ainda não exista na página.
============================================================ */

if (!carousel || !conteudosGrid) {
  console.warn(
    "Materias.js: elementos principais da página não foram encontrados."
  );
}


/* ============================================================
   RENDERIZAÇÃO DOS CARDS
============================================================ */

function renderConteudos() {

  if (!conteudosGrid) return;

  const materia = materias[materiaAtual];

  if (!materia) return;

  if (materiaTitle) {
    materiaTitle.textContent = materia.titulo;
  }

  if (contentCount) {
    contentCount.textContent =
      `${materia.conteudos.length} conteúdos`;
  }

  conteudosGrid.innerHTML = "";

  materia.conteudos.forEach((item, index) => {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "conteudo-card";

    card.innerHTML = `
      <span class="conteudo-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <span class="conteudo-icon">
        <i class="fa-solid ${item[2]}"></i>
      </span>

      <h3>${item[0]}</h3>

      <p>${item[1]}</p>

      <span class="conteudo-open">
        <i class="fa-solid fa-arrow-right"></i>
      </span>
    `;

    card.addEventListener("click", () => {
      abrirConteudo(index);
    });

    conteudosGrid.appendChild(card);
  });
}


/* ============================================================
   SELECIONAR MATÉRIA
============================================================ */

function selecionarMateria(id) {

  if (!materias[id]) {
    console.warn(`Matéria "${id}" não encontrada.`);
    return;
  }

  materiaAtual = id;

  materiaCards.forEach(card => {

    card.classList.toggle(
      "active",
      card.dataset.materia === id
    );

  });

  renderConteudos();

}


/* ============================================================
   EVENTOS DOS CARDS DE MATÉRIA
============================================================ */

materiaCards.forEach(card => {

  card.addEventListener("click", () => {

    const materia = card.dataset.materia;

    selecionarMateria(materia);

  });

});


/* ============================================================
   ABRIR CONTEÚDO
============================================================ */

function abrirConteudo(index) {

  const materia = materias[materiaAtual];

  if (!materia) return;

  if (!materia.conteudos[index]) return;

  conteudoAtual = index;

  const conteudo = materia.conteudos[index];

  if (lessonMateriaNumber) {
    lessonMateriaNumber.textContent = materia.numero;
  }

  if (lessonMateriaName) {
    lessonMateriaName.textContent = materia.nome;
  }

  if (lessonMateriaSubtitle) {
    lessonMateriaSubtitle.textContent = materia.subtitulo;
  }

  if (lessonNumber) {
    lessonNumber.textContent =
      String(index + 1).padStart(2, "0");
  }

  if (lessonTitle) {
    lessonTitle.textContent = conteudo[0];
  }

  renderLessonList();
  renderLessonBody(conteudo);

  if (lessonOverlay) {

    lessonOverlay.classList.add("open");

    lessonOverlay.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";
  }
}


/* ============================================================
   FECHAR CONTEÚDO
============================================================ */

function fecharConteudo() {

  if (!lessonOverlay) return;

  lessonOverlay.classList.remove("open");

  lessonOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


/* ============================================================
   LISTA LATERAL DO PAINEL
============================================================ */

function renderLessonList() {

  if (!lessonList) return;

  const materia = materias[materiaAtual];

  if (!materia) return;

  lessonList.innerHTML = "";

  materia.conteudos.forEach((item, index) => {

    const button = document.createElement("button");

    button.type = "button";

    button.className =
      index === conteudoAtual
        ? "active"
        : "";

    button.textContent =
      `${String(index + 1).padStart(2, "0")}  ${item[0]}`;

    button.addEventListener("click", () => {
      abrirConteudo(index);
    });

    lessonList.appendChild(button);

  });
}


/* ============================================================
   CORPO DO CONTEÚDO
============================================================ */

function renderLessonBody(item) {

  if (!lessonBody) return;

  lessonBody.innerHTML = `
    <div class="lesson-body">

      <p>
        <strong>${item[0]}</strong> é um dos conteúdos da
        formação em Eletrotécnica 2026.
      </p>

      <h3>CONCEITO</h3>

      <p>
        ${item[1]}
      </p>

      <p>
        Nesta área será inserido o conteúdo completo da aula,
        incluindo explicações, conceitos técnicos, exemplos,
        fórmulas e aplicações práticas.
      </p>

      <div class="lesson-highlight">

        <strong>CONTEÚDO PROGRAMÁTICO</strong>

        <ul>
          <li>Definições fundamentais de ${item[0].toLowerCase()}.</li>
          <li>Principais características.</li>
          <li>Aplicações na área de Eletrotécnica.</li>
          <li>Relação com outros conteúdos.</li>
        </ul>

      </div>

      <h3>APLICAÇÕES PRÁTICAS</h3>

      <p>
        Este espaço poderá receber posteriormente imagens,
        diagramas elétricos, exercícios, cálculos, tabelas,
        PDFs e materiais complementares.
      </p>

    </div>
  `;
}


/* ============================================================
   BOTÕES ANTERIOR / PRÓXIMO
============================================================ */

const lessonPrevious =
  document.getElementById("lessonPrevious");

const lessonNext =
  document.getElementById("lessonNext");


if (lessonPrevious) {

  lessonPrevious.addEventListener("click", () => {

    if (conteudoAtual > 0) {
      abrirConteudo(conteudoAtual - 1);
    }

  });

}


if (lessonNext) {

  lessonNext.addEventListener("click", () => {

    const materia = materias[materiaAtual];

    if (!materia) return;

    if (
      conteudoAtual <
      materia.conteudos.length - 1
    ) {
      abrirConteudo(conteudoAtual + 1);
    }

  });

}


/* ============================================================
   FECHAR PAINEL
============================================================ */

const lessonClose =
  document.getElementById("lessonClose");

const backList =
  document.getElementById("backList");


if (lessonClose) {
  lessonClose.addEventListener(
    "click",
    fecharConteudo
  );
}


if (backList) {
  backList.addEventListener(
    "click",
    fecharConteudo
  );
}


/* ============================================================
   CLICAR FORA DO PAINEL
============================================================ */

if (lessonOverlay) {

  lessonOverlay.addEventListener("click", event => {

    if (event.target === lessonOverlay) {
      fecharConteudo();
    }

  });

}


/* ============================================================
   TECLADO
============================================================ */

document.addEventListener("keydown", event => {

  if (
    lessonOverlay &&
    lessonOverlay.classList.contains("open")
  ) {

    if (event.key === "Escape") {
      fecharConteudo();
    }

    if (event.key === "ArrowRight") {

      if (lessonNext) {
        lessonNext.click();
      }

    }

    if (event.key === "ArrowLeft") {

      if (lessonPrevious) {
        lessonPrevious.click();
      }

    }

  }

});


/* ============================================================
   CARROSSEL — PRÓXIMO
============================================================ */

const carouselNext =
  document.querySelector(".carousel-next");


if (carouselNext && carousel) {

  carouselNext.addEventListener("click", () => {

    carousel.scrollBy({
      left: 450,
      behavior: "smooth"
    });

  });

}


/* ============================================================
   CARROSSEL — ANTERIOR
============================================================ */

const carouselPrev =
  document.querySelector(".carousel-prev");


if (carouselPrev && carousel) {

  carouselPrev.addEventListener("click", () => {

    carousel.scrollBy({
      left: -450,
      behavior: "smooth"
    });

  });

}


/* ============================================================
   BARRA DE PROGRESSO DO CARROSSEL
============================================================ */

function atualizarProgressoCarrossel() {

  if (!carousel || !scrollProgress) return;

  const larguraTotal =
    carousel.scrollWidth;

  const larguraVisivel =
    carousel.clientWidth;

  const limite =
    larguraTotal - larguraVisivel;

  if (limite <= 0) {

    scrollProgress.style.width = "100%";

    return;
  }

  const porcentagemVisivel =
    (larguraVisivel / larguraTotal) * 100;

  const porcentagemPosicao =
    (carousel.scrollLeft / limite) *
    (100 - porcentagemVisivel);

  scrollProgress.style.width =
    `${porcentagemVisivel + porcentagemPosicao}%`;
}


if (carousel) {

  carousel.addEventListener(
    "scroll",
    atualizarProgressoCarrossel
  );

}


window.addEventListener(
  "resize",
  atualizarProgressoCarrossel
);


/* ============================================================
   VER TODOS OS CONTEÚDOS
============================================================ */

const allContentBtn =
  document.getElementById("allContentBtn");


if (allContentBtn) {

  allContentBtn.addEventListener("click", () => {

    const section =
      document.getElementById("conteudosSection");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

}


/* ============================================================
   INICIALIZAÇÃO
============================================================ */

selecionarMateria(materiaAtual);

atualizarProgressoCarrossel();


/* ============================================================
   DISPONIBILIZA FUNÇÕES GLOBALMENTE
   Útil caso o HTML atual precise chamar alguma delas.
============================================================ */

window.materias = materias;
window.selecionarMateria = selecionarMateria;
window.abrirConteudo = abrirConteudo;
window.fecharConteudo = fecharConteudo;
'''

js_path.write_text(js, encoding="utf-8")

print(f"Arquivo recriado com sucesso: {js_path}")
print(f"Tamanho: {js_path.stat().st_size:,} bytes")