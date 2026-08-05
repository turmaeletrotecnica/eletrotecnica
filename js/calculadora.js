const V = document.querySelector("#voltage"),
  R = document.querySelector("#resistance"),
  I = document.querySelector("#current"),
  result = document.querySelector("#result"),
  calc = document.querySelector("#calculate");
function calculate() {
  const v = parseFloat(V.value),
    r = parseFloat(R.value),
    i = parseFloat(I.value);
  if (Number.isFinite(v) && Number.isFinite(r) && r !== 0) {
    I.value = (v / r).toFixed(2).replace(/\.00$/, "");
    result.textContent = `${I.value} A`;
  } else if (Number.isFinite(v) && Number.isFinite(i) && i !== 0) {
    R.value = (v / i).toFixed(2).replace(/\.00$/, "");
    result.textContent = `${R.value} Ω`;
  } else if (Number.isFinite(r) && Number.isFinite(i)) {
    V.value = (r * i).toFixed(2).replace(/\.00$/, "");
    result.textContent = `${V.value} V`;
  }
}
calc.addEventListener("click", calculate);
