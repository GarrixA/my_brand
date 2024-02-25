function validateForm(e) {
    e.preventDefault();
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long and contain a mix of capital letters, small letters, numbers, and special characters.";
        return false;
    } else {
        passwordError.textContent = "";
        setTimeout(()=>{
            window.location.href = "/AdminPanel/mainPanel.html";
        }, 1000)
        
        return true;
    }
}