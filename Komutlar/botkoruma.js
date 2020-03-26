client.on("guildMemberAdd", member => {
  var tag = "Ϯ";
  if (member.user.bot) {
    const logChannel = member.guild.channels.find(channel => channel.name === "güvenlik-log");
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`${tag} ${member} **adlı bot sunucuya eklendi!**\n${tag} **Güvenlik amacıyla eklenen botu \`yasakladım!\`**`)
logChannel.send(embed)
    member.ban();
  }
});
