function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "21a849d40ft0a45f399f9odf6fa4fb86";
  let prompt = `User instructions: Generate a poem about ${instructionsInput}`;
  let context =
    "You are an expert in poems about the night. Generate an 6 line poem about the night. Separate each line with a <br />. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating a poem about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#generator");
formElement.addEventListener("submit", generatePoem);
