const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins} = require("../lib/myfunc");
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
//require("../settings.js")

module.exports = async(client, anu) => {
try{
let type1 = setwelcome == "type1"
let type2 = setwelcome == "type2"
let type3 = setwelcome == "type3"
const from = anu.id
const botNumber = client.user.id 
const groupMet = await client.groupMetadata(from)
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await client.getName(mem)
  
  
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 
const intro = `
Halo @${memNumber}
Welcome in Gc ${groupName} 
jangan lupa baca dan following rules group
semoga Betah yak `;
const outro = `Asik beban grup keluar \nKena mental dia :v`

try {
if(mem.includes(botNumber)) { return }
var pp_user = await client.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
var pp_grup = await client.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}





                   
//Button In    
let butIn = [
{ buttonId: `y`, 
buttonText: { 
displayText: "Oke siap" }, 
type: 1 },
{ buttonId: `bullyuk `, 
buttonText: { 
displayText: "Intro dulu" }, 
type: 1 } 
 ];         
 
//Button out
let butOut= [{ 
buttonId: `y`, 
buttonText: { 
displayText: "Nitip gorengan" },
type: 1 }
];   

 

 
  
 
 
 
const WelcomeType2 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{
let knights = require("knights-canvas");
if(Add){
var image = await new knights.Welcome()
.setUsername(pushname)
.setGuildName(groupName)
.setGuildIcon(gam2)
.setMemberCount(allmem)
.setAvatar(gam1)
.setBackground(bg)
.toAttachment(); 
} else if(Remove){
var image = await new knights.Goodbye()
.setUsername(pushname)
.setGuildName(groupName)
.setGuildIcon(gam2)
.setMemberCount(allmem)
.setAvatar(gam1)
.setBackground(bg)
.toAttachment(); 
}


let data = image.toBuffer();
let foto = await getRandom(".png")
 await fs.writeFileSync(foto, data)
let gambar = await fs.readFileSync(foto)


let buttonMessage = {
    contextInfo:options,
    image: gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await client.sendMessage(id, buttonMessage, options)
await fs.unlinkSync(foto)
} catch(e){
console.log(e)
let autoButton = Remove? butOut : butIn
await client.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}






const WelcomeType3 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{
const knights = require("knights-canvas");
  
if(Add){
var image2 = await new knights.Welcome2()
    .setAvatar(gam1)
    .setUsername(pushname) 
    .setBg(bg) 
    .setGroupname(groupName) 
    .setMember(allmem) 
    .toAttachment();
} else if(Remove){
var image2 = await new knights.Goodbye2()
    .setAvatar(gam1)
    .setUsername(pushname) 
    .setBg(bg) 
    .setGroupname(groupName) 
    .setMember(allmem) 
    .toAttachment();
}

let data = image2.toBuffer();
let foto = await getRandom(".png")
 await fs.writeFileSync(foto, data)
let gambar = await fs.readFileSync(foto)


let buttonMessage = {
    contextInfo:options,
    image: gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await client.sendMessage(id, buttonMessage, options)
await fs.unlinkSync(foto)
  
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await client.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}



//"title-border","username"username-box"hashtag"discriminator"discriminator-box"message"message-box"member-count"background"border"

const WelcomeType1 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{
const canvacord = require("canvacord");
  
if(Add){
var image3 = new canvacord.Welcomer()
        .setUsername(pushname)
        .setDiscriminator(`${allmem}`)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setAvatar(gam1)
        .setBackground(bg)  
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `+ ${allmem} member!`)
        .setText("title", "welcome")
        .setText("message", `welcome in ${groupName}`)
} else if(Remove){
var image3 = new canvacord.Leaver()
        .setUsername(pushname)
        .setDiscriminator(`${allmem}`)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setBackground(bg)  
        .setAvatar(gam1)
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `- ${allmem} member!`)
        .setText("title", "good bye")
        .setText("message", `we will mis you`)
}

let foto = await getRandom(".png")
image3.build()
        .then(async data => {
      
           await canvacord.write(data,foto);
          let gambar = await fs.readFileSync(foto)

          
let buttonMessage = {
    contextInfo:options,
    image:gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await client.sendMessage(from, buttonMessage)
await fs.unlinkSync(foto)
        });
  
} catch(err){
console.log(err)
let autoButton = Remove? butOut : butIn
await client.sendButImage(id, text1, desc1, gam1, autoButton, options)
}
}







  






 

          

             
//Group Update Console
if (Remove&& OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}


//Welcome Type1
if(Add && OneMem && NotMe){ 
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
if(type1){
WelcomeType1(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
} else if(type2){
WelcomeType2(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
} else if(type3){
WelcomeType3(from, intro, copyright, ppUser, ppGc, butIn,{ "mentionedJid": [mem]})
}
} else if(Remove && NotMe){      
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
if(type1){
WelcomeType1(from, outro, copyright, ppUser, ppGc, butOut,{ "mentionedJid": [mem]})
} else if(type2){
WelcomeType2(from, outro, copyright, ppUser, ppGc, butOut,{ "mentionedJid": [mem]})
} else if(type3){
WelcomeType3(from, outro, copyright, ppUser, ppGc, butOut,{ "mentionedJid": [mem]})
}

}



  
} catch (err) {
console.log(color('GROUP : %s', 'white'), color(err, 'green'))
}   
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


















