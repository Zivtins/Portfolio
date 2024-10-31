emailjs.init("56-IJZ5jVQmbz5ant");  // Replace "YOUR_PUBLIC_KEY" with the actual key


function epasts() {
    // Execute reCAPTCHA v3
    grecaptcha.execute("6Ld5YXEqAAAAAIC-6rwuy53wt11R5o2wMmvb_Y_E", { action: "submit" }).then((token) => {
        
        // Hide any error message initially
        document.querySelector(".error-message").style.display = "none";

        let parametri = {
            Name: document.getElementById("name-field").value,
            email: document.getElementById("email-field").value,
            subject: document.getElementById("subject-field").value,
            message: document.getElementById("message-field").value,
            "g-recaptcha-response": token,  // Add the reCAPTCHA token here
        };

        emailjs.send("service_hbb84rg", "template_wt81bro", parametri)
            .then(() => {
                alert("E-mail sent!");
                document.querySelector(".sent-message").style.display = "block";
            })
            .catch(error => {
                console.error("Error sending email:", error);
                document.querySelector(".error-message").style.display = "block";
                document.querySelector(".error-message").textContent = "Failed to send email. Please try again later.";
            });
    });
}
