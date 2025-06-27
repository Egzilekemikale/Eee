
const ytdl = require('ytdl-core');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');

exports.run = async (client, msg, args) => {
    const url = args[0];
    if (!url || !ytdl.validateURL(url)) {
        return msg.reply("❌ Invalid or missing YouTube URL.");
    }

    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: '18' });

    msg.reply("📥 Downloading... Please wait.");

    const filePath = `/tmp/video.mp4`;
    ytdl(url, { format }).pipe(fs.createWriteStream(filePath)).on('finish', async () => {
        const media = MessageMedia.fromFilePath(filePath);
        await msg.reply(media);
        fs.unlinkSync(filePath);
    });
};
