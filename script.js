const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const emailSuccess = document.getElementById('emailSuccess');
const passwordSuccess = document.getElementById('passwordSuccess');

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email.length > 3 && emailRegex.test(email)) {
        emailError.style.display = "none";
        emailSuccess.style.display = "block";
    } else {
        emailError.style.display = "block";
        emailSuccess.style.display = "none";
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();

    if (password.length > 8) {
        passwordError.style.display = "none";
        passwordSuccess.style.display = "block";
    } else {
        passwordError.style.display = "block";
        passwordSuccess.style.display = "none";
    }
}

function handleSubmit(event) {
    event.preventDefault(); 

    const isEmailValid = emailError.style.display === "none";
    const isPasswordValid = passwordSuccess.style.display === "block";

    if (isEmailValid && isPasswordValid) {
        const confirmation = confirm("Do you want to proceed with the signup?");
        if (confirmation) {
            alert("Successful signup!");
            resetForm();
        }
    } else {
        alert("Please fill in valid details before submitting.");
    }
}

function resetForm() {
    emailInput.value = "";
    passwordInput.value = "";
    emailSuccess.style.display = "none";
    passwordSuccess.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
}

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

document.getElementById('signupForm').addEventListener('submit', handleSubmit);

