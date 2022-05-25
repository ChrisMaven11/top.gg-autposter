const Discord = require("discord.js")
const { Intents } = require('discord.js')
const { AutoPoster } = require('topgg-autoposter')
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });
client.on("ready", () => {

  const ap = AutoPoster('top.gg token', client)

  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })

})
client.login('token')
