module.exports = {
    name: 'quiz',
    description: 'command untuk quiz mengenai burkina Faso',
    execute(msg, args, client) {
        if (args[1]) {
            if (args[1] === 'question') {
                msg.channel.send('Kapan Burkina faso merdeka')
            }
        } else {
            msg.channel.send('hah?')
        }
        setTimeout(() => {
            msg.channel.bulkDelete(2);
        }, 10000);

    }
}