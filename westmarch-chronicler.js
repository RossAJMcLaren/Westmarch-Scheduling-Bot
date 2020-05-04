// Bot which when whispered will post that message to a specific channel and react to it with the numbers one to five
// Useful for scheduling events, currently used for a Westmarch DND campaign

//Load Dotenv as requirment to load in environemt variables
require('dotenv').config();
//Load the Discord API
const Discord = require('discord.js');
const client = new Discord.Client();
// List of authorised users allowed to send the bot information - in this case, Westmarch Dungeon Master's
var authorisedUsers = ['159101217266466826', '171728503257956352', '194578552459493376'];
// Turn the bot on so it's ready and available to receive information and react to actions in whichever discord server it is in
client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}!');
});
// Actions the bot should take when messaged
client.on('message', msg => {
	//Specifies what to do when direct messaged by an authorised user
	if (msg.channel.type == 'dm' && authorisedUsers.indexOf(msg.author.id) !== -1){
		//Stores the content of the message - keeps the text and formatting
		const message = msg.content;
		// Finds the specific channel the bot is setup to post too
		const channel = client.channels.cache.find(ch => ch.name == 'bot-playground');
		// Posts the message to the channel and then reacts to it with the numbers one to five
		channel.send(message).then(function (message) {
			message.react("1⃣")
			message.react("2⃣")
			message.react("3⃣")
			message.react("4⃣")
			message.react("5⃣")
		});
		// If it receives a direct message from an unauthorised individual it replies with an error message - useful for only allowing specific
		// permissions for accessing the BOT.
	} else if (msg.channel.type == 'dm'){
		msg.author.send("Only DMs of the Synergy Westmarch Campaign are allowed to schedule these sessions! Sorry! :)")
	}
	return;
});
// Logs the bot into discord, making it active in whichever servers it is in
client.login(process.env.DISCORD_TOKEN);

