async function generateMessage() {
  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const product = document.getElementById("product").value;
  const language = document.getElementById("language").value;
  const customPrompt = document.getElementById("customPrompt").value;

  const finalPrompt = customPrompt || `Generate a professional WhatsApp message for a ${business} offering ${product} in ${language}. Name: ${name}`;

  document.getElementById("messageBox").innerText = "Generating...";

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: finalPrompt }),
    });
    const data = await res.json();
    document.getElementById("messageBox").innerText = data.message;

    const encoded = encodeURIComponent(data.message);
    const link = `https://wa.me/?text=${encoded}`;
    document.getElementById("whatsappLink").href = link;
    document.getElementById("whatsappLink").innerText = "📲 Copy the message & Open in WhatsApp";
  } catch (err) {
    document.getElementById("messageBox").innerText = "❌ Error generating message.";
  }
}
