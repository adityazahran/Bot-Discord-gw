const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
  name: "info",
  description: "command untuk mengetahui informasi tentang bot",
  execute(msg, args, client) {
    if (args[1] === "bot") {
      const embedBot = new MessageEmbed()
        .setTitle(client.user.username)
        .setColor(0xffffff)
        .setDescription(
          `Sebuah bot yang digunakan untuk mengelola\nserver dan member di server Discord\n ${msg.guild.name}`
        )
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Developer", "Aditya Zahran")
        .addField("Versi Bot", config.version)
        .setFooter(
          `Command used by : ${msg.author.username}`,
          msg.author.displayAvatarURL()
        );
      msg.channel.send({ embeds: [embedBot] });
    } else if (args[1] === "user") {
      let mention = msg.mentions.users.first() || msg.author;
      let member = msg.guild.members.cache.get(mention.id);
      let roles = "";
      let dateJoined = new Date(member.joinedTimestamp).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
      member._roles.forEach((id) => {
        roles += `${msg.guild.roles.cache.get(id)} `
      });
      console.log(member)
      const embedUser = new MessageEmbed()
        .setTitle(`${member.user.username} Information`)
        .setColor(0xffb319)
        .addField("User id", member.user.tag)
        .addField("nickname", (member.nickname) ? member.nickname : member.user.username)
        .addField("Roles", roles ? roles : "null")
        .addField("Tanggal Join Server : ", dateJoined)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(
          `Command used by : ${msg.author.username}`,
          msg.author.displayAvatarURL()
        );
      msg.channel.send({ embeds: [embedUser] });
    } else {
      msg.channel.send("info apa?");
    }
  },
};
