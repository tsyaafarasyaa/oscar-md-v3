let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/be7d19f221897bc523561.jpg'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI UNTUK*_  𝐓𝐚𝐬𝐲𝐚𝐚 ×͜×
╠═══════════════════
║          ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║➸ *DANA* : 
║➸ 085784914140
║➸ *PULSA
║➸ 083830815715
║➸ *Saweria*:
║ https://saweria.co/NakanooMikuu
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media*
╠════════════════════
║     ❉ 〔 𝐒𝐨𝐬𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 𝒁𝑬𝑹𝑶 〕 ❉
║➸ *GROUP BOT*
║ https://chat.whatsapp.com/IL34QSFDRT7LyAWiicXpBp
║➸ *GROUP JB*
║ https://chat.whatsapp.com/CXTWVx3Dny7JkVUZ975NFa
║➸ *Github*
║ https://github.com/tsyaafarasyaa 
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
