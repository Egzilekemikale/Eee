
# Exzile WhatsApp Bot 🤖

A powerful WhatsApp bot built with `whatsapp-web.js` and AI integration.

## 🔧 Features
- `!menu` – show all commands
- `!ai` – chat with OpenAI
- `!yt` – download YouTube videos
- `!fb` – (coming soon)
- `!tagall` – mention everyone in group
- `!owner` – show bot owner's contact

## 🚀 Termux Deployment

```bash
pkg update -y
pkg install nodejs git -y
pkg install libwebp ffmpeg -y
git clone https://github.com/exzile-bot/exzile-whatsapp.git
cd exzile-whatsapp
npm install
cp .env.example .env
node index.js
```

## ⚙️ Configuration
Create a `.env` file:
```
OPENAI_API_KEY=your-api-key
```

---

**By Exzile Bot Team**
