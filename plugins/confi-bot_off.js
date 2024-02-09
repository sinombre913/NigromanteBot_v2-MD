const handler = async (m) => {
  global.db.data.chats[m.chat].isbot = true;
  m.reply('*El Bot No Reacciona A Ningún Comando Asta Que Lo Enciendan*');
};
handler.help = ['bot off'];
handler.tags = ['admin', 'owner'];
handler.command = /^bot off$/i;
handler.rowner = true;
export default handler;
