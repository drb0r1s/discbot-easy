<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/discbot-easy"><img src="https://i.imgur.com/MeisZI3.png" width="400" alt="discbot-easy" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/discbot-easy"><img src="https://img.shields.io/npm/v/discbot-easy.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discbot-easy"><img src="https://img.shields.io/npm/dt/discbot-easy.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/discbot-easy/"><img src="https://nodei.co/npm/discbot-easy.png" alt="npm installnfo" /></a>
  </p>
</div>

# Contents
- [discbot-easy](https://github.com/drb0r1s/discbot-easy#discbot-easy)
- [Installation](https://github.com/drb0r1s/discbot-easy#installation)
- [Requirement](https://github.com/drb0r1s/discbot-easy#requirement)
- [Example](https://github.com/drb0r1s/discbot-easy#example)
  - [Defining the required packages.](https://github.com/drb0r1s/discbot-easy#defining-the-required-packages)
  - [Bot](https://github.com/drb0r1s/discbot-easy#bot)
  - [Chat](https://github.com/drb0r1s/discbot-easy#chat)
  - [Fun](https://github.com/drb0r1s/discbot-easy#fun)
  - [Giveaway](https://github.com/drb0r1s/discbot-easy#giveaway)
  - [Member Management](https://github.com/drb0r1s/discbot-easy#member-management)
  - [Search](https://github.com/drb0r1s/discbot-easy#search)
  - [Server](https://github.com/drb0r1s/discbot-easy#server)
- [Default Options](https://github.com/drb0r1s/discbot-easy#default-options)
- [Author](https://github.com/drb0r1s/discbot-easy#author)
- [Help](https://github.com/drb0r1s/discbot-easy#help)

# discbot-easy

**discbot-easy** is an npm package that can help with communication and easier interaction with *discord.js*.

With this package it is possible to design **Discord Bot** commands without knowledge of *programming* and *discord.js*.

# Installation

To install and use this package you must first install **discord.js**:
```
npm i discord.js
```

After installing discord.js, you need to install the **discbot-easy** package:
```
npm i discbot-easy
```

## Requirement

- [discord.js](https://www.npmjs.com/package/discord.js)

# Example

### Defining the required packages.

```js
const Discord = require("discord.js");
const discordbot = new Discord.Client();
const discbot = require("discbot-easy");

discordbot.login("TOKEN");
```

## Bot

### Boost Info

```js
discbot.boostinfo(discordbot, {
  channel_id: "CHANNEL ID",
  booster_text: "Member has boosted the server.",
  notBooster_text: "Member has unboosted the server.",
});
```

### Help

```js
discbot.help(discordbot, {
  prefix: "-",
  helpCmd: "help",
  help_text: "HELP TEXT",
});
```

### Ping

```js
discbot.ping(discordbot, {
  prefix: "-",
  bot_id: "BOT ID",
  bot_text: "BOT TEXT",
});
```

### Status

```js
discbot.status(discordbot, {
  bot_type: "PLAYING",
  bot_title: "Hello",
});
```

### Suggest

```js
discbot.suggest(discordbot, {
  prefix: "-",
  suggestCmd: "suggest",
  suggestion_error: "Enter your suggestion."
});
```

### Timer

```js
discbot.timer(discordbot, {
  prefix: "-",
  timerCmd: "timer",
  time_error: "Enter time (seconds).",
  NaN_error: "Enter a valid time.",
  min_time_error: "Time should be more than or equal to 0.",
  reason_error: "Enter reason.",
});
```

### Welcome

```js
discbot.welcome(discordbot, {
  server_id: "SERVER ID",
  channel_id: "CHANNEL ID",
  welcome_message: "A new member has just joined the server!",
});
```

## Chat

### Lockchannel

```js
discbot.lockchannel(discordbot, {
  prefix: "-",
  lockchannelCmd: "lockchannel",
  permission_error: "You don't have permission to do that.",
});
```

### Purge

```js
discbot.purge(discordbot, {
  prefix: "-",
  purgeCmd: "purge",
  permission_error: "You don't have permission to do that.",
  NaN_error: "Enter the number of messages you want to delete.",
});
```

### Slowmode

```js
discbot.slowmode(discordbot, {
  prefix: "-",
  slowmodeCmd: "slowmode",
  permission_error: "You don't have permission to do that.",
  time_error: "Enter time.",
  NaN_error: "Enter a valid time.",
  max_time_error: "Slowmode should be less than or equal to 6 hours.",
  min_time_error: "Slowmode should be more than or equal to 1 second.",
});
```

### Snipe

```js
discbot.snipe(discordbot, {
  prefix: "-",
  snipeCmd: "snipe",
  snipe_error: "There is nothing to snipe.",
});
```

### Unlockchannel

```js
discbot.unlockchannel(discordbot, {
  prefix: "-",
  lockchannelCmd: "unlockchannel",
  permission_error: "You don't have permission to do that.",
});
```

## Fun

### Avatar

```js
discbot.avatar(discordbot, {
  prefix: "-",
  avatarCmd: "avatar",
});
```

### Dice

```js
discbot.dice(discordbot, {
  prefix: "-",
  diceCmd: "dice",
  dice_text: "Your number is:",
});
```

### Message

```js
discbot.message(discordbot, {
  prefix: "-",
  messageCmd: "message",
  mention_error: "Mention someone.",
  text_error: "Enter text.",
});
```

### Mydevice

```js
discbot.mydevice(discordbot, {
  prefix: "-",
  mydeviceCmd: "mydevice",
});
```

### Randomnumber

```js
discbot.randomnumber(discordbot, {
  prefix: "-",
  randomnumberCmd: "randomnumber",
  number_error: "Enter number.",
  NaN_error: "Enter a valid number.",
});
```

### Say

```js
discbot.say(discordbot, {
  prefix: "-",
  sayCmd: "say",
  text_error: "Enter text.",
});
```

## Giveaway

### Creategw

```js
discbot.creategw(discordbot, {
  prefix: "-",
  creategwCmd: "creategw",
  permission_error: "You don't have permission to do that.",
  channel_error: "Mention channel.",
  timer_error: "Enter time (minutes).",
  winner_error: "Enter number of winners.",
  NaN_error: "Enter a valid number.",
  prize_error: "Enter prize.",
  giveaway_emoji: "🎉",
  no_reaction_error: "Not enough people reacted.",
});
```

## Member Management

### Ban

```js
discbot.ban(discordbot, {
  prefix:"-",
  banCmd: "ban",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  higher_role_error: "You can't ban him.",
  reason_error: "Enter a reason.",
});
```

### Addrole

```js
discbot.addrole(discordbot, {
  prefix: "-",
  addroleCmd: "addrole",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  newRole_error: "Enter Role ID.",
});
```

### Kick

```js
discbot.kick(discordbot, {
  prefix:"-",
  kickCmd: "kick",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  higher_role_error: "You can't kick him.",
  reason_error: "Enter a reason.",
});
```

### Mute

```js
discbot.mute(discordbot, {
  prefix: "-",
  muteCmd: "mute",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  role_id: "ROLE ID",
  already_muted_error: "This user is already muted.",
  reason_error: "Enter reason.",
});
```

### Removerole

```js
discbot.removerole(discordbot, {
  prefix: "-",
  removeroleCmd: "removerole",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  oldRole_error: "Enter Role ID.",
});
```

### Setname

```js
discbot.setname(discordbot, {
  prefix: "-",
  setnameCmd: "setname",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  newName_error: "Enter a new username.",
});
```

### Stats

```js
discbot.stats(discordbot, {
  prefix: "-",
  statsCmd: "stats",
});
```

### Unmute

```js
discbot.unmute(discordbot, {
  prefix: "-",
  unmuteCmd: "unmute",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  role_id: "ROLE ID",
  not_muted_error: "This user is not muted.",
});
```

## Search

### Google

```js
discbot.google(discordbot, {
  prefix: "-",
  googleCmd: "google",
  text_error: "Enter text.",
});
```

## Server

### Server

```js
discbot.server(discordbot, {
  prefix: "-",
  serverCmd: "server",
});
```

# Default Options

**Commands** can be used in whole or in part *without defining options*.

Example:
```js
discbot.setname(discordbot);
```

If the options are *not defined*, when using the command, the options will be the ones that are the **default**.

Example:
```js
// Default Options: setname

discbot.setname(discordbot, {
  prefix: "-",
  setnameCmd: "setname",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  newName_error: "Enter a new username.",
});
```

In each command, the *default prefix* is ​​-.

The *default name* of each command is the same as the **function name**.

# Author

**drb0r1s**

*Github:* **drb0r1s**
*Discord:* **drb0r1s**#9999
*Email:* **contact@drb0r1s.xyz**

# Help

If you need **help** using the package or have a question, contact the [author](https://github.com/drb0r1s/discbot-easy#author).
