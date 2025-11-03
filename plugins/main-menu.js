const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
pattern: "menu",
alias: ["allmenu","fullmenu"],
use: '.menu2',
desc: "Show all bot commands",
category: "menu",
react: "📜",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
let totalCommands = Object.keys(commands).length;
let dec = `
*╭────⬡ ${config.BOT_NAME} ⬡────⭓* 
*├─∘❏ 🤖 Owner:* ${config.OWNER_NAME}
*├─∘❏ 📜 Commands:* ${totalCommands}
*├─∘❏ ⏱️ Runtime:* ${runtime(process.uptime())}
*├─∘❏ 📡 Baileys:* Multi Device
*├─∘❏ ☁️ Platform:* Heroku
*├─∘❏ 📦 Prefix:* ${config.PREFIX}
*├─∘❏ ⚙️ Mode:* ${config.MODE}
*├─∘❏ 🏷️ Version:* 2.0 Bᴇᴛᴀ
*╰─────────────────⭓*
> Get yours At
https://nebulatechbots.zone.id

 ╭───『 *SYSTEM/CORE MENU* 』───❏
 ├─∘❏ nebula
 ├─∘❏ gpt
 ├─∘❏ openai
 ├─∘❏ fluxai
 ├─∘❏ stablediffusion
 ├─∘❏ stabilityai
 ├─∘❏ technologia
 ├─∘❏ vv3
 ├─∘❏ uptime
 ├─∘❏ ping
 ├─∘❏ alive
 ├─∘❏ repo
 ├─∘❏ srepo
 ├─∘❏ shutdown
 ├─∘❏ restart
 ├─∘❏ repeat
 ├─∘❏ update
 ╰───❏
 
 ╭───『 *AI & IMAGE MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ scanimg
 ├─∘❏ deepseek
 ├─∘❏ url2image
 ├─∘❏ nglimage
 ├─∘❏ gpass
 ├─∘❏ getpic
 ├─∘❏ githubstalk
 ├─∘❏ gitclone
 ├─∘❏ urlencode
 ├─∘❏ tourl
 ├─∘❏ trt
 ├─∘❏ tts
 ├─∘❏ aivoice
 ╰───❏
 
 ╭───『 *PHOTO EDITOR MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ jailedit
 ├─∘❏ invertedit
 ├─∘❏ greyedit
 ├─∘❏ adedit
 ├─∘❏ bluredit
 ├─∘❏ wantededit
 ├─∘❏ removebg
 ├─∘❏ nokiaedit
 ├─∘❏ jokedit
 ├─∘❏ fullpp
 ├─∘❏ take
 ├─∘❏ tiny
 ├─∘❏ wallpaper
 ├─∘❏ screenshot
 ├─∘❏ rcolor
 ╰───❏
 
 ╭───『 *FUN & PERSONALITY MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ 8ball
 ├─∘❏ compliment
 ├─∘❏ lovetest
 ├─∘❏ emoji
 ├─∘❏ compatibility
 ├─∘❏ aura
 ├─∘❏ fancy
 ├─∘❏ quote
 ├─∘❏ flirt
 ├─∘❏ joke
 ├─∘❏ pickup
 ├─∘❏ Truth
 ├─∘❏ dare
 ├─∘❏ roast
 ├─∘❏ motivation
 ├─∘❏ poetry
 ├─∘❏ fingering
 ├─∘❏ handjob
 ├─∘❏ nikal
 ├─∘❏ chumi
 ├─∘❏ sad
 ├─∘❏ shy
 ├─∘❏ moon
 ├─∘❏ angry
 ├─∘❏ heart
 ├─∘❏ confused
 ├─∘❏ happy
 ╰───❏

 ╭───『 *AUDIO EDITOR MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ slow
 ├─∘❏ fast
 ├─∘❏ baby
 ├─∘❏ demon
 ├─∘❏ radio
 ├─∘❏ chipmunk
 ├─∘❏ robot
 ├─∘❏ nightcore
 ├─∘❏ earrape
 ╰───❏
 
 ╭───『 *INFORMATION MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ define
 ├─∘❏ weather
 ├─∘❏ news
 ├─∘❏ playstore
 ├─∘❏ countryinfo
 ├─∘❏ calculate
 ├─∘❏ time
 ├─∘❏ date
 ├─∘❏ coinflip
 ├─∘❏ flip
 ├─∘❏ roll
 ├─∘❏ rate
 ├─∘❏ count
 ├─∘❏ countx
 ├─∘❏ binary
 ├─∘❏ unbase64
 ├─∘❏ base64
 ╰───❏

 ╭───『 *NLP & CONVERSATION MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ fancy
 ├─∘❏ compliment
 ├─∘❏ lovetest
 ├─∘❏ flirt
 ├─∘❏ quote
 ├─∘❏ 8ball
 ├─∘❏ joke
 ├─∘❏ Truth
 ├─∘❏ dare
 ├─∘❏ pickup
 ├─∘❏ emoji
 ├─∘❏ compatibility
 ├─∘❏ aura
 ╰───❏

 ╭───『 *SOCIAL MEDIA MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ Facebook
 ├─∘❏ Facebook2
 ├─∘❏ Pinterest
 ├─∘❏ TikTok
 ├─∘❏ TikTok2
 ├─∘❏ TikTok3
 ├─∘❏ ytpost
 ├─∘❏ ringtone
 ├─∘❏ emix
 ├─∘❏ tiktoksearch
 ├─∘❏ play
 ╰───❏
 
 ╭───『 *GROUP MANAGEMENT MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ requestlist
 ├─∘❏ rejectall
 ├─∘❏ acceptall
 ├─∘❏ updategdesc
 ├─∘❏ add
 ├─∘❏ join
 ├─∘❏ gname
 ├─∘❏ ginfo
 ├─∘❏ glink
 ├─∘❏ leave
 ├─∘❏ end
 ├─∘❏ newgc
 ├─∘❏ mute
 ├─∘❏ lock
 ├─∘❏ revoke
 ├─∘❏ kick
 ├─∘❏ promote
 ├─∘❏ demote
 ├─∘❏ poll
 ├─∘❏ out
 ├─∘❏ unlock
 ├─∘❏ unmute
 ├─∘❏ hidetag
 ├─∘❏ tagall
 ├─∘❏ tagadmins
 ├─∘❏ mention
 ├─∘❏ broadcast
 ├─∘❏ antidelete
 ╰───❏

 ╭───『 *OWNER MENU*  』───❏
 ├─∘❏ 
 ├─∘❏ auto reply
 ├─∘❏ autosticker
 ├─∘❏ autorecording
 ├─∘❏ autotyping
 ├─∘❏ block
 ├─∘❏ unblock
 ├─∘❏ creact
 ├─∘❏ config
 ├─∘❏ get
 ├─∘❏ jid
 ├─∘❏ ban
 ├─∘❏ unban
 ├─∘❏ listban
 ├─∘❏ setsudo
 ├─∘❏ delsudo
 ├─∘❏ listsudo
 ├─∘❏ adminevents
 ├─∘❏ ownerreact
 ├─∘❏ deletelink
 ├─∘❏ customreact
 ├─∘❏ setreacts
 ├─∘❏ autoreact
 ├─∘❏ autostatusreply
 ├─∘❏ antibot
 ├─∘❏ antilink
 ├─∘❏ mentionreply
 ├─∘❏ anticall
 ├─∘❏ welcome
 ├─∘❏ goodbye
 ├─∘❏ setownername
 ├─∘❏ setbotname
 ├─∘❏ setprefix
 ├─∘❏ setbotimage
 ├─∘❏ setonline
 ├─∘❏ setppall
 ├─∘❏ getbio
 ├─∘❏ blocklist
 ├─∘❏ privacy
 ├─∘❏ groupsprivacy
 ├─∘❏ getprivacy
 ├─∘❏ stealpp
 ├─∘❏ setpp
 ├─∘❏ setreacts
 ├─∘❏ owner
 ╰───❏
 
 ╭───『 *TOOLS AND UTILITIES MENU* 』───❏
 ├─∘❏ 
 ├─∘❏ gjid
 ├─∘❏ delete
 ├─∘❏ clearchats
 ├─∘❏ otpbox
 ├─∘❏ templist
 ├─∘❏ tempnum
 ├─∘❏ request
 ├─∘❏ remini
 ├─∘❏ person
 ├─∘❏ readmore
 ├─∘❏ tempmail
 ├─∘❏ checkmail
 ├─∘❏ attp
 ├─∘❏ vsticker
 ├─∘❏ vcf
 ├─∘❏ forward
 ├─∘❏ sticker
 ├─∘❏ sticker2img
 ├─∘❏ tomp3
 ├─∘❏ toptt
 ├─∘❏ dbinary
 ├─∘❏ chai
 ├─∘❏ cgrt
 ├─∘❏ channelid
 ├─∘❏ pick
 ├─∘❏ shapar
 ├─∘❏ repeat
 ├─∘❏ take
 ├─∘❏ bugmenu
 ├─∘❏ technologia
 ├─∘❏ ridz
 ╰───❏

╭───『 *RELIGIOUS MENU* 』───❏
├─∘❏
├─∘❏ quran
├─∘❏ quranmenu
╰───❏

${config.DESCRIPTION}`;

await conn.sendMessage(from, { 
    image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/rinv3g.jpg' }, 
    caption: dec, 
    contextInfo: { 
        mentionedJid: [m.sender], 
        forwardingScore: 999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
            newsletterJid: '120363422794059664@newsletter', 
            newsletterName: config.BOT_NAME, 
            serverMessageId: 8
        } 
    } 
}, { quoted: mek });

} catch (e) { 
    console.log(e); 
    reply(`Error: ${e}`); 
} 
});