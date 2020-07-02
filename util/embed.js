const Discord = require("discord.js");

// inside a command, event listener, etc.
const newEmbed = (tittle, field) => {
  let embedMessage = new Discord.MessageEmbed()
    .setColor("#fc0303")
    .setTitle(tittle)
    .setURL("https://github.com/huyhoang8398/kn-musique-bot")
    .setAuthor("Do Hoang", "https://i.ibb.co/hLpSJ5K/download.png", "https://dohoang.me")
    .setDescription("One good thing about music, when it hits you, you feel no pain.")
    .setImage("https://dohoang.me/images/mywall3.png")
    .addFields(field[0], field[1]);
  return embedMessage;
}
exports.newEmbed = newEmbed;
