document.querySelectorAll(".tool").forEach((btn) =>
  btn.addEventListener("click", () => {
    const tool = btn.dataset.tool;
    if (tool === "ohm") {
      document
        .querySelector("#calculos")
        .scrollIntoView({ behavior: "smooth" });
      document.querySelector("#voltage").focus();
    }
  }),
);
