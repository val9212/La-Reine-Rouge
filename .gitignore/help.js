const commands = module.exports = {
    'help': `
~help [command]
   Brings up the command page. Pass a command for further information.`,

    'choose': `
~choose <arg1> | [arg2] ...
   Randomly chooses between the provided choice(s).`,

    'prune': `
~prune <amount> [options]
   Prunes the last <amount> messages.
   Options:
      [--bots]            : Supprimer seulement les message BOT.
      [--user <name>]     : Supprimer uniquement les messages de l'utilisateur spécifié.
      [--filter <string>] : Supprimer seulement les message avec le mots specifiez.
      [--pinned | -p]     : Supprimer les messages épinglés.
      [--silent | -s]     : Supprimer la commande et n'affiche pas les résultats.`,

    'role': `[Role Help]
~role give <role[,...]>  : Donner role(s).
~role take <role[,...]>  : Supprimer role(s).
~role modify <role>      : Modifier a role.
#Options
give|take
   [--bots]              : Changer le role des bots.
   [--users]             : Changer le role de l'utilisateur.
   [--user <user[,...]>] : Changer le role des joueurs spécifier.
   [--inrole <role>]     : Change le role de everyon pour le role.
   [--notinrole <role>]  : Enlever le role de tout le monde.
   [--noroles]           : Mettre le roles everyone a tout le monde.
modify
   [--name <name>]       : Renomer le role.
   [--color <color>]     : Changer la couleur du role. (6 digit HEX)`,

    'music': `
[Music Help]
~music | m <function>
   play <url> | <search> : Ajouter une musique a la liste d'attente.
   skip                  : Passer a la musique suivante.
   pause                 : Mettre en pause la musique.
   resume                : Jouer la musique.
   queue                 : Afficher le titre des muqiques en attente.
   purge                 : Supprimer la liste des musique.
   np                    : Affiche le titre de la chanson en cours.
   vol | v <0-100>       : Modifier le volume.
   join                  : Faire venir le bot.
   leave                 : Faire quitter le bot.
Requires a #music text channel.`,

    'ban': `
~ban <mention> [options]
   Bans the mentioned user.
   You cannot ban users in a role higher.
   Options:
      [--days <number>]   : Supprimer les messages de l'utilisateur (jour avant).
      [--reason <reason>] : Donner une raison au bannisement.`,

    'kick': `
~kick <mention> [options]
   Kicks the mentioned user.
   You cannot kick users in a role higher.
   Options:
      [--reason <reason>] : Donner un raison au kick..`
}