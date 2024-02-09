import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
      body: '❥ᰰຼ ⃟ᬽ៸ 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇༒★»',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
