export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("POST only");
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "x-api-key": apiKey,
        "anthropic-version":"2023-06-01"
      },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) { res.status(500).send(String(e)); }
}