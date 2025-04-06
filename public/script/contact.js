document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const submitBtn = document.getElementById("submitBtn");
    
    // Add anime-style input effects
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#ff69b4';
            input.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.5)';
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#ff1493';
            }
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ffc0cb';
            input.style.boxShadow = 'none';
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#ffc0cb';
            }
        });
    });

    // Add heartbeat effect to submit button if it exists
    if (submitBtn) {
        submitBtn.style.animation = 'heartbeat 1.5s infinite';
    }
    
    if (form) {
        form.addEventListener("submit", function (event) {
            let emailInput = document.getElementById("email");
            let emailError = document.getElementById("emailError");
            let nameInput = document.getElementById("name");
            let nameError = document.getElementById("nameError");
            let msgInput = document.getElementById("msg");
            let msgError = document.getElementById("msgError");
            
            // Add anime-style error effects
            function showError(element, errorElement) {
                if (element && errorElement) {
                    element.style.borderColor = '#ff1493';
                    element.style.animation = 'shake 0.5s';
                    errorElement.style.display = "block";
                    errorElement.style.color = '#ff1493';
                    setTimeout(() => {
                        element.style.animation = '';
                    }, 500);
                }
            }
            
            function hideError(element, errorElement) {
                if (element && errorElement) {
                    element.style.borderColor = '#ff69b4';
                    errorElement.style.display = "none";
                }
            }

            let valid = true;
            
            if (emailInput && emailError) {
                if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                    showError(emailInput, emailError);
                    valid = false;
                } else {
                    hideError(emailInput, emailError);
                }
            }
            
            if (nameInput && nameError) {
                if (nameInput.value.length < 2) {
                    showError(nameInput, nameError);
                    valid = false;
                } else {
                    hideError(nameInput, nameError);
                }
            }
            
            if (msgInput && msgError) {
                if (msgInput.value.length < 10) {
                    showError(msgInput, msgError);
                    valid = false;
                } else {
                    hideError(msgInput, msgError);
                }
            }
            
            if (!valid) {
                event.preventDefault();
                // Add dramatic effect when form is invalid
                if (form) {
                    form.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        form.style.animation = '';
                    }, 500);
                }
            } else if (submitBtn) {
                // Add success effect when form is valid
                submitBtn.innerHTML = 'Sending... 💌';
                submitBtn.style.animation = 'none';
                submitBtn.style.backgroundColor = '#ff1493';
            }
        });
    }
    
    // Add floating hearts when hovering submit button
    if (submitBtn) {
        submitBtn.addEventListener('mouseover', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.style.position = 'absolute';
                    heart.style.left = (Math.random() * 100) + '%';
                    heart.style.bottom = '100%';
                    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                    heart.style.animation = `float-up ${Math.random() * 1 + 1}s linear forwards`;
                    submitBtn.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 1000);
                }, i * 200);
            }
        });
    }
});