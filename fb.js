
exports.run = async (client, msg, args) => {
    const url = args[0];
    if (!url || !url.includes("facebook.com")) {
        return msg.reply("❌ Invalid Facebook URL.");
    }

    msg.reply("🔧 Facebook download support coming soon!");
};
