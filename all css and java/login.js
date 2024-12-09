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

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        showNotification(`Welcome back, ${user.name}!`, "success");
        setTimeout(() => {
            window.location.href = 'home.html'; // Redirect to the homepage
        }, 2000);
    } else {
        showNotification("Invalid email or password!", "error");
    }
});