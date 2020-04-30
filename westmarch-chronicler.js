// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
		
client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
	if (msg.channel.type == 'dm' && msg.author.id == '159101217266466826'){
		const message = msg.content;
		const channel = client.channels.cache.find(ch => ch.name == 'west-march-scheduling');
		channel.send(message).then(function (message) {
			message.react("1⃣")
			message.react("2⃣")
			message.react("3⃣")
			message.react("4⃣")
			message.react("5⃣")
		});
	} else if (msg.channel.type == 'dm'){
		msg.author.send("Only DMs of the Synergy Westmarch Campaign are allowed to schedule these sessions! Sorry! :)")
	}
	return;
});

client.login(process.env.DISCORD_TOKEN);

