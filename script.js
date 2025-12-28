function generateQR() {
  let text = document.getElementById("qrText").value;
  let box = document.getElementById("qrcode");
  box.innerHTML = "";

  if(text.trim() === "") {
    alert("Enter text or link");
    return;
  }

  new QRCode(box, {
    text: text,
    width: 200,
    height: 200
  });
}
