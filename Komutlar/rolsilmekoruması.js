client.on("roleDelete", async function(role) {
  const entry = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(audit => audit.entries.first())
 if (entry.action !== "ROLE_DELETE") return
 
 const user = entry.executor
 const id = user.id
   
   if (id === role.guild.ownerID || id === client.user.id) return
  let created
 try {
 created = await role.guild.createRole({
       name: role.name,
       color: role.color
     })
  }catch(e){
     console.log(e.stack);
   }
 created.setPermissions((role.permissions))
 created.setPosition(role.position)
 
 role.guild.members.forEach(m => {
   if (m.id !== id) return
   m.roles.forEach(r => {
     m.removeRole(r.id)
   })
   m.addRole("ROLID")
 })
 
 client.channels.get("LOG KANAL ID").send(`**<@${entry.executor.id}> adlı kullanıcı \`${role.name}\` rolünü sildi fakat rolü yeniden oluşturdum. Ayrıca kullanıcının yetkileri alındı ve jaile gönderildi.**`)
})