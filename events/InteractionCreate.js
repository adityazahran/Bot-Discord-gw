const interactions = require('../config/InteractionHandler')
const { Client, Intents, Interaction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const { commandName } = interaction;

        if (!interactions.has(commandName)) return;
        interactions.get(commandName).execute(interaction, client)
    }
}