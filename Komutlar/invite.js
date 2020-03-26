// ------------------- İnvite - Gelişmiş ------------------- //

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
   const embed = new Discord.RichEmbed()
   .setColor('RED')
   .setDescription(`<:elmas:649376613087313940> **<@${member.user.id}>** *adlı kullanıcı sunucuya katıldı.* **__${member.guild.members.size}__** *kişi olduk.\n Davet eden kullanıcı:* **<@${davetçi.id}>**  (**__\`\`${invite.uses}\`\`__** *adet daveti var*)`)
   .setTimestamp()
   .setFooter(`Hizmetkar v1.0`)
   
   client.guilds.get('SUNUCU ID').channels.get('KANAL ID').send(embed)
  })
});

// ------------------- İnvite - Gelişmiş (finish) ------------------- //