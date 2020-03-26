client.on("guildBanAdd", async function(guild, user) {
        const entry = await guild
          .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
          .then(audit => audit.entries.first());
        const yetkili = await guild.members.get(entry.executor.id);
      setTimeout(async () =>{
          let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
          if(logs.entries.first().executor.bot) return;
          
            guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) ///TÜM ROLLERİNİ ALIR
           setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("ROL ID")/// VERİLECEK CEZALI ROL İD
          },3000)
          guild.unban(user) // Ban kaldırıyor
          return client.channels.get("LOG KANAL ID").send(`**<@${entry.executor.id}> adlı kullanıcı \`SAĞ TIK BAN\` attığı için yetkileri alındı ve jaile gönderildi. \`BANLANAN KİŞİNİN BANI OTOMATİK KALDIRILDI\`**`)
      },2000)
      })

      //////Sunucudaki üyelerin SAĞ TIK ile BAN atıldığı taktirde işlemi yapan kullanıcıyı JAİL'e göndermektedir
