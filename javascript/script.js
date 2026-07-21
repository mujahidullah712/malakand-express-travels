const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const bookingForm = document.querySelector("#book")
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const contact = document.querySelector("#Contact").value;
    const date = document.querySelector("#date").value;
    const passengers = document.querySelector("#passengers").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (name.trim().length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    if (/\d/.test(name)) {
        alert("Name cannot contain numbers.");
        return;
    }
    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (contact.trim() === "") {
        alert("Please enter your contact number.");
        return;
    }

    const contactPattern = /^[0-9]+$/;

    if (!contactPattern.test(contact)) {
        alert("Contact number must contain only digits.");
        return;
    }

    if (contact.length !== 11) {
        alert("Contact number must be exactly 11 digits.");
        return;
    }




    if (date === "") {
        alert("Please select a travel date.");
        return;
    }
    if (passengers === "") {
        alert("Please enter the number of passengers.");
        return;
    }

    if (passengers < 1) {
        alert("At least 1 passenger is required.");
        return;
    }

    if (passengers > 10) {
        alert("You can book a maximum of 10 passengers at a time.");
        return;
    }
    
    alert("Booking Successful!");

});