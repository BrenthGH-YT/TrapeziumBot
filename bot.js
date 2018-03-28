const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TrapeziumMCBOT ready for duty!');
});

client.on('message', message => {
    if (message.content === 't;owner') {
    	message.reply('**Brenth**');
  	}
});

client.on('message', message => {
    if (message.content === 't;discord') {
    	message.reply('**https://discord.gg/ecX8Qtt <- TrapeziumMC Network Discord**');
  	}
});

client.on('message', message => {
    if (message.content === 't;creator') {
    	message.reply('**Brenth#4650 Creator Of The Bot**');
  	}
});

client.on('message', message => {
    if (message.content === 't;ip') {
    	message.reply('**(WIP) (IP TOO IF RELEASED) IP: TrapeziumMC.mcnetwork.me**');
  	}
});

client.on('message', message => {
    if (message.content === 't;tag') {
    	message.reply('**Owner Discord Tag: Brenth#4650**');
  	}
});

client.on('message', message => {
    if (message.content === 't;info') {
    	message.reply('**Info: I am TrapeziumMCBOT I am not a MODERATION Bot I am a multi-purpose bot of the TrapeziumMC discord server. **TrapeziumMC** is a Minecraft and Discord server filled with respectful, appreciative and patronative staff members and members. To get the ip type t;ip. The server has exciting ranks for you to apply with and earn with, every person here on TrapeziumMC always I do mean always, Good! And if you havent already, read the rules!**');
  	}
});

client.on('message', message => {
    if (message.content === 't;help') {
    	message.reply('**t;info t;tag t;creator t;owner t;discord t;ip t;ranks t;store t;website t;ping t;bing**');
  	}
});

client.on('message', message => {
    if (message.content === 't;ranks') {
    	message.reply('**[OWNER],[CO-OWNER],[SENIOR-MANAGER],[MANAGER],[DEV],[HEAD-ADMIN],[ADMIN],[MOD],[T-MOD],[HELPER],[BUILDER],[TRAP++],[TRAP+],[TRAP],DRAGON,EMERALD,DIAMOND,LAPIS,REDSTONE,GOLD,IRON,COAL,[YOUTUBER],MEMBER,[BOT]**');
  	}
});

client.on('message', message => {
    if (message.content === 't;website') {
    	message.reply('**SOON**');
  	}
});

client.on('message', message => {
    if (message.content === 't;store') {
    	message.reply('**SOON**');
  	}
});

client.on('message', message => {
    if (message.content === 't;ping') {
    	message.reply('**Pong!**');
  	}
});


client.on('message', message => {
    if (message.content === 't;bing') {
    	message.reply('**Bong!**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
