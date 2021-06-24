// Bot

module.exports.status = function(discordbot, options) {

  const Discord = require("discord.js")

  discordbot.on("ready", () => {
    
    bot_type = (options && options.bot_type) || "PLAYING";
    bot_title = (options && options.bot_title) || "Hello";
    
    discordbot.user.setStatus('available')
    discordbot.user.setActivity(`${bot_title}`, {type: `${bot_type}`});
  })
}

// Chat

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