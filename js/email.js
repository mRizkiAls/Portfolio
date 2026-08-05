emailjs.init({
    publicKey: "FKbRNXUnIuGg7xfKK",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "portfolio_rizki",
        "template_7s2c8dd",
        this
    )
    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.");

    });

});