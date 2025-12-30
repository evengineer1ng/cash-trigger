let counter = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    counter++;
    return res.status(200).json({ ok: true, count: counter });
  }

  res.status(200).json({ count: counter });
}
