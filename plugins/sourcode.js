//Jangan Di ganti!! 
// Jika ada yang Jual sc langsung Di hapus!!

let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/c58ccc276c39701a5ca2d.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ Kepoan Jir🗿
│ *Mampir Group Owner Banh:* 
│ ╰ https://chat.whatsapp.com/IL34QSFDRT7LyAWiicXpBp
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa mampir Group Owner Kak!

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
