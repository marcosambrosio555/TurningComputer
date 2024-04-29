
const btnSendMessage = document.querySelector(
    ".contact .btn"
);

const scriptURL =
    "https://script.google.com/macros/s/AKfycbzyQtN-v2UihzR6lGLpn9hu6G4d8EPzOF7Bhh_FT4fI8VWsfvfkX_z9GRlN25P9qDQn/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    btnSendMessage.classList.add("loading");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            btnSendMessage.classList.remove("loading");
            btnSendMessage.classList.add("success");

            setTimeout(() => {
                btnSendMessage.classList.remove("success");
            }, 3000)
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
