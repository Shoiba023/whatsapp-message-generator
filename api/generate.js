// File: /api/generate.js
export default async function handler(req, res) {
  const { prompt } = await req.body ? req.body : await req.json(); // fallback for Vercel

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content || "❌ No message returned";

  res.status(200).json({ message });
}
