const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();
  const isValid = validateForm();

  if (!isValid) return;

  // Simula envío
  statusEl.textContent = "Mensaje enviado correctamente (simulado).";
  form.reset();
});

function validateForm() {
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const topic = document.getElementById("topic");
  const message = document.getElementById("message");
  const privacy = document.getElementById("privacy");

  if (!name.value.trim()) {
    setError(name, "Escribe tu nombre.");
    valid = false;
  }

  if (!email.value.trim()) {
    setError(email, "Escribe tu correo.");
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    setError(email, "Correo no válido.");
    valid = false;
  }

  if (!topic.value) {
    setError(topic, "Selecciona un motivo.");
    valid = false;
  }

  if (!message.value.trim()) {
    setError(message, "Escribe un mensaje.");
    valid = false;
  }

  if (!privacy.checked) {
    alert("Debes aceptar la política de privacidad.");
    valid = false;
  }

  return valid;
}

function setError(input, msg) {
  input.classList.add("error");
  const small = input.parentElement.querySelector(".error-msg");
  if (small) small.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));
  statusEl.textContent = "";
}