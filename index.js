const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

const prefix = process.env.DISCORD_PREFIX_COMMAND;

client.once('ready', () => {
    console.log('Bot está online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'hello') {
        message.channel.send('Hi!');
    }

});

client.login(process.env.DISCORD_TOKEN);
