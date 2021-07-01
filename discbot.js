// Bot

module.exports.help = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    helpCmd = (options && options.helpCmd) || "help";
    
    if(command === helpCmd) {

      help_text = (options && options.help_text);

      if(!help_text) {

        console.log("Error: Enter help text.\nhelp_text: 'HELP TEXT',")
        return message.channel.send("**Help Text** is not defined.")
      }

      let helpEmbed = new Discord.MessageEmbed()
      .setTitle("Help")
      .setDescription(`${help_text}`)
      .setThumbnail(discordbot.user.displayAvatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setTimestamp()

      message.channel.send(helpEmbed)
    }
  })
}

module.exports.ping = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;

    bot_id = (options && options.bot_id);
    bot_text = (options && options.bot_text);

    if(!bot_id) {

      console.log("Error: Enter bot id.\nbot_id: 'BOT ID',")
      return message.channel.send("**Bot ID** is not defined.")
    }

    if (message.content === `<@${bot_id}>` || message.content === `<@!${bot_id}>`) {

      if(!bot_text) {

        let ping_embed = new Discord.MessageEmbed()
        .setTitle("Bot Help")
        .setAuthor(`${discordbot.user.username}`)
        .setDescription(`My prefix here is: \`${prefix}\`.`)
        .setThumbnail(discordbot.user.displayAvatarURL({dynamic: true}))
        .setColor("RANDOM")
        .setTimestamp()

        return message.channel.send(ping_embed);
      }
      
      let pingEmbed = new Discord.MessageEmbed()
      .setTitle("Bot Help")
      .setAuthor(`${discordbot.user.username}`)
      .setDescription(`${bot_text}`)
      .setThumbnail(discordbot.user.displayAvatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setTimestamp()

      message.channel.send(pingEmbed);
    }
  })
}


module.exports.status = function(discordbot, options) {

  const Discord = require("discord.js")

  discordbot.on("ready", () => {
    
    bot_type = (options && options.bot_type) || "PLAYING";
    bot_title = (options && options.bot_title) || "Hello";
    
    discordbot.user.setStatus('available')
    discordbot.user.setActivity(`${bot_title}`, {type: `${bot_type}`});
  })
}

module.exports.suggest = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    suggestCmd = (options && options.suggestCmd) || "suggest";
    
    if(command === suggestCmd) {

      suggestion_error = (options && options.suggestion_error);

      let suggestion = args.join(" ");

      if(!args[0]) {

        if(!suggestion_error) {

          let suggestion_embed = new Discord.MessageEmbed()
          .setDescription("Enter your suggestion.")
          .setColor("GREY")

          return message.channel.send(suggestion_embed);
        }

        let suggestion_error_embed = new Discord.MessageEmbed()
        .setDescription(`${suggestion_error}`)
        .setColor("GREY")

        return message.channel.send(suggestion_error_embed);
      }

      let suggestionEmbed = new Discord.MessageEmbed()
      .setTitle("New Suggestion!")
      .setAuthor(`${message.author.tag}`)
      .setDescription(`${suggestion}\nSuggestion by: ${message.author}.`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp()

      message.channel.send(suggestionEmbed)
      .then(function(message) {
        message.react("✅")
        message.react("❌")
      })
    }
  })
}

module.exports.timer = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    timerCmd = (options && options.timerCmd) || "timer";
    
    if(command === timerCmd) {

      time_error = (options && options.time_error);
      NaN_error = (options && options.NaN_error);
      min_time_error = (options && options.min_time_error);
      reason_error = (options && options.reason_error);

      let time = args[0] * 1000;

      if(!time) {

        if(!time_error) {

          let time_embed = new Discord.MessageEmbed()
          .setDescription("Enter time (seconds).")
          .setColor("GREY")

          return message.channel.send(time_embed);
        }

        let time_error_embed = new Discord.MessageEmbed()
        .setDescription(`${time_error}`)
        .setColor("GREY")

        return message.channel.send(time_error_embed);
      }

      if(isNaN(time)) {

        if(!NaN_error) {

          let NaN_embed = new Discord.MessageEmbed()
          .setDescription("Enter a valid number.")
          .setColor("RED")

          return message.channel.send(NaN_embed);
        }

        let NaN_error_embed = new Discord.MessageEmbed()
        .setDescription(`${NaN_error}`)
        .setColor("RED")

        return message.channel.send(NaN_error_embed);
      }
      
      if(time < 0) {

        if(!min_time_error) {

          let min_time_embed = new Discord.MessageEmbed()
          .setDescription("Time should be more than or equal to 0.")
          .setColor("RED")

          return message.channel.send(min_time_embed);
        }

        let min_time_error_embed = new Discord.MessageEmbed()
        .setDescription(`${min_time_error}`)
        .setColor("RED")

        return message.channel.send(min_time_error_embed);
      }

      let reason = args.slice(1).join(" ");

      if(!reason) {

        if(!reason_error) {

          let reason_embed = new Discord.MessageEmbed()
          .setDescription("Enter reason.")
          .setColor("GREY")

          return message.channel.send(reason_embed);
        }

        let reason_error_embed = new Discord.MessageEmbed()
        .setDescription(`${reason_error}`)
        .setColor("GREY")

        return message.channel.send(reason_error_embed);
      }

      message.delete();
      
      let timerEmbed = new Discord.MessageEmbed()
      .setTitle("Timer")
      .setAuthor(`${message.author.tag}`)
      .setDescription(`Timer set successfully.\nYou will receive a message with the text: \`${reason}\`, after \`${time / 1000}\`s.`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp()
      
      message.channel.send(timerEmbed);

      setTimeout(async () => {
        let dmEmbed = new Discord.MessageEmbed()
        .setTitle("Timer")
        .setDescription(`The timer timed out.\nTime: \`${time / 1000}\`s\nText: \`${reason}\``)
        .setThumbnail(discordbot.user.displayAvatarURL({dynamic: true}))
        .setColor("BLUE")
        .setTimestamp()

        message.author.send(dmEmbed);
      }, time)
    }
  })
}

module.exports.welcome = function(discordbot, options) {

  const Discord = require("discord.js")

  discordbot.on("guildMemberAdd", member => {

    server_id = (options && options.server_id);
    channel_id = (options && options.channel_id);
    welcome_message = (options && options.welcome_message);
    
    if(!server_id) {

      return console.log("Error: Enter server id.\nserver_id: 'SERVER ID',")
    }

    if(!channel_id) {

      return console.log("Error: Enter channel id.\nchannel_id: 'CHANNEL ID',")
    }

    if(member.guild.id === `${server_id}`) {
    
      if(!welcome_message) {

        let welcome_embed = new Discord.MessageEmbed()
        .setTitle(`Welcome!`)
        .setDescription(`A new member has just joined the server!\nWelcome ${member}.`)
        .setColor("RANDOM")
        .setTimestamp()

        return discordbot.channels.cache.get(`${channel_id}`).send(welcome_embed);
      }
      
      let welcome_message_embed = new Discord.MessageEmbed()
      .setTitle(`Welcome!`)
      .setDescription(`${welcome_message}\nNew member: ${member}.`)
      .setColor("RANDOM")
      .setTimestamp()
    
      discordbot.channels.cache.get(`${channel_id}`).send(welcome_message_embed);
    }
  })
}
// Chat

module.exports.lockchannel = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    lockchannelCmd = (options && options.lockchannelCmd) || "lockchannel";
    
    if(command === lockchannelCmd) {

      permission_error = (options && options.permission_error);

      if(!message.member.hasPermission("ADMINISTRATOR")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
    
      let lockchannelEmbed = new Discord.MessageEmbed()
      .setTitle("Lock Channel")
      .setDescription(`The channel has been successfully locked by: ${message.author}.`)
      .setColor("GREEN")
      .setTimestamp();
        
      message.channel.send(lockchannelEmbed);
    }
  })
}

module.exports.purge = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    purgeCmd = (options && options.purgeCmd) || "purge";
    
    if(command === purgeCmd) {

      permission_error = (options && options.permission_error);
      NaN_error = (options && options.NaN_error);

      if(!message.member.hasPermission("MANAGE_MESSAGES")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      let purgeNumber = args[0];
      
      if(isNaN(purgeNumber)) {

        if(!NaN_error) {

          let NaN_embed = new Discord.MessageEmbed()
          .setDescription("Enter the number of messages you want to delete.")
          .setColor("GREY")

          return message.channel.send(NaN_embed);
        }

        let NaN_error_embed = new Discord.MessageEmbed()
        .setDescription(`${NaN_error}`)
        .setColor("GREY")

        return message.channel.send(NaN_error_embed);
      }

      message.delete();
      message.channel.bulkDelete(purgeNumber);

      let purgeEmbed = new Discord.MessageEmbed()
      .setDescription(`Deleted ${purgeNumber} messages.`)
      .setColor("GREEN")
      .setTimestamp()

      message.channel.send(purgeEmbed);
    }
  })
}

module.exports.slowmode = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    slowmodeCmd = (options && options.slowmodeCmd) || "slowmode";
    
    if(command === slowmodeCmd) {

      permission_error = (options && options.permission_error);
      time_error = (options && options.time_error);
      NaN_error = (options && options.NaN_error);
      max_time_error = (options && options.max_time_error);
      min_time_error = (options && options.min_time_error);

      if(!message.member.hasPermission("MANAGE_CHANNELS")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      if(!args[0]) {

        if(!time_error) {

          let time_embed = new Discord.MessageEmbed()
          .setDescription("Enter time.")
          .setColor("GREY")

          return message.channel.send(time_embed);
        }

        let time_error_embed = new Discord.MessageEmbed()
        .setDescription(`${time_error}`)
        .setColor("GREY")

        return message.channel.send(time_error_embed);
      }

      if(isNaN(args)) {

        if(!NaN_error) {
          
          let NaN_embed = new Discord.MessageEmbed()
          .setDescription("Enter a valid time.")
          .setColor("RED")

          return message.channel.send(NaN_embed);
        }

        let NaN_error_embed = new Discord.MessageEmbed()
        .setDescription(`${NaN_error}`)
        .setColor("RED")

        return message.channel.send(NaN_error_embed);
      }

      if(args > 21600) {

        if(!max_time_error) {

          let max_time_embed = new Discord.MessageEmbed()
          .setDescription("Slowmode should be less than or equal to 6 hours.")
          .setColor("RED")

          return message.channel.send(max_time_embed)
        }

        let max_time_error_embed = new Discord.MessageEmbed()
        .setDescription(`${max_time_error}`)
        .setColor("RED")

        return message.channel.send(max_time_error_embed);
      }

      if(args < 0) {

        if(!min_time_error) {

          let min_time_embed = new Discord.MessageEmbed()
          .setDescription("Slowmode should be more than or equal to 1 second.")
          .setColor("RED")

          return message.channel.send(min_time_embed);
        }

        let min_time_error_embed = new Discord.MessageEmbed()
        .setDescription(`${min_time_error}`)
        .setColor("RED")

        return message.channel.send(min_time_error_embed);
      }
      
      message.channel.setRateLimitPerUser(args[0])

      let slowmodeEmbed = new Discord.MessageEmbed()
      .setTitle(`Slowmode is now ${args[0]}s.`)
      .setColor("GREEN")

      message.channel.send(slowmodeEmbed);
    }
  })
}

module.exports.snipe = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.snipe = new Discord.Collection()
  discordbot.on("messageDelete", deletedMsg => {
    discordbot.snipe.set(deletedMsg.channel.id, deletedMsg)
  });

  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    snipeCmd = (options && options.snipeCmd) || "snipe";
    
    if(command === snipeCmd) {

      snipe_error = (options && options.snipe_error);

      let channel = message.mentions.channels.first() || message.channel
      let msg = discordbot.snipe.get(channel.id)

      if(!msg) {

        if(!snipe_error) {

          let snipe_embed = new Discord.MessageEmbed()
          .setDescription("There is nothing to snipe.")
          .setColor("GREY")

          return message.channel.send(snipe_embed);
        }

        let snipe_error_embed = new Discord.MessageEmbed()
        .setDescription(`${snipe_error}`)
        .setColor("GREY")

        return message.channel.send(snipe_error_embed);
      }

      let snipeEmbed = new Discord.MessageEmbed()
      .setTitle(msg.author.tag)
      .setThumbnail(msg.author.displayAvatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setDescription(msg.content)
      .setTimestamp()
    
      if(msg.attachments.first()) embed.setImage(msg.attachments.first().url)
      
      message.channel.send(snipeEmbed);
    }
  })
}

module.exports.unlockchannel = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    unlockchannelCmd = (options && options.unlockchannelCmd) || "unlockchannel";
    
    if(command === unlockchannelCmd) {

      permission_error = (options && options.permission_error);

      if(!message.member.hasPermission("ADMINISTRATOR")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
    
      let unlockchannelEmbed = new Discord.MessageEmbed()
      .setTitle("Unlock Channel")
      .setDescription(`The channel has been successfully unlocked by: ${message.author}.`)
      .setColor("GREEN")
      .setTimestamp();
        
      message.channel.send(unlockchannelEmbed);
    }
  })
}



// Fun

module.exports.avatar = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    avatarCmd = (options && options.avatarCmd) || "avatar";
    
    if(command === avatarCmd) {
      
      let member = message.mentions.users.first() || message.author;
      
      let avatarEmbed = new Discord.MessageEmbed()
      .setTitle("Member Avatar")
      .setAuthor(`${member.username}`)
      .setImage(member.displayAvatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setTimestamp()

      message.channel.send(avatarEmbed);
    }
  })
}

module.exports.dice = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    diceCmd = (options && options.diceCmd) || "dice";
    
    if(command === diceCmd) {

      dice_text = (options && options.dice_text);

      let numbers = [
        "https://i.imgur.com/9BI3m2l.png", // 1
        "https://i.imgur.com/d8KXqbg.png", // 2
        "https://i.imgur.com/nzV2Tjm.png", // 3
        "https://i.imgur.com/sIOJFvp.png", // 4
        "https://i.imgur.com/AQYpn9B.png", // 5
        "https://i.imgur.com/TnqoQTp.png" // 6
        ];

      if(!dice_text) {

        let dice_embed = new Discord.MessageEmbed()
        .setDescription("Your number is:")
        .setImage(`${numbers[Math.floor(Math.random() * numbers.length)]}`)
        .setColor("RANDOM")
  
        return message.channel.send(dice_embed);
      }
  
      let diceEmbed = new Discord.MessageEmbed()
      .setDescription(`${dice_text}`)
      .setImage(`${numbers[Math.floor(Math.random() * numbers.length)]}`)
      .setColor("RANDOM")
  
      message.channel.send(diceEmbed);
    }
  })
}

module.exports.message = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    messageCmd = (options && options.messageCmd) || "message";
    
    if(command === messageCmd) {

      mention_error = (options && options.mention_error);
      text_error = (options && options.text_error);

      let member = message.mentions.members.first();

      if(!member) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed);
        }

        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }

      let text = args.slice(1).join(" ");

      if(!text) {

        if(!text_error) {

          let text_embed = new Discord.MessageEmbed()
          .setDescription("Enter text.")
          .setColor("GREY")

          return message.channel.send(text_embed);
        }

        let text_error_embed = new Discord.MessageEmbed()
        .setDescription(`${text_error}`)
        .setColor("GREY")

        return message.channel.send(text_error_embed);
      }

      message.delete()

      let message_channel_embed = new Discord.MessageEmbed()
      .setTitle("The message was sent successfully.")
      .setAuthor(`${message.author.tag}`)
      .setDescription(`The message was successfully sent to ${member}.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp()

      message.channel.send(message_channel_embed);

      let dm_embed = new Discord.MessageEmbed()
      .setTitle("New Message!")
      .setAuthor(`${message.author.tag}`)
      .setDescription(`Author: ${message.author}\nContent: ${text}`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setColor("BLUE")
      .setTimestamp()

      member.send(dm_embed);
    }
  })
}

module.exports.randomnumber = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    randomnumberCmd = (options && options.randomnumberCmd) || "randomnumber";
    
    if(command === randomnumberCmd) {

      number_error = (options && options.number_error);
      NaN_error = (options && options.NaN_error);

      if(!args[0]) {

        if(!number_error) {

          let number_embed = new Discord.MessageEmbed()
          .setDescription("Enter number.")
          .setColor("GREY")

          return message.channel.send(number_embed);
        }

        let number_error_embed = new Discord.MessageEmbed()
        .setDescription(`${number_error}`)
        .setColor("GREY")

        return message.channel.send(number_error_embed);
      }

      let numtext = args.join(" ");
      const randomnumber = Math.floor(Math.random() * numtext);
      
      if(isNaN(numtext)) {

        if(!NaN_error) {

          let NaN_embed = new Discord.MessageEmbed()
          .setDescription("Enter a valid number.")
          .setColor("RED")

          return message.channel.send(NaN_embed);
        }

        let NaN_error_embed = new Discord.MessageEmbed()
        .setDescription(`${NaN_error}`)
        .setColor("RED")

        return message.channel.send(NaN_error_embed);
      }

      let randomnumberEmbed = new Discord.MessageEmbed()
      .setTitle("Random Number")
      .setDescription(`Number between 1 and ${numtext} is ${randomnumber}.`)
      .setColor("RANDOM")

      message.channel.send(randomnumberEmbed);
    }
  })
}

module.exports.say = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    sayCmd = (options && options.sayCmd) || "say";
    
    if(command === sayCmd) {
      
      text_error = (options && options.text_error);

      const text = args.join(" ");

      if(!text) {

        if(!text_error) {

          let text_embed = new Discord.MessageEmbed()
          .setDescription("Enter text.")
          .setColor("GREY")
  
          return message.channel.send(text_embed);
        }
        
        let text_error_embed = new Discord.MessageEmbed()
        .setDescription(`${text_error}`)
        .setColor("GREY")

        return message.channel.send(text_error_embed);
      }

      message.delete()
      message.channel.send(`${text}\nMessage by: ${message.author}.`)
    }
  })
}

// Giveaway

module.exports.creategw = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    creategwCmd = (options && options.creategwCmd) || "creategw";
    
    if(command === creategwCmd) {

      permission_error = (options && options.permission_error);
      channel_error = (options && options.channel_error);
      timer_error = (options && options.timer_error);
      winner_error = (options && options.winner_error);
      NaN_error = (options && options.NaN_error);
      prize_error = (options && options.prize_error);
      giveaway_emoji = (options && options.giveaway_emoji) || "🎉";
      no_reaction_error = (options && options.no_reaction_error);

      if(!message.member.hasPermission("MANAGE_MESSAGES")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }
      
      let channel = message.mentions.channels.first();

      if(!channel) {

        if(!channel_error) {

          let channel_embed = new Discord.MessageEmbed()
          .setDescription("Mention channel.")
          .setColor("GREY")

          return message.channel.send(channel_embed);
        }

        let channel_error_embed = new Discord.MessageEmbed()
        .setDescription(`${channel_error}`)
        .setColor("GREY")

        return message.channel.send(channel_error_embed);
      }

      let timer = args[1];

      if(!timer) {

        if(!timer_error) {

          let timer_embed = new Discord.MessageEmbed()
          .setDescription("Enter time.")
          .setColor("GREY")

          return message.channel.send(timer_embed);
        }

        let timer_error_embed = new Discord.MessageEmbed()
        .setDescription(`${timer_error}`)
        .setColor("GREY")

        return message.channel.send(timer_error_embed);
      }

      let winnerNumber = args[2];

      if(!winnerNumber) {

        if(!winner_error) {

          let winner_embed = new Discord.MessageEmbed()
          .setDescription("Enter number of winners.")
          .setColor("GREY")

          return message.channel.send(winner_embed);
        }

        let winner_error_embed = new Discord.MessageEmbed()
        .setDescription(`${winner_error}`)
        .setColor("GREY")

        return message.channel.send(winner_error_embed);
      }

      if(isNaN(timer) || isNaN(winnerNumber)) {

        if(!NaN_error) {

          let NaN_embed = new Discord.MessageEmbed()
          .setDescription("Enter a valid number.")
          .setColor("RED")

          return message.channel.send(NaN_embed);
        }

        let NaN_error_embed = new Discord.MessageEmbed()
        .setDescription(`${NaN_error}`)
        .setColor("RED")

        return message.channel.send(NaN_error_embed);
      }

      let prize = args.slice(3).join(" ");

      if(!prize) {

        if(!prize_error) {

          let prize_embed = new Discord.MessageEmbed()
          .setDescription("Enter prize.")
          .setColor("GREY")

          return message.channel.send(prize_embed);
        }

        let prize_error_embed = new Discord.MessageEmbed()
        .setDescription(`${prize_error}`)
        .setColor("GREY")

        return message.channel.send(prize_error_embed);
      }

      message.delete();
      
      let infoEmbed = new Discord.MessageEmbed()
      .setDescription(`Giveaway successfully created in channel: ${channel}.`)
      .setColor("GREEN")
      
      message.channel.send(infoEmbed)
      .then(v => v.delete({timeout: 20000}));
      
      channel.send(`🎉 **${prize} giveaway!** 🎉`)
      
      let gwEmbed = new Discord.MessageEmbed()
      .setTitle("Giveaway started!")
      .setDescription(`Giveaway prize: \`${prize}\`\nNumber of winners: \`${winnerNumber}\`\nDuration: \`${timer}\``)
      .setThumbnail(discordbot.user.displayAvatarURL({dynamic: true}))
      .setColor("BLUE")
      .setFooter(`Hosted by: ${message.author.tag}`)
      .setTimestamp()
      
      let m = await channel.send(gwEmbed)
      m.react(`${giveaway_emoji}`)

      setTimeout(async () => {

        if(m.reactions.cache.get(`${giveaway_emoji}`).count <= 1) {
          
          if(!no_reaction_error) {

            let no_reaction_embed = new Discord.MessageEmbed()
            .setDescription("Not enough people reated.")
            .setColor("RED")

            return message.channel.send(no_reaction_embed);
          }

          let no_reaction_error_embed = new Discord.MessageEmbed()
          .setDescription(`${no_reaction_error}`)
          .setColor("RED")

          return message.channel.send(no_reaction_error_embed);
        }

        let winner = m.reactions.cache.get(`${giveaway_emoji}`).users.cache.filter((u) => !u.bot).random(winnerNumber);
        
        channel.send(`🎉 **WINNER:** ${winner} 🎉`)
        
        let winnerEmbed = new Discord.MessageEmbed()
        .setTitle("Giveaway ended!")
        .setDescription(`Congratulations ${winner}, you won **${prize}**!`)
        .setColor("GREEN")
        .setTimestamp()
        
        channel.send(winnerEmbed)
      }, timer)
    }
  })
}

// Member Management

module.exports.ban = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    banCmd = (options && options.banCmd) || "ban";
    
    if(command === banCmd) {
      
      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      higher_role_error = (options && options.higher_role_error);
      reason_error = (options && options.reason_error);
  
      if(!message.member.hasPermission("BAN_MEMBERS")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }
  
      let bannedUser = message.mentions.members.first()
        
      if(!bannedUser) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed)
        }
          
        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }
      
      if(!bannedUser.bannable) {

        if(!higher_role_error) {

          let higher_role_embed = new Discord.MessageEmbed()
          .setDescription("You can't ban him.")
          .setColor("RED")

          return message.channel.send(higher_role_embed);
        }
          
        let higher_role_error_embed = new Discord.MessageEmbed()
        .setDescription(`${higher_role_error}`)
        .setColor("RED")

        return message.channel.send(higher_role_error_embed);
      }
  
      let reason = args.slice(1).join(' ');
        
      if(!reason) {

        if(!reason_error) {

          let reason_embed = new Discord.MessageEmbed()
          .setDescription("Enter reason.")
          .setColor("GREY")

          return message.channel.send(reason_embed);
        }

        let reason_error_embed = new Discord.MessageEmbed()
        .setDescription(`${reason_error}`)
        .setColor("GREY")

        return message.channel.send(reason_error_embed);
      }
        
      await bannedUser.ban({ reason })
        .catch(error => console.log(`An **error** occurred while starting this *function*.\n\`${error}\``));
      
        let banembed = new Discord.MessageEmbed()
        .setTitle("User successfully banned.")
        .setDescription(`**${bannedUser}** has been *banned* by **${message.author}**.\n**Reason:** \`${reason}\`.`)
        .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
        .setColor("GREEN")
        .setTimestamp()

        message.channel.send(banembed)
    }
  })
}

module.exports.addrole = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    addroleCmd = (options && options.addroleCmd) || "addrole";
    
    if(command === addroleCmd) {

      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      newRole_error = (options && options.newRole_error);

      if(!message.member.hasPermission("MANAGE_ROLES")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")
        
        return message.channel.send(permission_error_embed);
      }

      let member = message.mentions.members.first();

      if(!member) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed);
        }

        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }

      let newRole = args.slice(1);
      
      if(!newRole[0]) {

        if(!newRole_error) {

          let newRole_embed = new Discord.MessageEmbed()
          .setDescription("Enter Role ID.")
          .setColor("GREY")

          return message.channel.send(newRole_embed);
        }

        let newRole_error_embed = new Discord.MessageEmbed()
        .setDescription(`${newRole_error}`)
        .setColor("GREY")

        return message.channel.send(newRole_error_embed);
      }

      await member.roles.add(newRole);

      let addroleEmbed = new Discord.MessageEmbed()
      .setTitle("Add Role")
      .setDescription(`The role <@&${newRole}> was added to ${member}, by ${message.author}.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp()

      message.channel.send(addroleEmbed);
    }
  })
}

module.exports.kick = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    kickCmd = (options && options.kickCmd) || "kick";
    
    if(command === kickCmd) {
      
      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      higher_role_error = (options && options.higher_role_error);
      reason_error = (options && options.reason_error);
  
      if(!message.member.hasPermission("KICK_MEMBERS")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }
  
      let kickedUser = message.mentions.members.first()
        
      if(!kickedUser) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed)
        }
          
        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }
      
      if(!kickedUser.kickable) {

        if(!higher_role_error) {

          let higher_role_embed = new Discord.MessageEmbed()
          .setDescription("You can't kick him.")
          .setColor("RED")

          return message.channel.send(higher_role_embed);
        }
          
        let higher_role_error_embed = new Discord.MessageEmbed()
        .setDescription(`${higher_role_error}`)
        .setColor("RED")

        return message.channel.send(higher_role_error_embed);
      }
  
      let reason = args.slice(1).join(' ');
        
      if(!reason) {

        if(!reason_error) {

          let reason_embed = new Discord.MessageEmbed()
          .setDescription("Enter reason.")
          .setColor("GREY")

          return message.channel.send(reason_embed);
        }

        let reason_error_embed = new Discord.MessageEmbed()
        .setDescription(`${reason_error}`)
        .setColor("GREY")

        return message.channel.send(reason_error_embed);
      }
        
      await kickedUser.kick(reason)
        .catch(error => console.log(`An **error** occurred while starting this *function*.\n\`${error}\``));
      
        let kickembed = new Discord.MessageEmbed()
        .setTitle("User successfully kicked.")
        .setDescription(`**${kickedUser}** has been *kicked* by **${message.author}**.\n**Reason:** \`${reason}\`.`)
        .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
        .setColor("GREEN")
        .setTimestamp()

        message.channel.send(kickembed)
    }
  })
}

module.exports.mute = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    muteCmd = (options && options.muteCmd) || "mute";
    
    if(command === muteCmd) {
      
      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      role_id = (options && options.role_id);
      already_muted_error = (options && options.already_muted_error);
      reason_error = (options && options.reason_error);

      if(!message.member.hasPermission("KICK_MEMBERS")) {
        
        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }
        
        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      let member = message.mentions.members.first()

      if(!member) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed)
        }
        
        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")
        
        return message.channel.send(mention_error_embed);
      }

      if(!role_id) {

        console.log("Error: Enter role id.\nrole_id: 'ROLE ID',")
        return message.channel.send("**Role ID** is not defined.")
      }
      
      if(member.roles.cache.has(`${role_id}`)) {

        if(!already_muted_error) {

          let already_muted_embed = new Discord.MessageEmbed()
          .setDescription("This user is already muted.")
          .setColor("RED");

          return message.channel.send(already_muted_embed);
        }
        
        let already_muted_error_embed = new Discord.MessageEmbed()
        .setDescription(`${already_muted_error}`)
        .setColor("RED")

        return message.channel.send(already_muted_error_embed);
      }

      let reason = args.slice(1).join(" ");

      if(!reason) {

        if(!reason_error) {

          let reason_embed = new Discord.MessageEmbed()
          .setDescription("Enter reason.")
          .setColor("GREY")

          return message.channel.send(reason_embed);
        }
      
        let reason_error_embed = new Discord.MessageEmbed()
        .setDescription(`${reason_error}`)
        .setColor("GREY")

        return message.channel.send(reason_error_embed);
      }

      var role  = message.guild.roles.cache.get(`${role_id}`);
      member.roles.add(role);

      let addRoleEmbed = new Discord.MessageEmbed()
      .setTitle("User successfully muted.")
      .setDescription(`${member} is **muted**.\n**Reason:** \`${reason}\`.\nMuted by: **${message.author}**.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp();

      message.channel.send(addRoleEmbed);
    }
  })
}

module.exports.removerole = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    removeroleCmd = (options && options.removeroleCmd) || "removerole";
    
    if(command === removeroleCmd) {

      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      oldRole_error = (options && options.oldRole_error);

      if(!message.member.hasPermission("MANAGE_ROLES")) {

        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")
        
        return message.channel.send(permission_error_embed);
      }

      let member = message.mentions.members.first();

      if(!member) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed);
        }

        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }

      let oldRole = args.slice(1);
      
      if(!oldRole[0]) {

        if(!oldRole_error) {

          let oldRole_embed = new Discord.MessageEmbed()
          .setDescription("Enter Role ID.")
          .setColor("GREY")

          return message.channel.send(oldRole_embed);
        }

        let oldRole_error_embed = new Discord.MessageEmbed()
        .setDescription(`${oldRole_error}`)
        .setColor("GREY")

        return message.channel.send(oldRole_error_embed);
      }

      await member.roles.remove(oldRole);

      let removeroleEmbed = new Discord.MessageEmbed()
      .setTitle("Remove Role")
      .setDescription(`The role <@&${oldRole}> was removed from ${member}, by ${message.author}.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp()

      message.channel.send(removeroleEmbed);
    }
  })
}

module.exports.setname = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
  
  discordbot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    setnameCmd = (options && options.setnameCmd) || "setname";
    
    if(command === setnameCmd) {
      
      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      newName_error = (options && options.newName_error);
  
      if(!message.member.hasPermission("MANAGE_NICKNAMES")) {

        if(!permission_error) {
          
          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }

        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      let member = message.mentions.members.first();

      if(!member) {

        if(!mention_error) {
        
          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed);
        }

        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")

        return message.channel.send(mention_error_embed);
      }

      let newName = args.slice(1).join(" ");

      if(!newName) {

        if(!newName_error) {

          let newName_embed = new Discord.MessageEmbed()
          .setDescription("Enter a new username.")
          .setColor("GREY")

          return message.channel.send(newName_embed);
        }

        let newName_error_embed = new Discord.MessageEmbed()
        .setDescription(`${newName_error}`)
        .setColor("GREY")

        return message.channel.send(newName_error_embed);
      }

      member = member.setNickname(newName)

      let nameEmbed = new Discord.MessageEmbed()
      .setTitle("Successful username change.")
      .setDescription(`**${message.mentions.users.first().username}** name was changed to \`${newName}\`, by **${message.author}**.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp();

      message.channel.send(nameEmbed);
    }
  })
}

module.exports.stats = function(discordbot, options) {
    
  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";

  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    statsCmd = (options && options.statsCmd) || "stats";
    
    if(command === statsCmd) {

      let member = message.mentions.users.first() || message.author;

      const statsEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Stats")
      .setTitle(`${member.username}`)
      .setDescription(`Discord username:\n **${member.username}**\n\nID:\n **${member.id}**\n\nIn server:\n **${message.guild.name}**\n\nRoles:\n **<@&${message.guild.member(message.mentions.users.first() || message.author)._roles.join('> <@&')}>**\n\n`)
      .setThumbnail(member.displayAvatarURL({dynamic: true}))
      .setTimestamp();
  
      message.channel.send(statsEmbed);
    }
  })
}

module.exports.unmute = function(discordbot, options) {

  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";
    
  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    unmuteCmd = (options && options.unmuteCmd) || "unmute";
    
    if(command === unmuteCmd) {
      
      permission_error = (options && options.permission_error);
      mention_error = (options && options.mention_error);
      role_id = (options && options.role_id);
      not_muted_error = (options && options.not_muted_error);

      if(!message.member.hasPermission("KICK_MEMBERS")) {
        
        if(!permission_error) {

          let permission_embed = new Discord.MessageEmbed()
          .setDescription("You don't have permission to do that.")
          .setColor("RED")

          return message.channel.send(permission_embed);
        }
        
        let permission_error_embed = new Discord.MessageEmbed()
        .setDescription(`${permission_error}`)
        .setColor("RED")

        return message.channel.send(permission_error_embed);
      }

      let member = message.mentions.members.first()

      if(!member) {

        if(!mention_error) {

          let mention_embed = new Discord.MessageEmbed()
          .setDescription("Mention someone.")
          .setColor("GREY")

          return message.channel.send(mention_embed)
        }
        
        let mention_error_embed = new Discord.MessageEmbed()
        .setDescription(`${mention_error}`)
        .setColor("GREY")
        
        return message.channel.send(mention_error_embed);
      }

      if(!role_id) {

        console.log("Error: Enter role id.\nrole_id: 'ROLE ID',")
        return message.channel.send("**Role ID** is not defined.")
      }
      
      if(!member.roles.cache.has(`${role_id}`)) {

        if(!not_muted_error) {

          let not_muted_embed = new Discord.MessageEmbed()
          .setDescription("This user is not muted.")
          .setColor("RED");

          return message.channel.send(not_muted_embed);
        }
        
        let not_muted_error_embed = new Discord.MessageEmbed()
        .setDescription(`${not_muted_error}`)
        .setColor("RED")

        return message.channel.send(not_muted_error_embed);
      }

      var role  = message.guild.roles.cache.get(`${role_id}`);
      member.roles.remove(role);

      let removeRoleEmbed = new Discord.MessageEmbed()
      .setTitle("User successfully unmuted.")
      .setDescription(`${member} is **unmuted**.\nUnmuted by: **${message.author}**.`)
      .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
      .setColor("GREEN")
      .setTimestamp();

      message.channel.send(removeRoleEmbed);
    }
  })
}

// Server

module.exports.server = function(discordbot, options) {
    
  const Discord = require("discord.js")
  const prefix = (options && options.prefix) || "-";

  discordbot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    serverCmd = (options && options.serverCmd) || "server";
    
    if(command === serverCmd) {

      let server_stats_embed = new Discord.MessageEmbed()
      .setTitle("Server Stats")
      .setDescription(`\n**Members:** \`${message.guild.memberCount}\`\n\n**Channels:** \`${message.guild.channels.cache.size}\`\n\n**Roles:** \`${message.guild.roles.cache.size}\`\n\n**Emotes:** \`${message.guild.emojis.cache.size}\`\n\n**Region:** \`${message.guild.region}\``)
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .setColor("BLUE")
      .setTimestamp()

      message.channel.send(server_stats_embed);
    }
  })
}