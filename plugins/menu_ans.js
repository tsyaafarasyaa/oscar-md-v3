const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6285850539404
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO KAK SAYA 𝒁 𝑬 𝑹 𝑶 𝑴𝑫, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮𝙂𝙧𝙤𝙪𝙥𝘽𝙤𝙩🔮',
               url: 'https://chat.whatsapp.com/IL34QSFDRT7LyAWiicXpBp'
             }

           },
                {
               urlButton: {
               displayText: '🐻𝙂𝙧𝙤𝙪𝙥𝘽𝙤𝙩²🐻',
               url: 'https://chat.whatsapp.com/CXTWVx3Dny7JkVUZ975NFa'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙚𝙬𝙖🚀',
               id: '.sewabot',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙘𝙧𝙞𝙥𝙩🎗️',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝙇𝙞𝙨𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙📖',
               id: '.allmenu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
