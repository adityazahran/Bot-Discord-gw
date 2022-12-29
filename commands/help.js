const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
    name: 'help',
    description: 'help command buat bot',
    execute(msg, args, client) {
        const embedHelp = new MessageEmbed()
            .setAuthor('Chad Bot', client.user.displayAvatarURL(), 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setTitle(client.user.username)
            .setColor(0xffffff)
            .setDescription(
                `List Command yang udah dibuat oleh author gw di server \n${msg.guild.name}`
            )
            // masih hard code
            .addField("!absen", ":arrow_forward: buka absen mingguan sholat jumat")
            .addField("!info", `:arrow_forward: Cek info user (Ex : !info ${msg.author})`)
            .addField("!ingetin", ":arrow_forward: set reminder bot (Ex : !ingetin | 2h | ada Kelas)")
            .setFooter(
                `Command used by : ${msg.author.username}`,
                msg.author.displayAvatarURL()
            );
        msg.channel.send({ embeds: [embedHelp] });
    }
}