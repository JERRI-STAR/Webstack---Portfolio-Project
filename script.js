// Get elements
const canvas = document.getElementById("mugCanvas");
const ctx = canvas.getContext("2d");
const textInput = document.getElementById("textInput");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

// Draw initial mug design
function drawMug() {
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#333";
    ctx.fillRect(50, 100, 200, 150); // Mug shape
    ctx.strokeStyle = "#000";
    ctx.strokeRect(50, 100, 200, 150); // Mug outline
}

// Update text on canvas
function updateText() {
    drawMug(); // Redraw the mug
    const text = textInput.value;
    const color = colorPicker.value;

    ctx.fillStyle = color;
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, 170);
}

// Reset canvas
function resetCanvas() {
    textInput.value = "";
    colorPicker.value = "#000000";
    drawMug();
}

// Event listeners
textInput.addEventListener("input", updateText);
colorPicker.addEventListener("input", updateText);
resetBtn.addEventListener("click", resetCanvas);

// Initial render
drawMug();

/*For the Contact us page*/
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate form inputs
        if (validateForm()) {
            // Show success message
            alert("Thank you for your message! We will get back to you soon.");
            form.reset();
        }
    });

    function validateForm() {
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (subjectInput.value.trim() === "") {
            alert("Please enter a subject.");
            return false;
        }
        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});