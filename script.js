document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone-number").value.trim(); 
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !phone || !message) {
      alert("Please fill in all the fields.");
      return;
    }
    if (!/^[0-9]+$/.test(phone)) {
      alert("Invalid phone number! Please enter digits only.");
      return;
    }
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
});
