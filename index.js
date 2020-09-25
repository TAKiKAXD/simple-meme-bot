const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const client = new Discord.Client();
const { Console } = require('console');

client.on('ready', async() => {
    console.log("bot is ready")
});

client.on('message', async message => {
    if (message.content === ".meme") {
        const subReddits =[ "memes", "meme"] //you can add more subreddis if you want
        const random = subReddits[Math.floor(Math.random()  * subReddits.length)]

        const img =  await randomPuppy(random)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`here is a meme from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed)
    }
}) ; 

client.login("your bot token") // your bots token you get from https://discord.com/developers/applications