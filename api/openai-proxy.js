export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("POST only");
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type":"application/json", "Authorization":"Bearer " + apiKey },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) { res.status(500).send(String(e)); }
}