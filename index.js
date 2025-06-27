
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Exzile Bot is ready!');
});

client.on('message', async (msg) => {
    const prefix = "!";
    if (!msg.body.startsWith(prefix)) return;

    const args = msg.body.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const cmd = require(`./commands/${command}.js`);
        await cmd.run(client, msg, args);
    } catch (e) {
        console.log(`⚠️ Command not found: ${command}`);
    }
});

client.initialize();
