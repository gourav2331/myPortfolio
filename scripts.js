// Put current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle tiny contact form (no backend; just a demo)
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("form-msg");
    if (!email) { msg.textContent = "Please enter a valid email."; return; }
    msg.textContent = `Thanks! I’ll reach out at ${email}.`;
    e.target.reset();
});

document.getElementById('name').onclick = function () {
  this.textContent = this.textContent === 'You' ? 'Captain Dev' : 'You'
}

document.getElementById('aboutSpan').onclick = function () {
  this.textContent = this.textContent === 'About' ? 'No About' : 'About'
}

document.getElementById('dark-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})
