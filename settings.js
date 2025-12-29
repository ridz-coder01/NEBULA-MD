const fs = require('fs')
const chalk = require('chalk')


global.ytname = "YT: Ridz-coder01"
global.socialm = "GitHub: Ridz-coder01"
global.location = "Africa,Kampala" 

global.botname = 'NEBULA-MD' 
global.ownernumber = '263714732501'
global.botnumber = '256749482583'
global.ownername = 'Rɪᴅᴢ Cᴏᴅᴇʀ❦'

global.websitex = "https://ridzcoder.zone.id"
global.wagc = "https://chat.whatsapp.com/KQzM54TU1LmGwIGc2TcOGi"
global.themeemoji = '🧝'

global.wm = "ᴅᴇᴅɪᴄᴀᴛᴇᴅ ᴛᴏ Fᴀʀɪᴅᴀʜ🧝"
global.botscript = 'https://github.com/ridz-coder01/NEBULA-MD'
global.packname = "Rɪᴅᴢ Cᴏᴅᴇʀ❦"

global.author = "Rɪᴅᴢ Cᴏᴅᴇʀ❦\n\n+263714732501"
global.creator = "263714732501@s.whatsapp.net"
global.vprefix = '.'
global.premium = ["263714732501","256742634089"] // Premium User
global.hituet = 0
global.autoblocknumber = '1'
global.antiforeignnumber = '1'
global.welcome = true
global.anticall = false
global.autoswview = true
global.adminevent = false
global.groupevent = false
global.typemenu = 'v12'
global.typereply = 'v1'
global.mess = {
        limit: 'Your limit is up!',
        nsfw: 'Hey Horny User Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error! Please try again later',
    success: 'Here you go!'
}
global.thumb = fs.readFileSync('./Media/theme/Nebula.png')


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})