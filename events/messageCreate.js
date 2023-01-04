const commands = require("../config/commandHandler");
const config = require("../utils/config.json");

module.exports = {
    name: "messageCreate",
    description: "Command Message",
    execute(msg, client) {
        if (msg.author.bot) return;

        // command salam
        switch (msg.content.toUpperCase()) {
            case "P":
                msg.channel.send("salam yang bener dong");
                break;
            case "ASSALAMUALAIKUM":
                msg.channel.send("Waalaikumsalam");
                break;
            case "VC":
                msg.channel.send(`@everyone woi`);
                break;
            default:
                break;
        }


        // Pengecekan Prefix dan jumlah args dalam pesan
        let args = "";

        config.prefix.forEach((prefix) => {
            if (msg.content.startsWith(prefix)) {
                args = msg.content.substring(prefix.length).split(" ");
            }
        });

        if (args == "") return;
        commands.get(args[0]).execute(msg, client, args);
    },
};
