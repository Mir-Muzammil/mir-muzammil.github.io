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

    const email = document.getElementById('email').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email);

    if (user) {
        showNotification("A reset link has been sent to your email.", "success");
    } else {
        showNotification("No account found with this email address.", "error");
    }
});