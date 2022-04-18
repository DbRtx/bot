
"use strict";
require("../settings.js")
const {
downloadContentFromMessage
} = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
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


//----------------- LIB FILE ------------------\\
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color, bgcolor } = require('../lib/color')
const { webp2mp4File } = require("../lib/convert")
const { pinterest } = require("../lib/pinterest")
const {formatp, fetchJson, fetchText, getGroupAdmins, sleep } = require("../lib/myfunc");
const {parseMention, FileSize, weton,week,calender,dateIslamic,formatDate, isUrl, makeid, calculate_age, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, getBuffer, h2k, generateMessageID, getRandom} = require('../lib/functions')

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

let multi = true
let nopref = false
let allpref = false
let prefa = "."
let fake = "Amelia Botz"
let publik = true
let Console = false
let autorespon = false
let copyright = "© Extream" 
// Database
let AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'));

const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');




/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   let Ownerin ="6285156137901@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          let ownerNumber = [`6285156137901@s.whatsapp.net`]
//=================================================//
module.exports = async(xdev, dev, m, setting, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = dev
const {botName, gamewaktu, limitCount } = setting
let { allmenu } = require('./help')
const Id =  dev.key.id
const antibot = dev.isBaileys
const content = JSON.stringify(dev.message)
const from  = dev.key.remoteJid
//const type = Object.keys(dev.message)[0]        
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? dev.message.conversation : (type == 'imageMessage') ? dev.message.imageMessage.caption : (type == 'videoMessage') ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


		
if (multi){
var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
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

//const body = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'documentMessage') && dev.message.documentMessage.caption ? dev.message.documentMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && dev.message.templateButtonReplyMessage.selectedId ? dev.message.templateButtonReplyMessage.selectedId : ''
//const body = (type === 'conversation') ? dev.message.conversation : (type == 'imageMessage') ? dev.message.imageMessage.caption : (type == 'videoMessage') ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ||  (type == 'listResponseMessage' ? dev.message[type].singleSelectReply.selectedRowId : '') || dev.message[type].text || dev.message[type].caption || dev.message[type] || '') : ''
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
global.senderNumber = sender.split("@")[0] 
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
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = dev.quoted ? dev.quoted : dev
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

//---------Global Data----------\\
global.command = command
global.prefix = prefix
require("../message.js")


//Security / Keamanan
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false


//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
    
//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
const fsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
const fvn = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
const fvideo = { key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgif = { key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: thumb}}}

//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "fsticker"){
var setQuoted = fsticker
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "floc"){
var setQuoted = floc
}else if(Qoted === "fvideo"){
var setQuoted = fvideo
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}



///Button Image ✓
const sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
const buttonMessage = {
    image: gam1,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await xdev.sendMessage(id, buttonMessage, options1)
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

await xdev.sendMessage(id, buttonMessage, { quoted: dev})
} 
 

//onlyOwner
const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}


// Public & Self
if (!publik) {
if (!itsMe && !isOwner && !theOwner) return
 }
	
		
		
		
const sendFileFromUrl = async (from, url, caption, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headerd["content-type"]
let type = mime.split("/")[0]+"Message"
if (mime.split("/")[0] === "image") {
return xdev.sendMessage(from, { image: {url: url}, caption: caption }, options)
} else if (mime.split("/")[0] === "video") {
return xdev.sendMessage(from, { video: {url: url}, caption: caption }, options)
} else if (mime.split("/")[0] === "audio") {
return xdev.sendMessage(from, { audio: {url: url}, mimetype: 'audio/mp3' }, options)
} else {
return xdev.sendMessage(from, { document: {url: url}, mimetype: mime, caption: caption }, options)
}
}
	


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
		
 //SetReply
const setReply = async(teks) =>{
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${fake}`,body:`Speed up`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`https://youtube.com/watch?v=TOmXzkWuCWk`}}, text: teks }, { quoted: dev })
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

const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        






		
		const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285791458996` } },
			{ urlButton: { displayText: `Script!`, url : `https://github.com/rtwone/chitandabot` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } }
		]
		
		
		
//ANTI SPAM BERAKHIR
SpamExpired(senderNumber, "Case", AntiSpam)
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekSpam("Case",senderNumber, AntiSpam)){
console.log("antispam case aktif")
return
}



//ANTI SPAM PRIVATE CHAT
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
return setReply("Ups kamu terdeteksi spam")
}


//ANTI SPAM GROUP CHAT     
if (isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
return setReply("Ups kamu terdeteksi spam")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)


        
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
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


//Auto Read & Presence Online
xdev.sendReadReceipt(from, sender, [dev.key.id])
if (isCmd){
xdev.sendPresenceUpdate('composing', from)
} else {
xdev.sendPresenceUpdate('available', from)
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



		
		
// Logs;
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			

switch(command) {
	
	
	
case 'menu':
case 'help':   
case 'allmenu':   

let menunya = allmenu(sender, prefix, pushname)
let mok = [{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
                    
          
                    
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
Sendbutdocument(from, menunya,`© Extream`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options1)
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
  



case 'd':case 'del':case 'delete':
if (mentionByReply == botNumber) {
xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
} else  {
setReply("Reply pesan bot nya")
}
break


case 'exif':
case 'setexif':
if (!isOwner) return reply(mess.only.owner)
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break


// Converter & Tools Menu
case 'sticker': case 'stiker': case 's':
if (isImage || isQuotedImage) {
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
xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else if (isVideo || isQuotedVideo) {
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
xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
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
if (err) return setReply('Yah gagal, coba ulangi ^_^')
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
setReply(runtime(process.uptime()))
break

case 'out':
case 'leave':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await xdev.groupLeave(from)
break

case 'ssweb':
case 'ss':
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
if (args.length < 1) return setReply('Urlnya mana om')
teks = q
ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(ana.screenshot)
xdev.sendMessage(from, {caption : teks, image: buff}, {quoted: dev})
break

case 'bcgc':{
const delay = time => new Promise(res => setTimeout(res, time))
let getGroups = await xdev.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let nanan = groupss.map(v => v.id)
if(!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
for (let i of nanan) {
await delay(1000)
await xdev.sendMessage(i, {text: q})
 }
 setReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
	
			
			
case 'kick': {
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'remove').then((res) => setReply(`Sukses kick ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'add': {
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'add').then((res) => setReply(`Sukses add ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'demote': {
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'kickme':
try{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!isGroup) return
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break

case 'admin': case 'promote': {
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


case 'cecan': case 'cewek':
setReply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break

case 'cogan': case 'cowok':
setReply(mess.wait)
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break 


case 'join':{
if (args.length < 1) return setReply(`Kirim perintah ${command} _linkgrup_`)
//if (!isUrl(args[1])) return setReply("Error Link")
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
var data = await xdev.groupAcceptInvite(ano)
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


case 'lirik': case 'liriklagu':{
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
if (!publik) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break


case 'quote': case 'quotes':
case 'randomquote': case 'randomquotes':
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes+'\n\n-- '+data.result.author)
break


case 'kalkulator':
const matematik = require('mathjs')
try{
nana = q.replace("x","*")
nana = matematik.evaluate(nana)
teks = `${q} = ${nana}`
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
let outMp4 = `${getRandom('.mp4')}`
let file = await xdev.downloadMediaMessage(quoted);
fs.writeFileSync(`./${outMp4}`, file);
await sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(`./${outMp4}`)
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
            
            
case 'fast':
if (isQuotedVideo) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err:  ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
 })
 } else {
setReply('Reply videonya!')
}
break
            
case 'slow':  
if (isQuotedVideo){ 
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp4')
 exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply videonya!')
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


case 'ping': case 'botstatus': case 'statusbot': {
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
sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
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
sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
 })
 } else {
setReply("Reply audio atau video")
}
break





case 'infobotz':{
if(isExtream) return       
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = xdev.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
					
menunya = info1.bot(calender, wa_version, mcc, mnc, os_version, device_manufacturer, device_model,os,ram2,privat,groups,totalchat,latensi,gender,fake,nomerOwner)
let info = fs.readFileSync('./stik/bot.jpg')
options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/bot.jpg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
xdev.sendButImage(from, menunya, `Baterai : test\n© test`, fs.readFileSync('./stik/bot.jpg'), gbutsan, dev)             
} 
break 


case 'tomp4':
case 'tovideo':
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
await xdev.sendMessage(from, {image: { url: data.cover_url}, mimetype:  "image/jpeg" }, {quoted: dev})        
let song = await spotify.downloadTrack(q)
await xdev.sendMessage(from, {audio: song, mimetype:  'audio/mp3' }, {quoted: dev})        
}
break              


	

			
			
			
			case 'igdl': case 'instagram': case 'ig':
			{
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Instagram(args[1]).then( data => {
			     var teks = `*Instagram Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Jumlah Media :* ${data.medias.length}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			     reply(teks)
			     for (let i of data.medias) {
				  if (i.extension === "mp4") {
				   xdev.sendMessage(from, { video: { url: i.url }})
				  } else if (i.extension === "jpg") {
				   xdev.sendMessage(from, { image: { url: i.url }})
			      }
			     }
				 
			    }).catch(() => reply(mess.error.api))
			}
			    break
			
			

                        case 'bc': case 'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               xdev.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
                               await sleep(1000)
                            }
                            break
			case 'setpp': case 'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await xdev.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
			
			
			
			
			case 'grupwa': case 'searchgrup':
			
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  
				}).catch(() => reply(mess.error.api))
			    break
			
			case 'yts': case 'ytsearch':
			
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				xdev.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: dev })
				
				}).catch(() => reply(mess.error.api))
			    break
			
			// Group Menu
			case 'linkgrup': case 'link': case 'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await xdev.groupInviteCode(from).catch(() => reply(mess.error.api))
			    ur2l = 'https://chat.whatsapp.com/'+url
				reply(url2)
				break
			case 'setppgrup': case 'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await xdev.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case 'setnamegrup': case 'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await xdev.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case 'setdesc': case 'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await xdev.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
				
		case 'group': case 'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  xdev.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  xdev.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case 'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await xdev.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			
			
			
			
			
			
			
			
default:
if (!isGroup && isCmd) {
reply(`Command belum tersedia, coba beberapa hari kedepan yaa! _^`)
}
}




if (budy.startsWith('=>')) {
if (!isOwner) return setReply(mess.only.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
setReply(String(e))
}
}

//Evaluate
if (budy.startsWith('>')){
if (!itsMe && !isOwner) return onlyOwner()
try {
return xdev.sendMessage(from,{ text: JSON.stringify(eval(budy.slice(2)),null,'\t')}, {quoted: dev})
} catch(err) {
e = String(err)
setReply(e)
}
}

//Exec
if (budy.startsWith('$')){
if (!itsMe && !isOwner) return onlyOwner()
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
setReply(stdout)
}
})
}



		
		


} catch (e){
e = String(e) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('Status Error : %s', 'white'), color(e, 'green'))
if(Console){
xdev.sendMessage(Ownerin, {text : e})
}
}
}












let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

