      

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

  // 2. Package the data to match your EmailJS template variables
  const templateParams = {
    from_name: name,
    from_email: email,
    message: msg
  };

  // 3. Send the email via EmailJS
  // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
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
    });
}
