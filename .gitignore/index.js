
'use strict';
const Discord = require('discord.js');

const config = require('./config.json');
const cmds = require('./commands.js');
const music = require('./music.js');
const tool = require('./tool.js');

const prompt = require('prompt');
const colors = require('colors');
prompt.message = '';
prompt.delimiter = '';

var prefix = ("!")

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username}  starting.`);
    console.log(`Serving ${bot.guilds.size} guilds.`);

    bot.user.setGame(config.prefix + 'help');


    //Internal bot commands.
});

bot.on('message', msg => {
    if (msg.author.bot || msg.channel.type != 'text')
        return; // Do not respond to messages from bots or messages that are not from guilds.

    if (!msg.content.startsWith(config.prefix))
        return; //Not a command.

    let cmd = msg.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();
    getCmdFunction(cmd)(msg);
});

bot.on('error', (e) => console.error(e));
bot.on('warn', (e) => console.warn(e));
// bot.on('debug', (e) => console.info(e));

bot.login(process.env.TOKEN)

function getCmdFunction(cmd) {
    const COMMANDS = {
	    'ban': cmds.ban,
        'choose': cmds.choose,
        'help': cmds.help,
        'debug': cmds.debug,
        'kick': cmds.kick,
        'prune': cmds.prune,
        'music': music.processCommand,
    }
    return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};
}

bot.on('message', message => {

    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("information du discord")
        .addField("Nom du discord", message.guild.name)
        .addField("créé le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateur sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

    if(message.content.startsWith(prefix + "sondage")) {
        let modRole = message.guild.roles.find("name", "Administrateur");
        if(message.member.roles.has(modRole.id)) {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("sondage")
                .addField(thingToEcho, "Répondez avec :white_check_mark: ou :x:")
                .setColor("0xB40404")
                .setTimestamp()
            message.channel.sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission. Error:Insufissant_Permision")
}}})

bot.on("message", message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes:\n -Mettre le prefixe:! devant chaque commandes \n -Info \n -Sondage");
    }

    if (message.content === "salut"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "Salut"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "Bonjour"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "bonjour"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "bjr"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "slt"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }

    if (message.content === "cc"){
        message.reply("bien le bonjour. :)")
        console.log("commande Salut effectué")
    }
    if (message.content === "bot de merde"){
        message.reply("ptdr c'est toi la merde fdp")
        console.log("commande d'insulte")
    }

    if (message.content === "stats serveur"){
        message.reply("en attente... en attente... en attente... les serveurs est pour le moment operationnel ( https://status.discordapp.com/ ), je m'occupe de la paprace administartive.")
        console.log("commande stats")
    }
    
    if (message.content === "merde"){
        message.reply("veuillez éviter les insultes dans ce salon, allez dans le salon #danger.")
    }

    if (message.content === "Merde"){
        message.reply("veuillez éviter les insultes dans ce salon, allez dans le salon #danger.")
    }

    if (message.content === "fdp"){
        message.reply("veuillez éviter les insultes dans ce salon, allez dans le salon #danger.")
    }
});
