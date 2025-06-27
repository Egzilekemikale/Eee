
exports.run = async (client, msg, args) => {
    const menu = `📜 *Exzile Bot Menu*
    
!menu - Show this menu
!ai [text] - Chat with AI
!yt [url] - Download YouTube media
!fb [url] - Download Facebook video
!tagall - Mention all group members (admin)
!owner - Show owner info
`;
    msg.reply(menu);
};
