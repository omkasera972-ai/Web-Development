const btn = document.getElementById("darkBtn");
const body = document.body;

// Apply saved mode
function loadMode() {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
        body.classList.add("dark");
        btn.textContent = "☀";
    } else {
        btn.textContent = "🌙";
    }
}

loadMode();

// Toggle mode
btn.addEventListener("click", toggleMode);

function toggleMode() {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");

    btn.textContent = isDark ? "☀" : "🌙";
    localStorage.setItem("mode", isDark ? "dark" : "light");
}


const form = document.getElementById("contactForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const name = getValue("name");
    const email = getValue("email");
    const message = getValue("message");

    clearErrors();

    let isValid = true;

    if (!name) {
        showError("nameError", "Name is required");
        isValid = false;
    }

    if (!email) {
        showError("emailError", "Email is required");
        isValid = false;
    }

    if (!message) {
        showError("messageError", "Message cannot be empty");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
}


function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    allSections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});

// initial style
allSections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.5s";
});