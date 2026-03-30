require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root and health endpoints for quick backend checks in browser.
app.get('/', (req, res) => {
  res.json({
    name: 'Cyberrescue Backend API',
    status: 'ok',
    endpoints: ['/api/breach-check', '/api/tips/daily', '/api/contact', '/health']
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  res.json({
    success: true,
    message: 'Message received. Thank you for contacting CyberRescue.',
  });
});

// Mock API: Breach Checker
app.post('/api/breach-check', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Simulate a delay for realism
  setTimeout(() => {
    // Deterministic mock result based on email length (just for demo purposes)
    const mockPwned = email.length % 2 === 0;
    
    if (mockPwned) {
      res.json({
        breached: true,
        breachesCount: Math.floor(Math.random() * 5) + 1,
        message: 'Oh no! This email was found in known data breaches.',
        sources: ['Adobe (2013)', 'LinkedIn (2012)', 'Canva (2019)'].slice(0, Math.floor(Math.random() * 3) + 1)
      });
    } else {
      res.json({
        breached: false,
        breachesCount: 0,
        message: 'Good news! We couldn\'t find any breaches for this email.',
        sources: []
      });
    }
  }, 1500);
});

// API: Daily Cyber Tips
const tips = [
  "Never use the same password for multiple important accounts.",
  "Always keep your software and operating systems updated to patch vulnerabilities.",
  "Public Wi-Fi is rarely secure. Avoid logging into sensitive accounts without a VPN.",
  "Phishing emails often create a false sense of urgency. Pause before clicking unexpected links.",
  "Multi-Factor Authentication (MFA) can block 99.9% of automated automated account attacks.",
  "Hover over links in emails to see the actual destination URL before clicking.",
  "A padlock icon in the browser doesn't mean a site is completely safe, just encrypted."
];

app.get('/api/tips/daily', (req, res) => {
  // Return a random tip
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  res.json({ tip: randomTip });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
