document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (!newPassword.value) {
            newPassword.setCustomValidity("Please fill out this field.");
            newPassword.reportValidity();
        } else {
            newPassword.setCustomValidity("");
        }

        if (!confirmPassword.value) {
            confirmPassword.setCustomValidity("Please fill out this field.");
            confirmPassword.reportValidity();
        } else {
            confirmPassword.setCustomValidity("");
        }

        if (newPassword.value && confirmPassword.value) {
            if (newPassword.value === confirmPassword.value) {
                message.textContent = "Password successfully changed!";
                message.className = "success";
            } else {
                message.textContent = "Passwords do not match. Please try again.";
                message.className = "error";
            }
        }
    });
});