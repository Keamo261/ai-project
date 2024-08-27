function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red",
    autoStart: true,
    delay: 60,
  });
}

let formElement = document.querySelector("#generator");
formElement.addEventListener("submit", generatePoem);
