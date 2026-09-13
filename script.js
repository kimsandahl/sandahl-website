document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  status.textContent = "";
  status.className = "form-status";

  const submitButton = form.querySelector("button[type=submit]");
  submitButton.disabled = true;
  submitButton.textContent = "Sender...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json();

    if (result.success) {
      status.textContent = "Tak! Din besked er sendt.";
      status.className = "form-status success";
      form.reset();
    } else {
      throw new Error(result.message || "Der gik noget galt.");
    }
  } catch (err) {
    status.textContent = "Beskeden kunne ikke sendes. Prøv igen, eller skriv direkte til din email.";
    status.className = "form-status error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send besked";
  }
});
