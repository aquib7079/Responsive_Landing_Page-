window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const options = {
    threshold: 0.6, 
  };
  
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
  
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        activeLink.classList.add("active");
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  