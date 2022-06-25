
"use strict";
const { 
WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser,downloadMediaMessage, makeInMemoryStore
} = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const ra = require("ra-api");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
const hxz = require("hxz-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { performance } = require('perf_hooks')
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const Download = require("@phaticusthiccy/open-apis");
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
const { sizeFormatter } = require('human-readable')
const hx = require("hxz-api")
const convert = require('imagemagick')
const gis = require('g-i-s');
const {
youtubeSearch,
mediafiredl, 
lyricsv2, 
lyrics, 
facebookdl, 
facebookdlv2,
tiktokdl, 
tiktokdlv2, 
twitterdl, 
twitterdlv2,
getZodiac,
liputan6,
googleIt, 
wallpaperv2, 
googleImage, 
jadwalTVNow, 
gempa, 
stickerTelegram,
stickerLine,
latinToAksara,
aksaraToLatin,
asmaulhusna, asmaulhusnajson,
alquran,delay,
jadwalsholat, listJadwalSholat,
gempaNow} = require('@bochilteam/scraper')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});


//----------------- LIB FILE ------------------\\
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color, bgcolor } = require('../lib/color')
//const { webp2mp4File } = require("../lib/converter")
const { pinterest } = require("../lib/pinterest")
const {formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep,getBuffer} = require("../lib/myfunc");
const {parseMention, FileSize, weton,week,calender,dateIslamic,formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom} = require('../lib/functions')
const textpro = require('../lib/textpro')
const {TelegraPh} = require('../lib/uploader')
const { ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("../lib/blockcmd");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const {getDateId,clearAllUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("../lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/user");
const { Nothing,Failed,Succes,addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _prem = require("../lib/premium");
const { addBlock, unBlock, cekBlock } = require("../lib/blockuser");
// Exif
const Exif = require("../lib/exif")
const exif = new Exif()


// Database
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'));
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');
const setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const spammer = []
//------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')                                                                     
var publik = true
//=================================================//
module.exports = async(xdev, dev, m, store) => {


var Ownerin ="6285156137901@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6285156137902@s.whatsapp.net` ]
xdev.readMessages([dev.key])
 

try {

//console.log(nomerOwner)
const { type, now, fromMe } = dev
let { allmenu, fitur} = require('./help')
const Id =  dev.key.id
const antibot = dev.isBaileys
const content = JSON.stringify(dev.message)
const from  = dev.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? dev.message.conversation : (type == 'imageMessage') ? dev.message.imageMessage.caption : (type == 'videoMessage') ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


if (multi){
var prefix = /^[°zZ#@+,.?=''():√%!¢£¥€π¤ΠΦ&<`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@+,.?=''():√%¢£¥€π¤ΠΦ&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
} else if (nopref){
var  prefix = ''
var thePrefix ="No prefix"
} else if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
var thePrefix ="All Prefix"
} else {
prefix = prefa
var thePrefix = prefa
}


const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''                        
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(" ")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = xdev.user.id ? xdev.user.id.split(":")[0]+"@s.whatsapp.net" : xdev.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (dev.key.participant ? dev.key.participant : dev.participant) : dev.key.remoteJid
const senderNumber = sender.split("@")[0] 
const isOwner = ownerNumber.includes(sender)
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map(v => v.id)
const totalGroup = totalchat.filter(v => v.endsWith('g.us'))
const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const pushname = dev.pushName || "No Name"
const chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isHit = checkHit(senderNumber, user)   
const gcounti = gcount 
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const delay = time => new Promise(res => setTimeout(res, time))
  
  
//User 
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user) 
//---------Global Data----------\\

require("../message.js")(senderNumber, prefix,command)


//Security / Keamanan
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)

// Presence Online
if (isCmd){
xdev.sendPresenceUpdate('composing', from)
} else {
xdev.sendPresenceUpdate('available', from)
}


//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
    

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/reply.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/reply.jpg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/reply.jpg'), sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/reply.jpg')}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/reply.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/reply.jpg')}}}


  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}

  

 //SetReply
const setReply = async(teks) =>{ 
if(replyType === "web2"){
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${fake}`,body:`Speed up`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`https://youtube.com/watch?v=TOmXzkWuCWk`}}, text: teks })
} else if(replyType === "web"){
if(language == "id"){
var result = teks
} else {
let translate = require('translate-google-api')
let tld = 'cn'
var result = await translate(teks, {tld,to: language,})
}
xdev.sendMessage(from, { contextInfo: {   forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `${fake}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`https://youtube.com/watch?v=TOmXzkWuCWk`}},showAdAttribution: true, text: result }, { quoted: dev })
} else if(replyType === "mess"){
xdev.sendMessage(from, {text: teks}, { quoted: dev });
} else if(replyType === "quoted"){
xdev.sendMessage(from,{ text: teks}, { quoted: setQuoted });
} else if(replyType === "troli"){
let template = generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': "2022",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake,
'sellerJid': `62887435047326@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': dev
});
await xdev.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
xdev.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}


//Button document ✓
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./temp/file.docx'),
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : "Extream", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

await xdev.sendMessage(id, buttonMessage,options)
} 
 


// Public & Self
if (!publik && !itsMe && !isOwner && !theOwner) return
 

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
 })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
		
		

		
		
		
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
xdev.sendMessage(from, { text: teks }, { quoted: dev })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  xdev.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }}):  xdev.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const sendMess = (hehe, teks) => {
xdev.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return xdev.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        




//onlyOwner
  const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 5){
let Name = await xdev.getName(jid+ `@s.whatsapp.net`)
if(cekBannedUser(jid, ban) && !isOwner){return}
addBanned(Name,calender,  jid, ban)          
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}



//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
removeObject(spammer,"id",senderNumber)
console.log("Sukses remove spammer")
}
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekBannedUser(senderNumber, ban) && !isOwner){return}
if(cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log("antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}

//ANTI SPAM GROUP CHAT     
if (isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)



//-------------------- 》SECURITY《 ------------------\\

 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.jid == member[i]) 
if (!usersId.groupAdmins ){
 await xdev.groupParticipantsUpdate(from, [member[i]], 'remove')
}
}
}
}  

expiredClaim(_claim)
//AUTO REGISTER && !dev.key.fromMe && !isOwner 
if (!isHit && isCmd){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
} 

//Auto Hit 
if(isCmd){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`
  
//--------------------------AREA EXP USER------------------------\\
//Exp User
if ( isHit && !itsMe && isCmd ) {

try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


let anune =`${userLevel}0000`
let susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
let anuitu =`${userLevel}`
var sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
var sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
var nana = randomNomor(24) + "h"
_prem.addPremiumUser (sender, nana, premium)         
} else {
var nana = "0"
}

let levelnih = userLevel + 1

let teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}
🎫 Premium : ${nana.split("h")[0]} Jam`
//but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}



//-----------------------------------------AKHIR BATAS EXP USER-->

        
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')

/*
//AUTO BIO BOTZ FIX BY DITTAZ
var slow = false
if(slow) {

} else if(!slow) {
slow = true
setInterval(() => {
xdev.setStatus(`${fake} | ⏰ ${runtime(process.uptime() )}`)
slow = false
}, 30_000)
} 
*/
  
//AUTO RESPON SIMI BY DECODE DENPA 
if (!isGroup && !isCmd && !itsMe && autorespon && !isSticker && !isAudio && !isMedia) { 
try{
xdev.sendPresenceUpdate('composing', from)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, {methods: "GET"})
let sami = simi.success  
setReply(`${sami}`)
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
} 




//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log(color("Download video with ytdl-core"))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: dev})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log(color("Download audio with ytdl-core"))
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await xdev.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
input: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await xdev.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
} 

// Logs;
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

//private chat
let nomerAsing = senderNumber.startsWith('212')
if (!isGroup && nomerAsing) {
await xdev.sendMessage(from, {image: {url: "https://telegra.ph/file/58668a8ad9af87724cd2d.jpg"},
 caption: "Fuck you bitch 🖕"})
await addBlock(sender, blocked)
console.log(`Nomer asing dari ${senderNumber}`)
return xdev.updateBlockStatus(sender, "block") 
} 

//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
xdev.sendMessage(from, {sticker: buffer}, {quoted:dev })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
xdev.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}

 


  
//Auto React
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
xdev.sendMessage(from, { react: { text: emot, key: dev.key } })	
}
}

  
// Banchat
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
 }


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

  
xdev.math = xdev.math ? xdev.math : {}
if(isGroup && from in xdev.math){
  console.log(xdev.math)
  try{
  let id = from
    if (!(id in xdev.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
    let math = JSON.parse(JSON.stringify(xdev.math[id][1]))
    if (budy == math.result) {
      clearTimeout(xdev.math[id][3])
      delete xdev.math[id]
      await setReply(` benar\n\n${math.bonus} XP\n\nmath ${math.mode}`)
    } else {
    
      if (--xdev.math[id][2] == 0) {
        clearTimeout(xdev.math[id][3])
        delete xdev.math[id]
        setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
      } else setReply(`*jawaban salah!*\nmasih ada ${xdev.math[id][2]} kesempatan`)
    }
  }catch(e){

console.log(e)
}
}


//add to dashboard
if(isCmd) Succes(toFirstCase(command), dash)
// ==========================================================\\
try{
switch(command) {
	

case 'menu':
let menunya = allmenu(getLimit, senderNumber, limitCount, user, getBalance, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let mok = [{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

    const muk = [
			
      {urlButton: {
      displayText: `Owner Bot`,
      url: `https://wa.me/${nomerOwner}`
    }},
			 { quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
			{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }
     
		]

    
          
                    
let options1 =
{ forward,
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
mediaUrl: "https://youtu.be/v4kWLu4Eb1Y",
sourceUrl: "https://www.youtube.com/watch?v=JJwLesqqcmM"
}
}
if(setmenu == "document"){
xdev.sendButDoc(from, menunya,readmore+fiturnya,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options1)
} else if(setmenu == "location"){
xdev.sendButLoc(from, menunya,"                      "+readmore+fiturnya+"\n"+copyright,fs.readFileSync('./stik/thumb.jpeg'), mok, options1)
} else if(setmenu == "image"){
xdev.sendButImage(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumb.jpeg'),mok) 
} else if(setmenu == "image2"){
xdev.send5ButImg (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk) 
} else if(setmenu == "gif"){
xdev.send5ButGif (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/video.mp4'), muk,fs.readFileSync('./stik/fake gif.jpeg'),{quoted: dev}) 
} else if(setmenu == "location2"){
xdev.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk) 
} else if(setmenu == "katalog"){
xdev.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), {quoted: setQuoted})
}
break


case 'play':{
if(!q) return setReply("Teksnya mana om")
setReply(mess.wait)
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')

try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}

let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}


   
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, `© Extream`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), aklo, options2)
}
break

			
				

case 'playmp3':
if(!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break

	
	
case 'playmp4':{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break

case 'getname':
if(isGroup) {
console.log(users)
const sname = await xdev.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await xdev.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
  



case 'del':
if (mentionByReply == botNumber) {
xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
} else  {
setReply("Reply pesan bot nya")
}
break



case 'setexif':
if (!isOwner) return reply(mess.only.owner)
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break


// Converter & Tools Menu
case 'sticker':  case 's':
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
    pack: packName, // The pack name
    author: authorName, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 70, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}

} else if (isVideo || isQuotedVideo) {
  try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
    pack: packName, // The pack name
    author: authorName, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 1, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
  }
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}

break

case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break



case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break       
       
case 'runtime':
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break

case 'out':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await xdev.groupLeave(from)
break


case 'ss':{
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
if (args.length < 1) return setReply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await xdev.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: dev})
}
break

case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await xdev.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

let teks = `*BROADCAST GROUP*\n\n${q}`

	
if (isImage || isQuotedImage) { //Image
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await delay(1000)
 await xdev.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: fs.readFileSync('./stik/menu.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, video: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, audio: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await xdev.sendButLoc(i, teks,copyright,fs.readFileSync('./stik/menu.jpg'), yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break

case 'culik':
if (!isOwner && !itsMe) return setReply(mess.only.ownerB)
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
console.log(i.id)
await pantek.push(i.id)
}
await xdev.groupParticipantsUpdate(q, pantek, 'add')
break
	
case 'kick': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
    

case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [Input], 'add').then((res) => setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
    
case 'demote': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'kickme':
try{
if (!isGroup) return
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break

case 'admin': case 'promote': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
			
			
case 'pinterest':
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
xdev.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
xdev.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
}
})
break
			
case 'anime':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
xdev.sendMessage(from,{ image: media,caption:'NIH' },{quoted:dev})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break  


case 'cecan': 
setReply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break

case 'cogan': 
setReply(mess.wait)
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break 


case 'join':{
if(!isOwner) return setReply(mess.only.owner)
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await xdev.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break


case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
xdev.sendMessage(from, { text: q ? q : '', mentions: mem })
break


case 'lirik':{
if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
setReply(mess.wait)
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
xdev.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: dev })
}).catch(() => reply(`Judul lagu tidak ditemukan`))
}
break

case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
           
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break


case 'quotes':
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes+'\n\n-- '+data.result.author)
break


case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break


case 'toptt':
if (isQuotedAudio){
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await xdev.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: dev})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break


case 'togif':
if ( isQuotedSticker) {
setReply(mess.wait)
let file = await  xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
await sendGif(fs.readFileSync(outMp4))
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
    })
}) 

} else if(isQuotedVideo){
setReply(mess.wait)
let outMp4 = getRandom('.mp4')
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break




case 'tomp3':
if (isQuotedVideo) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
            
            

            
case 'hode':
 if(isQuotedAudio) { 
setReply(mess.wait)
let medok = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break

case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
setReply(mess.wait)
let media3 = await xdev.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await xdev.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: dev})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break
           
            
case 'ghost':
if(isQuotedAudio) { 
setReply(mess.wait)
let mele = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break



case 'nightcore':
if(isQuotedAudio) { 
setReply(mess.wait)
let mela = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break



case 'tupai':
if(isQuotedAudio) { 
setReply(mess.wait)
let medoi = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break


case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
            }
            break


case 'imut':
if(isQuotedAudio) { 
setReply(mess.wait) 
let masa = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break



case 'whatmusic':
if (isQuotedAudio) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
 })
 } else {
setReply("Reply audio atau video")
}
break





case 'infobotz':{       
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = xdev.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let gender ="Female"
let nomerOwner =`Ownerin.split("@")[0]`
let menunya =`
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」

*▸* Nama : ${fake}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-Dev Team
   Yogi PW
   Hexagon
   Dttaz

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-Dev Team
   Resta Gamteng
   Zeeone Ofc
   X-Dev Team
   Yudha perdana
   Xchilds
   Dika Ardnt
`
let info = fs.readFileSync('./stik/bot.jpg')
let options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/bot.jpg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
xdev.sendButImage(from, menunya, `Baterai : error\n© Extream`, fs.readFileSync('./stik/bot.jpg'), gbutsan)      
} 
break 


case 'tomp4':
if (isQuotedSticker) {
setReply(mess.wait)
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
await xdev.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: dev})
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
})
}) 

}
break


case 'attp':
 try {
if (args.length == 0) return setReply(`Example: ${prefix + command} YUxdev`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await xdev.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: dev })
} catch (e) {
 console.log(e)
 setReply(`Maap sedang error coba lagi besok`)            
}
break
              
            
case 'spotify':{
if(!q) return setReply("Masukan link Spotify")
let data = await spotify.getTrack(q) 
let teks =`
Nama: ${data.name}
Artists: ${data.artists.join(' ')}
Album : ${data.album_name}
Release: ${data.release_date}

Mohon tunggu, sedang mengirim
File audio ${data.name}
`
await xdev.sendMessage(from, {caption: teks, image: { url: data.cover_url}, mimetype:  "image/jpeg" }, {quoted: dev})        
let song = await spotify.downloadTrack(q)
console.log(song)
await xdev.sendMessage(from, {audio: song, mimetype:  'audio/mp3' }, {quoted: dev})        
}
break              


	
case 'scmp3':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(nana)
}
break
 
case 'scdoc':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(nana)
}
break
 
 
case 'scsearch':
if(!q) return setReply("Masukan link")
let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 15, 
offset: 0, 
filter: 'tracks' 
});

let teks =`*SOUNDCLOUD SEARCH*`

for (let res of result.collection){
teks +=`

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
🌐 Url : ${res.permalink_url}

═════════════════
`
} 

teks +=`_Thanks for choosing SoundCloud_`

try{
let anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

//xdev.xdev.sendButImage (from, teks, © ${fake1}, yamiyami, nano)
 break
  
  
case 'playmusic':
{
if(!q) return setReply("Masukan judul lagu")
setReply(mess.wait)
if(q.startsWith("https://")){
let nana = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

xdev.sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 

} else {

let scdl = await SoundCloud.create();
let result = await scdl.search({
  query: q,
  limit: 20, 
  offset: 0, 
  filter: 'tracks' 
});

let res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`

try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
xdev.sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 
}
}
break



case 'ig':{
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
if (!q) return setReply('Linknya?')
let igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await xdev.sendMessage(from, {caption: `Nih`, video: {url: data.url} }, {quoted: dev})
console.log(data)
console.log(data.url)
})
} else {
let { instagramdl, instagramdlv2 } = require('@bochilteam/scraper')
let results = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0]))
for (const { url } of results) await xdev.sendMedia(from, url, dev, {caption: "Nih"})
}
}
break

	
case 'kodepos':
try{
let nana = await kodepos(q)
console.log(nana)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err){
setReply("Kodepos tidak di temukan")
console.log(err)
}
break  
  
  
case 'ghstalk':{
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await xdev.sendMessage(from, {image:gambar, caption: toks},{quoted: dev})
//await xdev.sendMedia (from, foto, dev, {caption: toks})
}
break
			
case 'gimage':{
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
//console.log(data)
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
setReply(mess.wait)
xdev.sendMedia (from, foto, dev, {caption: "Nih"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
xdev.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}

break
			
		
case 'blackping':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'glitch':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
	
	
case 'glitch2':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
setReply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
	
	
case 'glitch3':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
setReply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break
	
	
case '3dspace':
{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
setReply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
	
	
	
case 'lion':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
setReply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
	
	
case '3dneon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 break


case 'neon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/neon-text-effect-online-879.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 break
	
case 'greenneon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/green-neon-text-effect-874.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
break
   
case 'bokeh':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
break
   
   
	case 'hollographic':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	case 'bear':{
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	let teks1 = q.split("|")[0]
	let teks2 = q.split("|")[1]
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
  .catch((err) => console.log(err));
  }
   break
		
		case 'wolf':
		{
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	let teks1 = q.split("|")[0]
	let teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
  .catch((err) => console.log(err));
  }
   break
		
		
case 'joker':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
case 'dropwater':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
break
	
	
case 'neonlight':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 break
	
	
case 'thewall':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/break-wall-text-effect-871.html", [
 `${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 break
	
	
case 'natural':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 break
	
	
case 'carbon':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/carbon-text-effect-833.html", [
 `${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
break
	
	
case 'pencil':
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
 `${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
break
		
	
		
case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (isQuotedImage) {
try{
setReply(mess.wait)
let ahah = await xdev.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: dev})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
let ghost = users 
let oppp = await xdev.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: dev})
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break



case 'mediafire':{
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 50000 && !isOwner){
if(sender.startsWith("62")){
let tuks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
let tuks = "You have been banned\nfor abusing the mediafire feature"
}
addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 50mb")              
await setReply(tuks)
return
}
await xdev.sendMedia (from, nana.url, dev, {fileName: nana.filename})
//limitAdd(senderNumber, user)
} else{
setReply("Link Invalid")
}
}
break



case 'tinyurl':{
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  


case 'bitly':{
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;



case 'githubdl':{
if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
//ByRizkyAdi
console.log("Done")
setReply(`Waiting for compress to zip`)
await xdev.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
}
break 
  
  
  
case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await xdev.sendMedia (from, url, dev, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break  


case 'google':{
if (!q) return setReply('masukan teks')
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
setReply(lama)
})
}
break


case 'closetime': 
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break
				
				
case 'opentime':        
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break


case 'tourl': {
setReply(mess.wait)
let { UploadFileUgu} = require('../lib/uploader')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break


case 'ytmp3':
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
 let link =`https://youtube.com/watch?v=${videoId}` 
 let anu = await yts(link)
 if(anu.all.length == "0") return setReply("Musik tidak di temukan")
 try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}
 
try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: dev})
downloadMp3(q) 
  } catch(err){
setReply(err)
}
//limitAdd(senderNumber, user)
}
break
	
	
	
case 'ytmp4':
 try{
 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

 let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: dev})
downloadMp4(q) 
  } catch(err){
setReply(`${err}`)
}
break
	

case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
xdev.sendButImage(from, teks, copyright, kentir, buttons, {quoted: dev})      
 }
break  

case 'chat': {
if (!isOwner) return setReply(mess.only.owner)
if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
xdev.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
xdev.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
xdev.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
xdev.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
xdev.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
xdev.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
xdev.chatModify({ clear: { message: { id: dev.quoted.id, fromMe: true }} }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
xdev.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
 }
 }
 break


case 'smeme': {
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break    









case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${fake}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
                    
xdev.sendButImage(from, teks, `© Extream`, fs.readFileSync('./stik/bot.jpg'), mok, {quoted: dev})             
}
break
  


case 'kodebahasa':{
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break
           // ghstalk

case 'kbbi':{
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
setReply('Menurut Kbbi:\n\n'+asw.result)
}
break

case 'block':
if (!isOwner) return onlyOwner()
if(isGroup){

if(users){
await xdev.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await xdev.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break

case  'unblock':
if (!isOwner) return onlyOwner()
if(isGroup){
if(users){
await xdev.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await xdev.updateBlockStatus(woke, "unblock")
setReply(`Sukses unblock ${woke}`)
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}

}
break


case 'igstory': {
if (!q) return setReply( `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
if (!res.ok) return setReply('Error')
let json = await res.json()
if (!json.status) return setReply(json)
await setReplty('Sedang di proses..')
for (let { url, type } of json.data) {
await delay(2000)
xdev.sendMedia (from, url, dev, {caption: "Nih"})      
}
}
break
case 'console':{
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (Console === true) return setReply('Udah aktif kak')
Console = true
let ih =`Tampilan console telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
 if (Console === false) return setReply('Udah off kak')
Console = false
let eh =`Mode auto respon telah di matikan`
setReply(eh)
}else if (!q) {
xdev.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}]);
 }
 }
break


case 'weather':{
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
 }
 }
break


case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if (isQuotedVideo && dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await xdev.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedText) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Gunakan foto!')
}
break 



case 'yts':
try {
if (!q) return setReply('Format salah')
setReply('Tunggu sebentar')
let rus = await yts(q)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
xdev.sendButImage(from, b, `Baterai : Not Detec\ncopyright`, imag, mok, {quoted: dev})
 } catch (e) {
 console.log(e)
 setReply(`${e}`)
}
break  

case 'setppbot':
if (!isOwner) return setReply(mess.only.owner)
if (isImage || isQuotedImage) {
var media = await xdev.downloadAndSaveMediaMessage(quoted)
var data =  await xdev.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
} else {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
break

case 'setppgc':{
if (!isOwner) return setReply(mess.only.owner)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (isImage || isQuotedImage) {
let media = await xdev.downloadAndSaveMediaMessage(quoted)
await xdev.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break


case 'bc': 
if (!isOwner) return onlyOwner()
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await xdev.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break


case 'antiasing':{
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan kickarea!");
} else if (!q) {
xdev.sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, 
[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
 }
 }
break;
					



case 'antilinkgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
xdev.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
 }
 }
break;  


case 'antilink':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
xdev.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;      





case 'banchat':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
}
break

case 'unbanchat':
if (!isOwner) return onlyOwner() 
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
			

case 'whatanime':{
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
})    .catch((err) => {                   
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
fs.unlinkSync(ran)
})
.catch((err) => {       
setReply(mess.error.api)
 })
 })
 } else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break


case 'getidgc':
if(!isGroup) return setReply("Hanya bisa di group")
setReply(`${from}`)
break


case 'brainly':{
 const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
/*
try{
  var res = await brainly.search('id', q)
} catch (err) {
var res = await brainly.searchWithMT('id', `${q}`)
}
*/
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
xdev.sendButImage(from, teks, `© ${fake1}`, foto, mok, {contextInfo: forward})             

}
break
  





    

case 'tiktok':{   
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ T I K T O K ] downloader'+ res)
console.log(res)
let ep = res.wm   
  console.log(ep)
xdev.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: dev})
 })
 }
 break
                      
case 'tiktokmusik':{       
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
hx.ttdownloader(lin).then( async res => {
console.log('[ T I K T O K ] downloader')
let ep = res.wm                     
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: dev })
fs.unlinkSync(ran)
})
})
}
 break
                        
  
case 'tiktoknowm':     
try{   
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply(aml.Iv)
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ T I K T O K ] downloader')
let ep = res.nowm              
xdev.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: dev})
})
} catch (err){
setReply(`${err}`)
}
break
                      
                    
                    
                    
case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break  
            
case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break


case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break  


case 'infogc': {
let _meta = await xdev.groupMetadata(from)
  console.log(_meta)
let _img = await xdev.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await xdev.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: dev }
)
}
break

case 'info':{
const si = require('systeminformation');
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()

let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem

let teks =`System Information`
 teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
 }    
break    

    


case 'setprefix':
    {
if (!isOwner) return onlyOwner()
let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi'){
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref'){
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref'){
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
xdev.sendButMessage(from, teks, copyright, [
{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
 } else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
 } 
}
break  


case 'setreply':{
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
xdev.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } else {
 setReply("Set Reply Tidak Di Temukan")
}
}
break









case 'take':
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break



case 'setwelcome':{
    if ((args[0]) === 'type1' ) {
    if(setwelcome === "type1") return setReply("Udah aktif")
    setwelcome = "type1"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if ((args[0]) === 'type2' ) {
    if(setwelcome === "type2") return setReply("Udah aktif")
    setwelcome = "type2"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if ((args[0]) === 'type3' ) {
   if(setwelcome === "type3") return setReply("Udah aktif")
    setwelcome = "type3"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if(!q){
    setReply("Pilih setwelcome : type1 atau type2 atau type3")
    } else {
    setReply("Query tidak di temukan")
    }
    }
    break




case 'ban':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
let Name = await xdev.getName(woke)
console.log(woke)
if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
addBanned(Name,calender,  woke, ban)          
setReply( `Berhasil banned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
let Name = await xdev.getName(users)
//if(Nomer === ownerNumber[0]) return setReply("Ga mau")
addBanned(Name,calender,  Nomer, ban)               
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break


case 'unban':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
unBanned (woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
//if(Nomer === Ownerin) return setReply("Ga mau")
unBanned (Nomer, ban)             
setReply( `Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/banned.json')).map(function(e, i){
banya += (i+1)+`📲 Nomer : wa.me/${e.id}\n    📅 Tanggal : ${e.date}\n\n`            
 });
setReply(banya)
break

case 'adderror':
{
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break


case 'clearallerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
clearAllError(listerror)
break 

case 'delerror':{
if (!itsMe && !isOwner) return reply (mess.only.ownerB)
listerror.splice(q, 1)
fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
setReply( `Sukses menghapus ${q} di daftar error`)
}
break

case 'listerror': {
let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += `© ${fake1}`
setReply(errornye)
}
break


case 'luxury':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'whitegold':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'lightglow':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break



case 'arcane':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'neonlight':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'valentine':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break

case 'glowingneon':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


case 'colorled':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
setReply(mess.wait)
textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
 }
break


//tipe2
case '3dretro':{
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
setReply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, dev, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break

case 'clearallban':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all ban")
clearAllBan(ban)
break 

case 'setnamebot':
if (!isOwner) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
fake = `${q}`
break

case 'setfakeimg':{
if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/fake.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake image`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}${command}`)
}
}
break	

case 'setthumb':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
}
}
break;




case 'setimgreply':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break;
        
        

case 'setimginfo':{
if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/bot.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image pada infobotz`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
}
}
break;

case 'addvn':{
if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./temp/audio/${q}.mp3`)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break  

case 'delvn':{
if (!isOwner) return onlyOwner() 
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./temp/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break


case 'addstik':{
if (!dev.key.fromMe && !isOwner) return reply (mess.only.owner)
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
				

case 'delstik':{
if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break

case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break
				
				
				
case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break
        
case 'shutdown':
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await xdev.sendMessage(from, {text: "_Shuting Down..._"})
await delay(3000)
await xdev.sendMessage(from, {text: "_Succes_"})
return await xdev.sendMessage(from, JSON.stringify(eval(process.exit())))
break

case 'patrick':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'gura':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'doge':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//xdev.sendMedia (from, pjr, dev, {caption: "Nih"})
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'restart':
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await setReply(`_Restarting ${fake}_`)
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
break

case 'me': {
let ppimg = await xdev.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

let sol = await xdev.fetchStatus(sender)
let stst = sol.status == 401 ? '' : sol.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let hituser = gethitUser(senderNumber, user)
let persenya =`${userPersen}`
let nana =`${userExp}/${requiredExp}`
if(isOwner){
    var prmm = isPremium ? `Unlimited`:'Not Premium'
    } else {
   var   prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
 }
 
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber, user).toLocaleString()}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount.user}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`


let its = await getBuffer (ppimg)

const canvacord = require("canvacord");
  let image3 = new canvacord.Rank()
  .setAvatar(its)
  .setCurrentXP(math(userExp))
  .setRequiredXP(requiredExp)
  .setStatus("online")
  .setProgressBar("#FFFFFF", "COLOR")
  .setBackground( "COLOR","#141414")
  .setCustomStatusColor("#ff1a8c")  
  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
  .setLevel(userLevel )
  .setRank(4)
  .setOverlay("#3d3d3d")
  .setDiscriminator("0007");
  
  let foto = await getRandom(".png")
  image3.build()
  .then(async data => {
  await canvacord.write(data,foto);
  let gambar = await fs.readFileSync(foto)
  let butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];          
  let buttonMessage = {
  image:gambar,
  caption: teks,
  footer: copyright,
  buttons: butprofile,
  headerType: 4
  }
  
  await xdev.sendMessage(from, buttonMessage)
  await fs.unlinkSync(foto)
          });

}
 
break

case 'readmore':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
/////----------------------------------]]]------------------------------------------------------------
case 'clearallblock':{
if (!isOwner) return onlyOwner()
let obj = [] 
fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
}
break 

case 'setmenu':
    if(!isOwner) return onlyOwner()
    if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		setmenu = "katalog"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
        setmenu = "location2"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
        setmenu = "image"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'lokasi' ){
        setmenu = "location"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
                    } else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
        setmenu = "image2"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        }else if ((args[0]) === 'pptx'){
        docType = "pptx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'xlsx'){
        docType = "xlsx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'zip'){
        docType = "zip"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'pdf'){
        docType = "pdf"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'docx'){
        docType = "docx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'gif'){
        setmenu = "gif"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    }  else if (!q) {
                      xdev.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}],setQuoted);
                    } else {
                    setReply("Menu tidak di temukan om")
                    }
    break


case 'getppgc':
if (!isGroup) return 
setReply(mess.wait)
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { image: { url: ppimg }}, { quoted: dev })
break 


case 'getpp':
if (isGroup) { 
if(mentionByTag){
console.log(mentionByTag[0])
try {
var ppimg = await xdev.profilePictureUrl(mentionByTag[0],"image")
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: dev })

} else if (mentionByReply){
try {
var ppimg = await xdev.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: dev })
} 
} else if(!isGroup){
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: dev })
}

break

    
case 'grupwa': 
if (!q) return reply(`Kirim perintah ${command} nama grup`)
setReply(mess.wait)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch(() => reply(mess.error.api))
break
			
			
			
case 'linkgc':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var url = await xdev.groupInviteCode(from).catch(() => reply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+url
setReply(asu)
 }
break
			
case 'setnamegc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break

case 'setdesc': 
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
				
case 'gc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == "close") {
xdev.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break

case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupRevokeInvite(from)
.then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break
			

case 'status':{
let osu = require('node-os-utils')
    try {
        let NotDetect = 'Not Detect'
        let old = performance.now()
        let cpu = osu.cpu
        let cpuCore = cpu.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let OS = osu.os.platform()
        let cpuModel = cpu.model()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            var cpuPer = cpuPercentage
        }).catch(() => {
            var cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
            driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
            driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
            ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
            ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
            netsIn = (info.total.inputMb + ' MB'),
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
            netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])
        await setReply(`_Testing ${command }..._`)
        let _ramTotal = (ramTotal + ' MB')
        let neww = performance.now()
        let teks =`
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

xdev.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/thumb.jpeg'), mok)
} catch (err) {
setReply(err)
}
}
 
break

			
case 'listonline': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
xdev.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, dev, { mentions: online })
}
break			
			
case 'wallpapermobile':{
let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",dev)
}
break

case 'wallpapers':{
let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",dev)
}
break

case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await xdev.sendImageAsSticker(from, res.url, dev)
//await fs.unlinkSync(encmedia)
}
}
break

case 'getcaze':
try{
if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
    
case 'emojiap':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	            

  case 'emojigo':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojisa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojims':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojiwa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	

case 'emojitw':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	

case 'emojifb':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	


case 'emojijp':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji joypixel")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[7].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	       

case 'emojiom':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji openmoji")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[8].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	      



case 'emojied':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji emojidex")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[9].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	      

case 'emojimes':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji messenger")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[10].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'emojilt':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji logitech")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[11].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'emojimo':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji mozila")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[13].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'autolevel':{
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply("Sukses mengaktifkan auto level!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply("Sukses mematikan auto level!");
} else if (!q) {
xdev.sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
 {buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
 {buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}], dev);
 }
 }
break;


case 'setbio':   
 {
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await xdev.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break


case 'getsesi':{
if(!isOwner) return setReply(mess.only.owner)
await setReply(`Getting File ${sessionName}`)
let sesi = await fs.readFileSync(`./${sessionName}.json`)
await xdev.sendMessage(from, { document: sesi, mimetype: 'application/json', fileName: `${sessionName}.json` }, { quoted: dev })
}
break

case 'speedtest': {
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply("_Testing Speed..._")
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break     

case 'listgc': {
if(!isOwner) return onlyOwner()
let getGroups = await xdev.groupFetchAllParticipating()
  //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await xdev.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
 }
xdev.sendTextWithMentions(from, teks, dev)
}
break


case 'listpc': {
if(!isOwner) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
xdev.sendTextWithMentions(from, teks, dev)
 }
break

//Exec
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply("_Executing Finished_")
}
})
}
break

//Eval.code
case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}
break

case '=>': {
if (!isOwner) return setReply(mess.only.owner)
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if(sat){
var bang = util.format(sat)
} else if (sat == undefined) {
var  bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}
break

  case '+>':{
 if (!isOwner) return
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
`)
} catch(err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}
break

case 'sewa':{
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
xdev.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)                          
}
break
			
case 'clearallUser':
if (!isOwner) return onlyOwner()
setReply("Suksek clear all User")
clearAllUser(user)
break 
			
case 'getfile':{
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
if (!q) return setReply( `uhm.. teksnya mana?\n\ncontoh\n${prefix + command} main`)
setReply('Executing...')
let o
try {
o = await exec2('type ' + q)
} catch (e) {
o = e
} finally {
 let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break

case 'wallpaper': {
if (!q) return setReply( 'Masukkan Query Title')
let anu = await wallpaper(q)
console.log(anu)
if(anu.length == "0") return setReply("Image tidak di temukan")
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: copyright,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: dev })
}
break

case 'math': {
	let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

	
	
	
	
	
 // xdev.math = xdev.math ? xdev.math : {}
  if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let id = from
  if (id in xdev.math) return setReply('Masih ada soal belum terjawab di chat ini')
  let math2 = genMath(mode)
  xdev.math[id] = [
    await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: ${math2.bonus} XP`),
    math2, 4,
    setTimeout(async () => {
      //if (xdev.math[id]) await xdev.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
        if (xdev.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
   delete xdev.math[id]
    }, math2.time)
  ]
}
break



case 'hadis': {
		if (!args[0]) return setReply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		setReply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		setReply(`Hadis tidak ditemukan !`)
		}
		}
		break


case 'alquran': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
xdev.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : dev })
}
break

case 'tafsirsurah': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break


 case 'react': {
//if (!isOwner) return setReply( mess.only.owner)
if(!q) return setReply(`Contoh ${prefix+command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id }
}
}
xdev.sendMessage(from, reactionMessage)
}
break  

case  'setgif':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isVideo || isQuotedVideo){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break


case 'setquoted':
    if(!isOwner) return onlyOwner()
    if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
        if(Qoted === "ftoko") return setReply("Udah aktif")
        Qoted = "ftoko"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
        } else if ((args[0]) === 'fkontak' ){
        if(Qoted === "fkontak") return setReply("Udah aktif")
        Qoted = "fkontak"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
        } else if ((args[0]) === 'ftext'){
        if(Qoted === "ftext") return setReply("Udah aktif")
        Qoted = "ftext"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
        } else if ((args[0]) === 'ftroli'){
        if(Qoted === "ftroli") return setReply("Udah aktif")
        Qoted = "ftroli"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
        }else if ((args[0]) === 'fsticker' ){
        if(Qoted === "fsticker") return setReply("Udah aktif")
        Qoted = "fsticker"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fsticker})
        } else if ((args[0]) === 'fvn'){
        if(Qoted === "fvn") return setReply("Udah aktif")
        Qoted = "fvn"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
        } else if ((args[0]) === 'floc'){
        if(Qoted === "floc") return setReply("Udah aktif")
        Qoted = "floc"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
        } else if ((args[0]) === 'fvideo' ){
        if(Qoted === "fvideo") return setReply("Udah aktif")
        Qoted = "fvideo"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvideo})
        } else if ((args[0]) === 'fgc'){
        if(Qoted === "fgc") return setReply("Udah aktif")
        Qoted = "fgc"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
        } else if ((args[0]) === 'fgif'){
        if(Qoted === "fgif") return setReply("Udah aktif")
        Qoted = "fgif"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
        }else if ((args[0]) === 'fimage'){
        if(Qoted === "fimage") return setReply("Udah aktif")
        Qoted = "fimage"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
        } else if ((args[0]) === 'dev'){
        if(Qoted === "dev") return setReply("Udah aktif")
        Qoted = "dev"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: dev})
        } else if (!q) {
        xdev.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
        {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
        {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
        {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],dev);
         } else {
 let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
 setReply(teks)
 }
break



//Bug by Ius yg udah gua pecahin kodenya 😎
case  'sendbug':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
await xdev.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
xdev.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break


case 'setlang':
if(!isOwner) return onlyOwner()
try{
let translate = require('translate-google-api')
let tld = 'cn'
let result = await translate(`${text}`, {tld,to: q,})
language = q
setReply(`Berhasil mengubah bahasa ke ${q}`)
} catch(err){
setReply("Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages")
}
break


case 'tr': {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && dev.quoted && dev.quoted.text) text = dev.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        setReply(err)
    } finally {
        setReply(result[0])
    }

}
break

case 'fb': 
try{
let {MessageType} = require('@adiwajshing/baileys')
if (!args[0]) return setReply('Putting *URL* Facebook..')
if (!args[0].includes("facebook")) return setReply(`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
let url = json.videoUrl
setReply('Sedang diproses...')
if (url) await xdev.sendMedia (from, url, dev, {caption: "Nih"})
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
else setReply('Link download tidak ditemukan')
} catch (e){
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
    let json = await res.json()
    if (!json.status) setReply( json)
    await setReply('Sedang di proses..')
    await xdev.sendMedia (from, json.data[1].url, dev, {caption: "Nih"})
}
break

case 'dashboard':{
let teks =`
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += (i+1)+`. ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
     
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 

  for(let a = 0; a < totalSuc.length; a++){
      tot += totalSuc[a]
      } 

let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += (i+1)+`. ${e.cmd} : ${e.failed} \n`   

});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" -Succes : "+tot+"\n"+" -Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break

case 'setfakegif':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/fake gif.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break;

case 'obfus':{
var JavaScriptObfuscator = require('javascript-obfuscator');
 
if(q){
//await setReply("Loading...")
let obfuscationResult = JavaScriptObfuscator.obfuscate(q);
reply(obfuscationResult.getObfuscatedCode());
} else if(isQuotedTeks){
//await setReply("Loading...")
let obfuscationResult = JavaScriptObfuscator.obfuscate(dev.quoted.text);
reply(obfuscationResult.getObfuscatedCode());
} else setReply("Masukan code java script")
}
break

case 'packer':{
var UglifyJS = require("uglify-js");
if(q){
let esult  = await UglifyJS.minify(q)
 reply(result.code)
} else if(isQuotedTeks){
  console.log(isQuotedTeks)
let result  = await UglifyJS.minify(dev.quoted.text)
 reply(result.code)
} else setReply("Masukan code java script atau reply file.js")
}
break

//=================================================================================================
    

default:
if (!isGroup && isCmd) {
Nothing(toFirstCase(command), dash)
setReply(`Command belum tersedia, coba beberapa hari kedepan yaa! _^`)
} else if(isGroup && isCmd) {
Nothing(toFirstCase(command), dash)
}
} //Akhir switch command





if (isImage && autoSticker) {
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (dev.msg || dev).mimetype || ''
if (/image/.test(mime)) {
let img = await xdev.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await xdev.sendMessage(from, { sticker: sticBuffer }, {
quoted: dev,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}
    




























  

} catch (err){
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    

if(checkError(err.message, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await xdev.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

await xdev.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await xdev.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await xdev.downloadAndSaveMediaMessage(quoted)
await xdev.sendMedia (Ownerin, media, dev, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



} catch (err){

console.log(err)
}
}


    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

