lient.on("guildMemberRemove", async function(member) {
  const entry = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
  if (entry.action !== "MEMBER_KICK") return
  const user = entry.executor;
  const id = entry.executor.id;
  if (id === member.guild.ownerID || id === client.user.id) return;
  member.guild.members.forEach(m => {
    if (m.id !== id) return
    m.roles.forEach(r => {
      m.removeRole(r.id)
    })
    m.addRole("JAİLROL ID")
  })

  return client.channels.get("LOG KANAL ID").send(`**<@${entry.executor.id}> adlı kullanıcı \`SAĞ TIK KİCK\` attığı için yetkileri alındı ve jaile gönderildi.**`)
})