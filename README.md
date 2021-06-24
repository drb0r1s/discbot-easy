<p align="center"><a href="https://nodei.co/npm/discbot-easy/"><img src="https://nodei.co/npm/discbot-easy.png"></a></p>

# Contents
- [discbot-easy](https://github.com/drb0r1s/discbot-easy#discbot-easy)
- [Installation](https://github.com/drb0r1s/discbot-easy#installation)
- [Requirement](https://github.com/drb0r1s/discbot-easy#requirement)
- [Example](https://github.com/drb0r1s/discbot-easy#example)
  - [Defining the required packages.](https://github.com/drb0r1s/discbot-easy#defining-the-required-packages)
  - [Bot](https://github.com/drb0r1s/discbot-easy#bot)
  - [Chat](https://github.com/drb0r1s/discbot-easy#chat)
  - [Fun](https://github.com/drb0r1s/discbot-easy#fun)
  - [Member Management](https://github.com/drb0r1s/discbot-easy#member-management)
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

### Status

```js
discbot.status(discordbot, {
  bot_type: "PLAYING",
  bot_title: "Hello",
});
```

## Chat

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
