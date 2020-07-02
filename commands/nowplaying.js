const embed = require('../util/embed');

module.exports = {
  name: "nowplaying",
  description: "Get the song that is playing.",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    console.log(serverQueue);
    // return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
    return message.channel.send(embed.newEmbed("Kn Musique", [{name: 'Now playing', value: `${serverQueue.songs[0].title}`}, {name: 'Url', value: `${serverQueue.songs[0].url}`}]));
  },
};
