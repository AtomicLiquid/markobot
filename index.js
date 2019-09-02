const Discord = require("discord.js");
const { token } = require("./config.json");
const bot = new Discord.Client();

bot.once("ready", () => {
    console.log("Ready")
})

bot.on("ready", () => {
    bot.user.setActivity('witt my cofe maskin');
})

bot.on("message", async message => {
    if(message.channel.id === "584166690829500458") {
        message.member.addRole(message.guild.roles.find(r => r.name === "Crab")).catch(console.error);
        message.delete(1);
    } else if(message.content === "vhs") {
        const pillipsEmbed = new Discord.RichEmbed()
            .setColor("#ff69b4")
            .setTitle("PILIPS VERI BAAAD")
            .setAuthor("Marko Vahanen")
            .setThumbnail("https://i.imgur.com/yoMOq4b.png")
            .setDescription("not like jeivic, veri bad fideliteti")
            .setFooter("https://www.youtube.com/watch?v=-z4iw8Ppo1o");

        message.channel.send(pillipsEmbed);
    } else if(message.content.includes("pizza") && !message.author.bot) message.reply("i heard you like sausage pizza?\n" 
            + "https://thumbs.gfycat.com/PoliteFreeGharial-mobile.mp4");
    else if(message.content.includes("wtf") && !message.author.bot) message.reply("https://imgur.com/gallery/mpAHCgz");
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel


    if(oldUserChannel === undefined && newUserChannel !== undefined && newMember.id === "152752909661110272") {
        var nickname = newMember.nickname;
        nickname = nickname.split("FPS");
        nickname = parseInt(nickname[0]);
        newMember.setNickname( (nickname += 1) + "FPS Warrior");
    }
})

bot.login(token);