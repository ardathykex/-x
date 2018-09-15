
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
var prefix = ayarlar.prefix;
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setAuthor("Beinz Bot | Komutlar")
const asdasd = new Discord.RichEmbed()
.setColor(0xFFFFFF)
.addField("Genel Komutlar", `${prefix}yardım » **Beinz Bot'un Genel komutlarını gösterir!**
${prefix}sunucubilgi » **Bulunduğunuz sunucunun bilgilerini gösterir!**
${prefix}botbilgi » **Beinz Bot, bilgilerini gösterir!**
${prefix}yaz » **Bota istediğinizi yazabilirsiniz!**
${prefix}ping » **Bot'un pingini gösterir!**
${prefix}davet » **Bot'u eklemek için özele link atar!**
${prefix}gif (aranacak kelime) » **Bot, aradığınız hareketli resmi size gönderir!**
**Eğlence Komutlarını incelemek için ${prefix}eğlence komutunu kullanabilirsiniz.**
${prefix}avatar » **Bot profil resminizi gönderir!**\n`)
return  message.channel.sendEmbed(asdasd);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['komutlar', 'yardım'],
permLevel: 0
};

exports.help = {
name: 'genelkomutlar',
description: 'genelkomutlar',
usage: 'genelkomutlar'
};