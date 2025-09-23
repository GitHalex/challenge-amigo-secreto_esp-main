let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Validar la entrada
  if (nombreAmigo === "") alert("Por favor, inserte un nombre.");

  // Actualizar el array de amigos
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista visual
  actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo y crear elementos de lista
  for (let i = 0; i < amigos.length; i++) {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigos[i];
    listaAmigos.appendChild(elementoLista);
  }
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
  if (amigos.length === 0)
    alert("No hay amigos en la lista. Por favor, agregue al menos un amigo.");

  // Generar un índice aleatorio => amigo ganador
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  //nombre del amigo ganador en el arreglo
  const amigoSorteado = amigos[indiceAleatorio];

  const elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;

  // eliminar la lista de amigos una vez que salga el ganador
  amigos = [];
  actualizarListaAmigos();
}

// Permitir agregar amigos presionando Enter
document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
