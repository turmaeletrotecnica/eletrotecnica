document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     NAVEGAÇÃO DOS CARDS
     ===================================================== */

  const toolCards =
    document.querySelectorAll("[data-tool]");

  toolCards.forEach((card) => {

    card.addEventListener("click", () => {

      const tool =
        card.dataset.tool;

      switch (tool) {

        case "ohm":
          document
            .querySelector("#calculadora-ohm")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          break;

        case "units":
          document
            .querySelector(".converters-section")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          break;

        default:
          console.log(
            `Ferramenta "${tool}" selecionada.`
          );

      }

    });

  });


  /* =====================================================
     LEI DE OHM
     ===================================================== */

  const mode =
    document.querySelector("#ohm-mode");

  const voltage =
    document.querySelector("#ohm-voltage");

  const resistance =
    document.querySelector("#ohm-resistance");

  const current =
    document.querySelector("#ohm-current");

  const formula =
    document.querySelector("#ohm-formula");

  const result =
    document.querySelector("#ohm-result");

  const calculate =
    document.querySelector("#calculate-ohm");


  function updateOhmMode() {

    if (!mode) return;

    const selected =
      mode.value;

    voltage.disabled =
      selected === "voltage";

    resistance.disabled =
      selected === "resistance";

    current.disabled =
      selected === "current";


    switch (selected) {

      case "current":
        formula.textContent =
          "I = V / R";
        break;

      case "voltage":
        formula.textContent =
          "V = R × I";
        break;

      case "resistance":
        formula.textContent =
          "R = V / I";
        break;

    }

  }


  function calculateOhm() {

    const V =
      Number(voltage.value);

    const R =
      Number(resistance.value);

    const I =
      Number(current.value);


    let value;
    let unit;


    if (
      mode.value === "current"
    ) {

      if (R === 0) {
        result.textContent =
          "R ≠ 0";
        return;
      }

      value = V / R;
      unit = "A";

    }


    if (
      mode.value === "voltage"
    ) {

      value = R * I;
      unit = "V";

    }


    if (
      mode.value === "resistance"
    ) {

      if (I === 0) {
        result.textContent =
          "I ≠ 0";
        return;
      }

      value = V / I;
      unit = "Ω";

    }


    result.textContent =
      `${formatNumber(value)} ${unit}`;

  }


  function formatNumber(value) {

    return new Intl.NumberFormat(
      "pt-BR",
      {
        maximumFractionDigits: 6
      }
    ).format(value);

  }


  mode?.addEventListener(
    "change",
    updateOhmMode
  );

  calculate?.addEventListener(
    "click",
    calculateOhm
  );


  updateOhmMode();


  /* =====================================================
     CONVERSORES
     ===================================================== */

  const factors = {

    voltage: {
      V: 1,
      kV: 1000,
      mV: 0.001
    },

    current: {
      A: 1,
      mA: 0.001,
      kA: 1000
    },

    power: {
      W: 1,
      kW: 1000,
      MW: 1000000
    },

    energy: {
      Wh: 1,
      kWh: 1000,
      MWh: 1000000
    },

    length: {
      m: 1,
      cm: 0.01,
      mm: 0.001,
      km: 1000
    }

  };


  const converterCards =
    document.querySelectorAll(
      ".converter-card"
    );


  converterCards.forEach((card) => {

    const input =
      card.querySelector(
        ".converter-input"
      );

    const result =
      card.querySelector(
        "[data-result]"
      );

    const type =
      input?.dataset.type;

    const from =
      card.querySelector(
        "[data-from]"
      );

    const to =
      card.querySelector(
        "[data-to]"
      );


    function convert() {

      if (!input || !result) {
        return;
      }


      const value =
        Number(input.value);


      if (
        !Number.isFinite(value)
      ) {
        result.textContent =
          "-";

        return;
      }


      const fromUnit =
        from.value;

      const toUnit =
        to.value;


      const baseValue =
        value *
        factors[type][fromUnit];


      const converted =
        baseValue /
        factors[type][toUnit];


      result.textContent =
        `${formatNumber(converted)} ${toUnit}`;

    }


    input?.addEventListener(
      "input",
      convert
    );

    from?.addEventListener(
      "change",
      convert
    );

    to?.addEventListener(
      "change",
      convert
    );


    convert();

  });

});