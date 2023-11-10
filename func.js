window.onload = function() {
    alert("Welcome to our landing page!");
  };
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});
