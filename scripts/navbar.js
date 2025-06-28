document.addEventListener("DOMContentLoaded", function () {
  // Inject navbar HTML from shared file
  fetch("/BeastbaneSyndicate/shared/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Reattach dropdown toggle behavior
      const toggles = document.querySelectorAll('.dropdown-toggle');
      toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
          const dropdown = this.closest('.dropdown');
          dropdown.classList.toggle('open');
          document.querySelectorAll('.dropdown').forEach(other => {
            if (other !== dropdown) other.classList.remove('open');
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
        }
      });
    });
});
