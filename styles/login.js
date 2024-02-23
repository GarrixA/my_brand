function validateForm() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long and contain a mix of capital letters, small letters, numbers, and special characters.";
        return false;
    } else {
        passwordError.textContent = ""; // Clear error message if password is valid
        alert("Form validated! Redirecting to the dashboard..."); // Alert user about form validation
        // Redirect to the dashboard or perform any other action
        window.location.href = "/Admin Panel/mainPanel.html";
        return true;
    }
}