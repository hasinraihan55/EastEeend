      

  // Slideshow
  const slides = document.querySelectorAll(".about-slides img");
  if (slides.length > 0) {
        let current = 0;
        setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
     }, 3500);
   }
      let current = 0;
      setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 3500);

function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !email || !msg) {
    alert("Please fill in all fields.");
    return;
  }

  const btn = document.querySelector(".submit-btn");
  
  // 1. Change button to a loading state
  btn.textContent = "Sending...";
  btn.disabled = true;

// 3. Send the email via EmailJS
const templateParams = {
  to_email: "easteeendvis@outlook.com",
  from_name: document.getElementById("name").value,
  from_email: document.getElementById("email").value,
  message: document.getElementById("message").value
};

emailjs.send('service_38l0jxc', 'template_o2g16hb', templateParams)
  .then(function(response) {
     // Success! Update UI
     btn.textContent = "Sent ✓";
     btn.style.background = "#2a7a5e";
     
     // Optional: Clear the form fields after successful send
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("message").value = "";
  }, function(error) {
     // Something went wrong
     alert("Failed to send email. Please try again later.");
     console.error("EmailJS Error:", error);
     
     // Reset button so user can try again
     btn.textContent = "Submit";
     btn.disabled = false;
  })
};