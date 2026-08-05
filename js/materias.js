const filtros = document.querySelectorAll(".materias-filter");
const materias = document.querySelectorAll(".materia-card");

filtros.forEach((filtro) => {

  filtro.addEventListener("click", () => {

    const filtroSelecionado = filtro.dataset.filter;

    filtros.forEach((item) => {
      item.classList.remove("active");
    });

    filtro.classList.add("active");

    materias.forEach((materia) => {

      const status = materia.dataset.status;

      if (
        filtroSelecionado === "all" ||
        status === filtroSelecionado
      ) {

        materia.classList.remove("hidden");

      } else {

        materia.classList.add("hidden");

      }

    });

  });

});