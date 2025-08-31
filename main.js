let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    const text = qrText.value.trim();

    if (text === "") {
        alert("Please enter text or URL to generate QR code.");
        return;
    }

    // Encode special characters
    const encodedText = encodeURIComponent(text);

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodedText;
    imgbox.style.display = "block"; // Optional: if you want to show the box after generation
    imgbox.classList.add("show-img")
}
