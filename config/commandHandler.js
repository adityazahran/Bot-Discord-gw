const { Collection } = require("discord.js")

const fs = require("fs")

// File command  managements
const commands = new Collection();
const files = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

for (const file of files) {
    const command = require(`../commands/${file}`);
    commands.set(command.name, command);
}

module.exports = commands;