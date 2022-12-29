const permission = require('../utils/permission.json')

module.exports = {
    name: "ingetin",
    description: "command untuk reminder task",
    execute(msg, args, client) {
        if (msg.channel.id === permission.reminder.channel.includes(msg.channel.id)) {
            let set = msg.content.split(" | ");
            let time = 0;

            // !reminder | 1s | Bentar lagi ada kampus
            if ((set[1].includes("am")) || (set[1].includes("pm"))) {
                msg.reply("Ilmunya masih belom nyampe bang :smiling_face_with_tear: (pake s, m, h, dulu)")
            } else {
                if (set[1].includes("s")) {
                    time = 1000 * parseInt(set[1].replace("s", ""));
                } else if (set[1].includes("m")) {
                    time = 1000 * 60 * parseInt(set[1].replace("m", ""));
                } else if (set[1].includes("h")) {
                    time = 1000 * 60 * 60 * parseInt(set[1].replace("h", ""));
                } else {
                    msg.reply("mau diingetin kapan bang? (pake S, M, H)");
                }


                if (set[2]) {
                    setTimeout(() => {
                        msg.delete()
                    }, 5000);

                    msg.channel.send(`oke bang ${msg.author}, nanti gw ingetin.`);
                    setTimeout(() => {
                        msg.channel.send(`Bang ${msg.author}, ${set[2]}`);
                    }, time);
                } else {
                    msg.reply("apa yang perlu diingetin bang?");
                }
            }
        } else {
            let channel = client.channels.cache.find(
                (ch) => ch.id === '403146144236044288'
            )
            msg.channel.send(`Set reminder di ${channel} aja woe jgn spam`)

            // Cara Dua
            // msg.channel.send(`Set reminder di :`)
            // permission.reminder.channel.forEach((id) => {
            //     const channel = client.channels.cache.find((ch) => ch.id === id);
            //     msg.channel.send(`${channel}`)

            // });
        }
    }

};
