const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

module.exports.run= async(client, message, args) => {
   
let embed = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
  ▬▬▬▬▬▬▬▬ \`\`\📣Bilgilendirme📣\`\`\ ▬▬▬▬▬▬▬▬
> 📌 \`${prefix}sil\` **: Belirtiğiniz Sayıda Mesaj Siler.**
> 📌 \`${prefix}ping\` **: Bot'un Pingini Gösterir.**
> 📌 \`${prefix}yaz\` **: Bot İstediğiniz Yazıyı Yazar.**
> 📌 \`${prefix}oylama\` **: İstediğiniz Konuda Oylama Yaparsınız.**
> 📌 \`${prefix}ban\` **: Etiketlediğiniz Kişiyi Sunucudan Banlar.**
> 📌 \`${prefix}espri\` **: Bot Espri Yapar.**
> 📌 \`${prefix}davet\` **: Bot'un Davet Ekranı Açılır.**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> 💻​\`${prefix}yapımcım\` **: Botun Yapımcısının Kim Olduğunu Görürsünüz.**
> 💻​**Şuan Kullanılan Prefix =** \`${prefix}\`

`)

message.channel.send(embed)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
name: "yardım"
}