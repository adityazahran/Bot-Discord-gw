const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { token, clientId, guildId } = require("./utils/config.json");

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Pong'),
    new SlashCommandBuilder().setName('testing').setDescription('Testing Commands'),

].map(command => command.toJSON())

const rest = new REST({ version: "9" }).setToken(token);

rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("berhasil menambahkan slash commands"))
    .catch(console.error);
