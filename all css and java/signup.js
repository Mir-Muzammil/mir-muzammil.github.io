// Function to display styled notifications
function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.className = `notification ${type}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showNotification("Passwords do not match!", "error");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === email)) {
        showNotification("Email is already registered!", "error");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    showNotification("Sign-up successful!", "success");
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});