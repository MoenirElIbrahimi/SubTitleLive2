const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000; // Of een andere poort naar keuze

// Middleware
app.use(cors()); // Hiermee kunnen requests van andere origins worden geaccepteerd
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Vertaalroute
app.post('/translate', async (req, res) => {
  const { text, target_lang } = req.body;

  if (!text || !target_lang) {
    return res.status(400).json({ error: 'Missing text or target_lang' });
  }

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'DeepL-Auth-Key DEEPL_API_KEY ',
      },
      body: new URLSearchParams({
        text: text,
        target_lang: target_lang,
      }),
    });

    const data = await response.json();
    console.log('Verstuurde data:', { text, target_lang });

    if (response.ok) {
      res.json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Error while translating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
