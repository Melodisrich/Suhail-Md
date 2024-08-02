const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012405008";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_28_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibncreUZBVldXREFJWWUvOFpRL1NzTUd2aGJJQlIyWDRKSDg0a1JWaG04bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGVPVks4U0hRY21RZnVWbWJZVzk2Z1wiLFxuICBcInBob25lSWRcIjogXCI5MzU4NDhmNC0zNTcxLTQ2MzAtYTE0OS01M2RlZGU3MjgzN2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICA0MixcbiAgICAgIDI2LFxuICAgICAgMjE3LFxuICAgICAgODIsXG4gICAgICAyMjEsXG4gICAgICA3MixcbiAgICAgIDY1LFxuICAgICAgNzMsXG4gICAgICA0NSxcbiAgICAgIDIyNSxcbiAgICAgIDI0MSxcbiAgICAgIDE1MCxcbiAgICAgIDE5LFxuICAgICAgMTQyLFxuICAgICAgMTkwLFxuICAgICAgMTkwLFxuICAgICAgMTgwLFxuICAgICAgMTk1LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDE2OCxcbiAgICAgIDExNCxcbiAgICAgIDE3MyxcbiAgICAgIDExOCxcbiAgICAgIDEwNyxcbiAgICAgIDcwLFxuICAgICAgOTIsXG4gICAgICAyMjksXG4gICAgICA0OCxcbiAgICAgIDE3MyxcbiAgICAgIDY3LFxuICAgICAgMTAwLFxuICAgICAgMTY0LFxuICAgICAgMTA4LFxuICAgICAgMjAxLFxuICAgICAgMjEzLFxuICAgICAgMTU4LFxuICAgICAgMTcyLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg0RDY1MzJIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyNDA1MDA4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKVURFIE1FTE9EWVwiLFxuICAgIFwibGlkXCI6IFwiMTE2NjU1OTA4NzI5MDYwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdvMWMwR0VNK3V0TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqVXoyWisyUEFKaEdtT0ZWbk1EMk85T0xhbStEalFvak8rZEsvU2g4dENvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpka0RIR1ZBWkFxeUhuSXN2L2RYblFFdDV0NW1JUDJmYXZtQlQyRm9vZEgxa2dtU0JmOFBXM3VHNW13U0NoeUMwMTZkN2VZNXFjN1U0UWYyZ0tzeURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpKWm1yZkY3a2dlQWZQb3QrS3hncGVpNEkyemkvU1R6b1p4QWtJYmNuc3h2RjExSzdBdzk1cGhxdG5FcHlBK0w1TUh4YU1yNTBZRVpnUVJpUmw4dkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTI0MDUwMDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYxOTczMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp0RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnRELmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUtNaVJuUVNhblBQYzlHSG1QSnlQTXVmZVdXVjdNbWtmblVETEthekJiQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzczNDkxMjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MTkxMzY3MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
