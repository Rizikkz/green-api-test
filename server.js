const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/:method', async (req, res) => {
  const { idInstance, apiToken, body } = req.body;
  const method = req.params.method;

  const url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiToken}`;

  try {
    const response = await fetch(url, {
      method: body ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    res.status(response.status).json({
      httpStatus: response.status,
      httpOk: response.ok,
      method,
      response: data
    });
  } catch (e) {
    res.status(500).json({
      error: e.message
    });
  }
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started on http://127.0.0.1:3000');
});