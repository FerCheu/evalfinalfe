var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var color = ["#FFFFCC"];
var index = 0;

window.onload = document.querySelector("#entrada_usuario").select();

document.querySelector("#agregar_nota").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

document.querySelector("#ocultar").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("#entrada_usuario").addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    const text = document.querySelector("#entrada_usuario");
    crearPostIt(text.value);
  }
});

crearPostIt = (text) => {
  let nota = document.createElement("div");
  let detalles = document.createElement("div");
  let textoNota = document.createElement("h1");

  nota.className = "nota";
  detalles.className = "detalles";
  textoNota.textContent = text;textoNota

  detalles.appendChild(textoNota);
  nota.appendChild(detalles);

  if(index > color.length - 1)
    index = 0;

  nota.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${color[index++]}`);

  nota.addEventListener("click", () => {
    nota.remove();
  })

  document.querySelector("#notas").appendChild(nota);
}
