// /api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key not set on server." });
  }

  try {
    // Basic validation
    const { messages = [], temperature, max_tokens } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing 'messages' array." });
    }

    // Server-side enforcement (don’t trust client)
    const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const SAFE_MAX_TOKENS = Math.min(Number(max_tokens ?? 400), 800);
    const SAFE_TEMP = Math.max(0, Math.min(Number(temperature ?? 0.7), 1));

    // Optional: keep last 20 turns to bound payload size
    const safeMessages = messages.slice(-20);

    // Timeout guard (25s)
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 25_000);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,                 // enforce model on server
        messages: safeMessages,
        max_tokens: SAFE_MAX_TOKENS,  // clamp
        temperature: SAFE_TEMP,       // clamp
      }),
    });

    clearTimeout(t);

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || "Upstream API error",
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    const msg = String(err || "");
    const isAbort = msg.toLowerCase().includes("abort");
    return res.status(500).json({
      error: isAbort ? "Request timed out, please try again." : msg,
    });
  }
}
