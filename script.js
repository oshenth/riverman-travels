function welcomeMessage() {
  const name = prompt("What is your name, traveler?");
  if (name) {
    alert(
      "Welcome, " + name + "! Check out our Destinations page for inspiration.",
    );
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const responseDiv = document.getElementById("responseMessage");

  responseDiv.innerHTML = `<p style="color: #27ae60; font-weight: bold; text-align:center;">Thank you, ${name}! Your message has been sent.</p>`;
  document.getElementById("travelContactForm").reset();
}
