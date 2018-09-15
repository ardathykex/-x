
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
.addField("Eğlence Komutları", `${prefix}espri » **Bot size rastgele espri önerir!**
${prefix}müziköner » **Bot size rastgele müzik önerir!**
dönenrenkler
${prefix}dönenrenkler » **Bot, size dönen renklerin hareketli resmini gönderir.**
${prefix}ip » **Bot, size hareketli ip resmi gönderir!**
${prefix}özlüsöz » **Bot size rastgele özlüsöz önerir!**
${prefix}catgif » **Bot size hareketli Kedi resmi gönderir!**
${prefix}doggif » **Bot size hareketli Köpek resmi gönderir!**
${prefix}froggif » **Bot size hareketli Kurbağa resmi gönderir!**
${prefix}penguingif » **Bot size hareketli Penguen resmi gönderir!**
${prefix}monkeygif » **Bot size hareketli Maymun resmi gönderir!**
${prefix}parrotgif » **Bot size hareketli Papağan resmi gönderir!**
${prefix}paraateşle » **Bot sunuculardakine para resmi gönderir!**
${prefix}iyigeceler » **Bot size hareketli iyi geceler fotoğrafı gönderir!**
${prefix}atatürk » **Bot size Atatürk'ün rastgele fotoğraflarını gönderir!**
${prefix}çayismarla » **Bot sunucudakilere çay ısmarlar!**
${prefix}iskenderısmarla » **Bot sunucudakilere iskender ısmarlar!**
${prefix}pastaismarla » **Bot sunucudakilere pasta ısmarlar!**
**Genel komutlara bakmak için ${prefix}genelkomutlar komutunu kullanabilirsiniz.**
${prefix}tuzla » **Bot sunucudakileri Nusret'in tuzu ile tuzlar!**\n`)
return  message.channel.sendEmbed(asdasd);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['eğlencekomutları', 'eglence'],
permLevel: 0
};

exports.help = {
name: 'eğlence',
description: 'eğlence',
usage: 'eğlence'
};