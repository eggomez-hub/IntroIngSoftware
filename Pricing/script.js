// Toggle precios mensual / anual
const toggleBtn = document.getElementById("toggleBilling");
const priceElements = document.querySelectorAll(".price-amount");
const periodElements = document.querySelectorAll(".price-period");

let yearly = false;

toggleBtn.addEventListener("click", () => {
  yearly = !yearly;
  toggleBtn.classList.toggle("active");
  toggleBtn.textContent = yearly ? "Ver precios mensuales" : "Ver precios anuales";

  priceElements.forEach((el) => {
    const monthly = el.getAttribute("data-monthly");
    const yearlyPrice = el.getAttribute("data-yearly");

    if (monthly === "0" && yearlyPrice === "0") return;

    el.textContent = yearly ? yearlyPrice : monthly;
  });

  periodElements.forEach((el) => {
    el.textContent = yearly ? "USD/año" : "USD/mes";
  });
});