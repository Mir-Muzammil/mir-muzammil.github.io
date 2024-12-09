function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.style.display = 'none';
    });

    const name = document.getElementById("email-name").value;
    if (name.length < 3) {
        document.getElementById("name-error").style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").style.display = 'block';
        isValid = false;
    }

    const message = document.getElementById("email-message").value;
    if (message.length < 5) {
        document.getElementById("message-error").style.display = 'block';
        isValid = false;
    }

    const phone = document.getElementById("phone-number").value;
    if (!/^\d{11}$/.test(phone)) {
        document.getElementById("phone-error").style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        showSuccessMessage();
    }

    return false;
}

function showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
        location.reload();
    }, 5000);
}