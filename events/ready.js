module.exports = {
    name: "ready",
    description: 'Pengecekan bot bisa dijalankan atau tidak',
    execute(client) {
        console.log("Bot Online");
        console.log(`Logged in as ${client.user.tag}!`);
    }

}