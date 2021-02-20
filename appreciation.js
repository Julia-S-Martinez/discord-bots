// require the discord.js module
const Discord = require('discord.js');

//require dotenv to load in client token
const dotenv = require('dotenv');
dotenv.config();

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(process.env.TOKEN);

const images = ["https://i.pinimg.com/originals/f6/83/60/f68360a888367f76f3af9ca76fef9a89.png",
				"https://images.unsplash.com/photo-1581022295087-35e593704911?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
				"https://images.unsplash.com/photo-1568725260808-ac71e22ab9fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
				"https://images.unsplash.com/photo-1581022414232-7c2eb612b50f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
				"https://images.unsplash.com/photo-1514907844399-4283c5c48c15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"]

client.on('message', message => {
    // Our bot needs to know if it will need to respond
    // It will listen for messages that contain "love", "friend", or "appreciate"
	if (message.content.startsWith("!") {
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		
		switch(cmd) {
			case 'help':
				return message.channel.send("**Commands**: <br>-help displays commands<br>-love @<user> notifies the user that they are loved"
				+ "<br>-hug @<user> will send a hug from you to user");
			case 'love':
				if (!message.mentions.users.size) {
					return message.reply('Tag someone who is loved');
				}
				return message.channel.send("${taggedUser.username} is loved");
			case 'hug':
				if (!message.mentions.users.size) {
					return message.reply('Tag someone to hug');
				}
				return message.channel.send("${message.author.username} gives ${taggedUser.username} a hug");
		}
	}
	else if (message.content.includes("love")  || message.content.includes("friend") || message.content.includes("appreciate")) {
        
		var img = images[Math.floor(Math.random() * 4)];
		
		
		return message.channel.send({files: [img]});
        
        
}}
);