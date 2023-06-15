const keepAlive = require("./server")
const { Client, IntentsBitField } = require("discord.js")
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

let words = ["come", "came", "coming"]

client.on("ready", (c) => {
  console.log(`${c.user.tag} ready`)
})

client.on("messageCreate", (message) => {
  if(words.some(word => message.content.includes(word))) { 
    message.reply("ayo??? :flushed:")
  }
})

keepAlive()
client.login(process.env['TOKEN'])


