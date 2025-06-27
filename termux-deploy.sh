#!/data/data/com.termux/files/usr/bin/bash

# Update and install required packages
pkg update -y
pkg upgrade -y
pkg install nodejs git -y
pkg install libwebp ffmpeg -y
pkg install wget -y

# Install npm dependencies
npm install

# Run the bot
echo "✅ Setup complete. Run the bot using:"
echo "node index.js"
