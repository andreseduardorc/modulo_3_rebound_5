function Usuario(nombre, correo, trabajo, telefono, sobreTi) {
  this.nombre = nombre;
  this.correo = correo;
  this.trabajo = trabajo;
  this.telefono = telefono;
  this.sobreTi = sobreTi;
}

function capturarInformacion() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let trabajo = document.getElementById("trabajo").value;
  let telefono = document.getElementById("telefono").value;
  let sobreTi = document.getElementById("sobreTi").value;

  let usuario = new Usuario(nombre, correo, trabajo, telefono, sobreTi);

  desplegarPerfil(usuario);
}

function desplegarPerfil(usuario) {
  let nombreElemento = document.querySelector(".name_id");
  let emailElemento = document.querySelector(".email");
  let trabajoElemento = document.querySelector(".job_id");
  let telefonoElemento = document.querySelector(".phone");
  let sobreTiElemento = document.querySelector(".sobreMi");

  nombreElemento.textContent = usuario.nombre;
  emailElemento.textContent = usuario.correo;
  trabajoElemento.textContent = usuario.trabajo;
  telefonoElemento.textContent = usuario.telefono;
  sobreTiElemento.textContent = usuario.sobreTi;

  let tarjetaPerfil = document.querySelector(".container.col-6.d-none");
  tarjetaPerfil.classList.remove("d-none");
}

let enviarButton = document.querySelector(".container.col-6 button");
enviarButton.addEventListener("click", capturarInformacion);
