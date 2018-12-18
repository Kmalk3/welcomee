const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("524243423209848842");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To __KingDom Server __ :wilted_rose:  **`), 4000)        
}
});
client.login(process.env.TOKEN);