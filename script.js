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

  async function generateMessage() {
  const prompt = document.getElementById("customPrompt").value.trim();
  const messageBox = document.getElementById("messageBox");
  const whatsappLink = document.getElementById("whatsappLink");

  if (!prompt) {
    alert("Please write your prompt first.");
    return;
  }

  messageBox.innerText = "⏳ Generating AI message...";

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY" // Replace with your key
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Write a short, friendly WhatsApp message in appropriate language based on this instruction:\n"${prompt}"`,
        max_tokens: 80,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const message = data.choices[0].text.trim();

    messageBox.innerText = message;
    whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
    whatsappLink.innerText = "Send via WhatsApp 📲";

  } catch (error) {
    messageBox.innerText = "❌ Failed to generate message. Please check your internet or API key.";
    console.error(error);
  }
}


  // ✅ Update WhatsApp Link
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
  whatsappLink.innerText = "Send via WhatsApp 📲";
}
