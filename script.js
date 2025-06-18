function generateMessage() {
  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value;
  const product = document.getElementById("product").value;
  const language = document.getElementById("language").value;

  let message = "";

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  // Message templates by language
  switch (language) {
    case "Urdu":
      message = `السلام علیکم ${name} صاحبہ! میں ایک ${business} ہوں اور میری سروس ہے: ${product}. براہ کرم رابطہ کریں!`;
      break;
    case "Hindi":
      message = `नमस्ते ${name} जी! मैं एक ${business} हूँ और मेरी सेवा है: ${product}. कृपया संपर्क करें।`;
      break;
    case "French":
      message = `Bonjour ${name} ! Je suis un(e) ${business} et mon service est: ${product}. Contactez-moi !`;
      break;
    default:
      message = `Hello ${name}! I am a ${business} and I offer: ${product}. Let me know if you're interested!`;
  }
   function generateMessage() {
  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const product = document.getElementById("product").value;
  const language = document.getElementById("language").value;
  const customPrompt = document.getElementById("customPrompt").value;

  let message = "";

  if (customPrompt.trim() !== "") {
    message = customPrompt;  // User's custom message
  } else {
    // Language-specific auto message
    if (language === "Urdu") {
      message = `السلام علیکم ${name} صاحبہ! میں ایک ${business} ہوں اور میری سروس ہے: ${product}.`;
    } else if (language === "Hindi") {
      message = `नमस्ते ${name} जी! मैं एक ${business} हूँ और मेरी सेवा है: ${product}.`;
    } else if (language === "French") {
      message = `Bonjour ${name} ! Je suis un(e) ${business} et mon service est: ${product}.`;
    } else {
      message = `Hello ${name}! I am a ${business} and my service is: ${product}.`;
    }
  }

  document.getElementById("messageBox").innerText = message;
  document.getElementById("whatsappLink").href = `https://wa.me/?text=${encodeURIComponent(message)}`;
}

  // Display message
  document.getElementById("messageBox").value = message;

  // WhatsApp link
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
  document.getElementById("whatsappLink").href = whatsappLink;
}

function copyMessage() {
  const messageBox = document.getElementById("messageBox");
  messageBox.select();
  messageBox.setSelectionRange(0, 99999); // For mobile support
  navigator.clipboard.writeText(messageBox.value);
  alert("Message copied to clipboard!");
}
