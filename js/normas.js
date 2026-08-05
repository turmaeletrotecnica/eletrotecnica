document.addEventListener("DOMContentLoaded", () => {

  const busca = document.querySelector("#normaBusca");
  const categoria = document.querySelector("#normaCategoria");

  const cards = document.querySelectorAll(".norma-card");
  const vazio = document.querySelector("#normasEmpty");

  function filtrarNormas() {

    const termo = busca.value
      .trim()
      .toLowerCase();

    const filtro = categoria.value;

    let encontrados = 0;

    cards.forEach(card => {

      const texto =
        card.dataset.search.toLowerCase();

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
  }


  busca.addEventListener(
    "input",
    filtrarNormas
  );

  categoria.addEventListener(
    "change",
    filtrarNormas
  );

});