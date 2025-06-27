
exports.run = async (client, msg, args) => {
    if (!msg.from.endsWith("@g.us")) {
        return msg.reply("❌ This command only works in groups.");
    }

    const chat = await msg.getChat();
    if (!chat.isGroup) return;

    let text = "📢 *TAG ALL MEMBERS*\n";
    let mentions = [];

    for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);
        mentions.push(contact);
        text += `@${participant.id.user} `;
    }

    chat.sendMessage(text, { mentions });
};
