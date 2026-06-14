// Loader fade-out
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => (loader.style.display = "none"), 500);
  });
  
  // Navbar toggle
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
  
  // Scroll behavior
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {
    let top = window.scrollY;
  
    sections.forEach(sec => {
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
      }
    });
  
    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
  
    // Close navbar when link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  
    // Animate footer on scroll
    let footer = document.querySelector('footer');
    if (footer)
      footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.body.scrollHeight);
  };
  
  // Email sending
  function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("textmes").value,
    };
  
    emailjs.send("service_sf0ch5t", "template_nwtih77", parms)
      .then(() => alert("Email Sent!! You will receive a response as soon as possible."));
  }
  