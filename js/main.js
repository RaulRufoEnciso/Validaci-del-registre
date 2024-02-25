document.getElementById("username").addEventListener("focusout", function() {
    var input = this.value;
    if(input) { // Si l'input no està buit
        this.style.backgroundColor = "green";
        document.getElementById("usernameError").style.display = "none";
    } else { // Si l'input està buit
        this.style.backgroundColor = "red";
        document.getElementById("usernameError").style.display = "block";
    }
});

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

document.getElementById("email").addEventListener("focusout", function() {
    if(validateEmail(this.value)) {
        this.style.backgroundColor = "green";
        document.getElementById("emailError").style.display = "none";
    } else {
        this.style.backgroundColor = "red";
        document.getElementById("emailError").style.display = "block";
    }
});

document.getElementById("password").addEventListener("input", function() {
    var pass = this.value;
    var errorText = "";
    if(pass.length < 8 || pass.length > 15) errorText += "Longitud incorrecta. ";
    if(!/[a-z]/.test(pass)) errorText += "Falta una minúscula. ";
    if(!/[A-Z]/.test(pass)) errorText += "Falta una majúscula. ";
    if(!/[0-9]/.test(pass)) errorText += "Falta un dígit. ";
    if(!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass)) errorText += "Falta un caràcter especial. ";
    
    document.getElementById("passwordError").textContent = errorText;
    this.style.backgroundColor = errorText ? "red" : "green";
});

document.getElementById("confirmPassword").addEventListener("input", function() {
    if(this.value == document.getElementById("password").value) {
        this.style.backgroundColor = "green";
        document.getElementById("confirmPasswordError").style.display = "none";
    } else {
        this.style.backgroundColor = "red";
        document.getElementById("confirmPasswordError").style.display = "block";
    }
});

document.getElementById("myForm").onsubmit = function() {
    var address = document.getElementById("address").value;
    if(!address) {
        document.getElementById("addressError").style.display = "block";
        return false; // Atura l'enviament del formulari
    }
    // Altres validacions aquí
    return true; // Permet l'enviament si tot està correcte
};