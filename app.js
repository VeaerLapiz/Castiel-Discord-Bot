const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`.c help`);
});

client.on('ready', () => {
  var channel = client.channels.get('373736008023277573');
  channel.send("Startup Successful! Castiel here!");
}); 

client.on('message', function(message) {
        if (message.channel.isPrivate) {
                console.log(`(Private) ${message.author.name}: ${message.content}`);
        } else {
                console.log(`(${message.server} / ${message.channel}) ${message.author}: ${message.content}`);
        }
});

client.on('guildMemberAdd', (guild, member) => {
	var channel = client.channels.get('373696098386051072');
	channel.send(`Welcome to the server! Castiel at your service!`);
});

client.on('guildMemberRemove',(guild, member) => {
	var channel = client.channels.get('373696098386051072');
	channel.send(`Farewell! We hope to see you again~`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on('message', message => {
  if (message.content === 'xO') {
    message.channel.send('The inhumanity Kazu! Stop that *xO*');
  }
});

client.on('message', message => {
  if (message.content === 'Hello Castiel') {
    message.channel.send('Hey there!');
  }
});

client.on('message', message => {
  if (message.content === '.c avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === '.c enter') {
    message.channel.send(`*${message.author.tag} has entered the chatroom*`);
  }
});

client.on('message', message => {
  if (message.content === '.c leave') {
    message.channel.send(`*${message.author.tag} has left the chatroom*`);
  }
});

client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} for: ${reason}`);

  }
  
  if(command === "ban") {

    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} for: ${reason}`);
  } 
   
  if(command === "apply") {
	 
	message.channel.send('Want to join the Chasing Time Development Team? Apply here! https://docs.google.com/document/d/1qdeEZcpTJS4U8AFWX9uNwwqIim2INQmXn5sH8GLNSMc/edit?usp=sharing');
  }
 
  if(command === "discord") {
	 
	message.channel.send('Invite your friends!\n<https://discord.me/chasingtimepublic>');
  }
  
  if(command === "bored") {
	 
	message.channel.send('Here is a death note. A special present from Ryuk! MWAHAHAHAHA *TWISTED ARMS*');
  }
  
  if(command === "nick") {
	 
	message.channel.send('HEY DO YOU WANT A AMAZING NICKNAME?\nWELL COME ON DOWN TO\nAMAZING NICKS\nTHERE MANY TYPES OF NICKNAMES\nLIKE\nRANDOM WORD TYPE\nCELEBRITY TYPE\nPUN TYPE\nAND MORE\nSO\nCOME ON DOWN\nTO AMAZING NICKS\nAND GET YOURSELF THE BEST NICKNAME IN TOWN');
  }
  
  if(command === "ninain") {
	 
	message.channel.send('ninain?ninain?ninain?ninain?ninain?ninain?ninain?ninain?ninain?');
  }
  
  if(command === "triggeredkazu") {
	 
	message.channel.send('KAZU IS FKN TRIGGERED! XRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
  }
  
  if(command === "rules") {
	 
	const embed = new Discord.RichEmbed()
  .setTitle("Chasing Time Public | Rules")
  .setColor([255, 99, 71])
  .setDescription("Follow the rules to avoid penalties!\n\n-- Have common sense\n\n-- Do not spam\n\n-- Respect everyone\n\n-- Text and connect to the right channels\n\n-- Follow Discords Terms of Service `https://discordapp.com/terms`")
  .setThumbnail("https://cdn.discordapp.com/attachments/418668326546571265/418669467539603457/Chasing_Time_Icon.jpg")
  .setTimestamp()

  message.channel.send({embed});
}
  
  if(command === "boxscape") {
	 
	message.channel.send('Follow Boxscape Studios on Twitter\n<https://twitter.com/BoxscapeStudios>');
  }
  
  if(command === "botinfo") {
	 
	const embed = new Discord.RichEmbed()
  .setTitle("Castiel | Bot Information")
  .setColor([255, 99, 71])
  .setDescription("Hello darling! My name is Castiel and I'm a bot programmed by Lapiz Rebooted! If you would like more information about me, do `.c help` or contact Lapiz~")
  .setThumbnail("https://cdn.discordapp.com/attachments/417977911858167810/418329590134603777/Castiel_PFP.jpg")
  .setTimestamp()

  message.channel.send({embed});
}	

  if(command === "authorinfo") {
	 
	const embed = new Discord.RichEmbed()
  .setTitle("Castiel | Author Information")
  .setColor([114, 137, 218])
  .setDescription("Hey! My name is Lapiz Rebooted and I programmed this bot! This bot was custom made for CTP so enjoy! Do `.c help` for help")
  .setThumbnail("https://cdn.discordapp.com/avatars/193712010616242176/cf248f9f03112ba35b0f733c34a0d865.png?size=2048")
  .setTimestamp()

  message.channel.send({embed});
}

  if(command === "help") {
	 
	const embed = new Discord.RichEmbed()
  .setTitle("Castiel | Command Help")
  .setColor([255, 99, 71])
  .setDescription("Prefix `.c`\n**Commands:**\n .c ping\n .c avatar\n .c rules\n .c botinfo\n .c authorinfo\n .c apply\n .c discord\n\n**Custom Commands**\n .c enter\n .c leave\n .c bored\n .c nick\n .c ninain\n .c triggeredkazu\n .c boxscape\n .c deletethis\n .c funfact\n .c 8ball\n\n**Admin Only:**\n .c kick\n .c ban\n\n**To be added**\n .c warn\n *Music Commands*")
  .setThumbnail("https://cdn.discordapp.com/attachments/417977911858167810/418329590134603777/Castiel_PFP.jpg")
  .setTimestamp()

  message.channel.send({embed});
}

  if(command === "deletethis") {
	 
	message.channel.send('https://cdn.discordapp.com/attachments/393364381141827586/407054630133170177/deletethis.jpg');
  }
   
   
  var facts = [
	"Did you know every 60 seconds you waste water, a minute passes in Africa? Save water and stay hydrated!",
	"Did you know a group of frogs is called an army? Better watch out!",
	"Did you know the average person spends 6 months of their lifetime waiting on a red light to turn green?",
	"Did you know you burn more calories sleeping than you do watching television?",
	"Did you know there are more lifeforms living on your skin than there are people on the planet?",
	"Did you know a coyote can hear a mouse moving underneath a foot of snow?",
	"Did you know a sneeze can travel about 100 miles per hour?",
	"Did you know... I need more funfacts! Suggest some :D",
]; 

  if(command === "funfact") {
	message.channel.sendMessage(facts[Math.floor(Math.random() * facts.length)]);
  }
 
 var fortunes = [
	"Yes definitely!",
	"No, why try?",	
	"Maybe...",
	"Worth a try!",	
	"Castiel supports you!",	
	"Seek some help",
	"Yes... don't trust me though...",
	"Who said you couldn't? Me, duh!",
	"Who said you couldn't? Not me!",
];

 if(command === "8ball") {
	 if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
  	 else message.channel.sendMessage("Can't read that");
  }
 
 
});





client.login(process.env.BOT_TOKEN);
