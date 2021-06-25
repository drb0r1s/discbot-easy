<div align="center">
  <br />
  <p>
    <a href="https://github.com/drb0r1s/discbot-easy"><img src="https://i.imgur.com/MeisZI3.png" width="400" alt="discbot-easy" /></a>
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
- [discbot-easy](https://www.npmjs.com/package/discbot-easy#discbot-easy)
- [Installation](https://www.npmjs.com/package/discbot-easy#installation)
- [Requirement](https://www.npmjs.com/package/discbot-easy#requirement)
- [Example](https://www.npmjs.com/package/discbot-easy#example)
  - [Defining the required packages.](https://www.npmjs.com/package/discbot-easy#defining-the-required-packages)
  - [Bot](https://www.npmjs.com/package/discbot-easy#bot)
  - [Chat](https://www.npmjs.com/package/discbot-easy#chat)
  - [Fun](https://www.npmjs.com/package/discbot-easy#fun)
  - [Member Management](https://www.npmjs.com/package/discbot-easy#member-management)
  - [Server](https://www.npmjs.com/package/discbot-easy#server)
- [Default Options](https://www.npmjs.com/package/discbot-easy#default-options)
- [Author](https://www.npmjs.com/package/discbot-easy#author)
- [Help](https://www.npmjs.com/package/discbot-easy#help)

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

### Status

```js
discbot.status(discordbot, {
  bot_type: "PLAYING",
  bot_title: "Hello",
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

## Member Management

### Ban

```js
discbot.ban(discordbot, {
  prefix:"-",
  banCmd: "ban",
  permission_error: "You don't have permission to do that.",
  mention_error: "Mention someone.",
  higher_role_error: "You can't kick him.",
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
})
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

*Discord:* **boris**#1111

# Help

If you need **help** using the package or have a question, contact the [author](https://www.npmjs.com/package/discbot-easy#author).