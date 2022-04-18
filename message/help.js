const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const { color, bgcolor } = require('../lib/color')

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



exports.allmenu = (sender, prefix, pushname) => {
	return `*── 「 Amelia Botz - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

  *]───── COMMAND ─────[*
					          ▾

  *╭─( 📜 ) Main Menu*
  *│*
  *│▸* ${prefix}menu
  *│▸* ${prefix}runtime
  *│▸* ${prefix}speed
  *│▸* ${prefix}ss
  *│▸* ${prefix}quotes
  *│▸* ${prefix}
  *│▸* ${prefix}
  *│*
  *╰────────────⦁*
  
  *╭─( ♻️ ) Random Menu*
  *│*
  *│▸* ${prefix}cecan
  *│▸* ${prefix}cogan
  *│▸* ${prefix}anime
  *│*
  *╰────────────⦁*
  
  *╭─( ✏️ ) Converter/Tools*
  *│*
  *│▸* ${prefix}sticker
  *│▸* ${prefix}toimg
  *│▸* ${prefix}tomp3
  *│▸* ${prefix}tomp4
  *│▸* ${prefix}toptt
  *│▸* ${prefix}togif
  *│▸* ${prefix}volume
  *│▸* ${prefix}fast
  *│▸* ${prefix}slow
  *│▸* ${prefix}hode
  *│▸* ${prefix}ghost
  *│▸* ${prefix}nightcore
  *│▸* ${prefix}tupai
  *│▸* ${prefix}imut
  *│*
  *╰────────────⦁*

  *╭─( 📥 ) Downloader*
  *│*
  *│▸* ${prefix}play
  *│▸* ${prefix}instagram
  *│▸* ${prefix}facebook
  *│▸* ${prefix}pinterest
  *│▸* ${prefix}spotify
  *│*
  *╰────────────⦁*

  *╭─( 🔎 ) Search Menu*
  *│*
  *│▸* ${prefix}lirik
  *│▸* ${prefix}grupwa
  *│▸* ${prefix}ytsearch
  *│▸* ${prefix}whatmusic
  *│*
  *╰────────────⦁*

  *╭─( 👥 ) Group Menu*
  *│*
  *│▸* ${prefix}linkgrup
  *│▸* ${prefix}setppgrup
  *│▸* ${prefix}setnamegc
  *│▸* ${prefix}setdesc
  *│▸* ${prefix}group
  *│▸* ${prefix}revoke
  *│▸* ${prefix}hidetag
  *│▸* ${prefix}kick
  *│▸* ${prefix}add
  *│▸* ${prefix}demote
  *│▸* ${prefix}promote
  *│▸* ${prefix}kickme
  *│*
  *╰────────────⦁*
  
   *╭─( ♨️ ) Owner Menu*
   *│*
   *│▸* ${prefix}join
   *│▸* ${prefix}broadcast
   *│▸* ${prefix}bcgc
   *│▸* ${prefix}setppbot
   *│▸* ${prefix}exif
   *│▸* > evalcode
   *│▸* x evalcode-2
   *│▸* $ executor
   *│*
   *╰────────────⦁* 
   
   *╭─( 🙏 ) Thanks To*
   *│*
   *│* • Irfan Hariyanto
   *│* • Dittaz
   *│* • Nina Kawai
   *│* • Resta Gamteng :v
   *│* • Zeeone Ofc
   *│* • Yudha Perdana
   *│* • Yogi PW
   *│* • Decode Denpa
   *│* • Fernazer
   *│* • X - Dev Team
   *│* • XChillDs & Yuzu
   *│* • Dika Ardnt
   *│*
   *╰────────────⦁*

`+'     \`\`\`Powered by Nodejs\`\`\`'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
