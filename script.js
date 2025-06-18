function generateMessage() {
  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value;
  const product = document.getElementById("product").value;
  const language = document.getElementById("language").value;
  const customPrompt = document.getElementById("customPrompt").value.trim();

  let message = "";

  if (customPrompt !== "") {
    message = customPrompt;
  } else if (name && business && product && language) {
    if (language === "Urdu") {
      message = `السلام علیکم ${name} صاحبہ! میں ایک ${business} ہوں اور میری سروس ہے: ${product}.`;
    } else if (language === "Hindi") {
      message = `नमस्ते ${name} जी! मैं एक ${business} हूँ और मेरी सेवा है: ${product}.`;
    } else if (language === "French") {
      message = `Bonjour ${name} ! Je suis un(e) ${business} et mon service est: ${product}.`;
    } else {
      message = `Hello ${name}! I am a ${business} and my service is: ${product}.`;
    }
  } else {
    alert("Please either write your own message or fill in the form.");
    return;
  }

  // ✅ Show the generated message
  const messageBox = document.getElementById("messageBox");
  messageBox.innerText = message;

  // ✅ Update WhatsApp Link
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
  whatsappLink.innerText = "Send via WhatsApp 📲";
}
