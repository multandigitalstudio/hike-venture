document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const tour = document.getElementById("tour").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const request = document.getElementById("request").value;

    const whatsappNumber = "923416243234";

    const message = `🏔️ HIKE VENTURE - NEW BOOKING

Tour: ${tour}
Departure City: ${city}
Travel Date: ${date}
Number of People: ${people}

Customer Name: ${name}
Phone: ${phone}
Email: ${email}

Special Request:
${request || "None"}

Please confirm my booking.`;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;

});
