function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password are required");
    } else {
        alert("Login successful!");
    }
}

function changeBright1() {

    var idIconElement = document.getElementById('idIcon');
    var pwIconElement = document.getElementById('pwIcon');
    
    if (idIconElement.classList.contains('bi-person-gear')) {
        idIconElement.classList.remove('bi-person-gear');
        idIconElement.classList.add('bi-person-fill-gear');
    }else{
        idIconElement.classList.remove('bi-person-fill-gear');
        idIconElement.classList.add('bi-person-gear');
    }
    
    if (pwIconElement.classList.contains('bi-person-lock')) {
        pwIconElement.classList.remove('bi-person-lock');
        pwIconElement.classList.add('bi-person-fill-lock');
    }else{
        pwIconElement.classList.remove('bi-person-fill-lock');
        pwIconElement.classList.add('bi-person-lock');
    }
}