export default async function handler(req, res) {
    const { messages, apiKey } = req.body;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({ model: "claude-3-5-sonnet-20240620", max_tokens: 1024, messages, stream: true })
    });
    response.body.pipe(res);
}
