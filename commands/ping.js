module.exports = {
    name: 'ping',
    description: 'test koneksi bot',
    execute(msg, args, client) {
        msg.reply('pong :ping_pong:')
    }
}