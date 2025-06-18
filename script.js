async function generateMessage() {
  const prompt = document.getElementById("customPrompt").value.trim();
  const messageBox = document.getElementById("messageBox");
  const whatsappLink = document.getElementById("whatsappLink");

  if (!prompt) {
    alert("Please write a message prompt.");
    return;
  }

  messageBox.innerText = "⏳ Generating message...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.message) {
      messageBox.innerText = data.message;
      whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(data.message)}`;
      whatsappLink.innerText = "Send via WhatsApp 📲";
    } else {
      messageBox.innerText = "❌ Message generation failed.";
    }
  } catch (error) {
    console.error("Error:", error);
    messageBox.innerText = "❌ Server error. Try again.";
  }
}
