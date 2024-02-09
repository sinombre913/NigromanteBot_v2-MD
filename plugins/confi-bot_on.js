const handler = async (m) => {
  global.db.data.chats[m.chat].isbot = false;
  m.reply('*👊Esᴛᴇ Cʜᴀᴛ Yᴀ Pᴜᴇᴅᴇ Usᴀʀᴍᴇ*');
};
handler.help = ['bot on'];
handler.tags = ['admin', 'owner'];
handler.command = /^bot on$/i;
handler.rowner = true;
export default handler;
