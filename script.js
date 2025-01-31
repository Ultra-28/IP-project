function login() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }
    
    window.location.href = 'shop.html';
}
