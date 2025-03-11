function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact_no = document.getElementById("contact-no").value;
    let message = document.getElementById("message").value;

    let phone = "9021253941"; // Change this to your WhatsApp number
    let whatsappMessage = `Hello, my name is ${name}.\n My email is ${email}.\n My Contact Number is ${contact_no}.\n Message: ${message}`;

    let whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, "_blank"); // Open WhatsApp chat
}