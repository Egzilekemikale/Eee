
const axios = require('axios');
require('dotenv').config();

exports.run = async (client, msg, args) => {
    const prompt = args.join(" ");
    if (!prompt) return msg.reply("❌ Please provide a prompt.
Example: !ai Who is Elon Musk?");

    try {
        const response = await axios.post("https://api.openai.com/v1/completions", {
            model: "text-davinci-003",
            prompt,
            max_tokens: 150,
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        msg.reply("🤖 " + response.data.choices[0].text.trim());
    } catch (err) {
        msg.reply("❌ Error with AI response.");
    }
};
