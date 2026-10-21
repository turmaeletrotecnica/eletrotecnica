document.addEventListener("DOMContentLoaded", () => {

  const busca = document.querySelector("#normaBusca");
  const categoria = document.querySelector("#normaCategoria");

  const cards = document.querySelectorAll(".norma-card");
  const vazio = document.querySelector("#normasEmpty");
  const contador = document.querySelector("#normasContador");

  function normalizar(texto) {
    return texto
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function filtrarNormas() {

    const termo = normalizar(busca.value.trim());

    const filtro = categoria.value;

    let encontrados = 0;

    cards.forEach(card => {

      const texto = normalizar(card.dataset.search);

      const tipo =
        card.dataset.categoria;

      const correspondeTexto =
        texto.includes(termo);

      const correspondeCategoria =
        filtro === "todas" ||
        tipo === filtro;

      const mostrar =
        correspondeTexto &&
        correspondeCategoria;

      card.hidden = !mostrar;

      if (mostrar) {
        encontrados++;
      }

    });

    vazio.hidden = encontrados !== 0;
    contador.textContent = encontrados === cards.length
      ? `${encontrados} normas disponíveis`
      : `${encontrados} de ${cards.length} normas encontradas`;
  }


  busca.addEventListener(
    "input",
    filtrarNormas
  );

  categoria.addEventListener(
    "change",
    filtrarNormas
  );

  filtrarNormas();

});
