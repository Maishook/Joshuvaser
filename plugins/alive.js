const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "it sends good morning message"
const GN = "it sends good night message"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
asena.addCommand({pattern: 'gm', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "βπΚΙͺ α΄α΄ α΄α΄α΄ α΄ΚΚα΄Κα΄α΄β βAΚα΄ sα΄Κα΄Κα΄Ι΄Ι’Ιͺ α΄Ι΄Ι΄α΄α΄α΄  βπ₯°α΄ΚΚα΄Κα΄α΄α΄α΄ Ι’α΄α΄α΄ α΄α΄ΚΙ΄ΙͺΙ΄Ι’β";
    r_text[2] ="βοΈπΊπππ ππππππππ π";
    r_text[3] ="ππΆπππ π»πππππππ π₯°";
    r_text[4] ="πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ";
    r_text[5] ="π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π";
    r_text[6] ="πΌππππ πππ‘ππππ πΆ";
    r_text[7] ="πβΌβββ πβββ‘ββββ π₯°";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


asena.addCommand({pattern: 'gn', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "πHΙͺ Mα΄α΄Κα΄Κα΄ AΚα΄ Sα΄ΚΙͺΙ΄ UΚα΄α΄α΄α΄α΄ Vα΄Κα΄Ι΄Ι΄α΄ π EΚΚα΄Κα΄α΄α΄α΄ π«Gα΄α΄α΄ Ι΄ΙͺΙ’α΄Κβ¨";
        r_text[2] ="π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨";
        r_text[3] ="πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π";
        r_text[4] ="πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π";
        r_text[5] ="πααͺαͺα πααααΌα’ π«β¨";

      
    
        var i = Math.floor(6*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'gm', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "πΚΙͺ α΄α΄ α΄α΄α΄ α΄ΚΚα΄Κα΄α΄β βAΚα΄ sα΄Κα΄Κα΄Ι΄Ι’Ιͺ α΄Ι΄Ι΄α΄α΄α΄  βπ₯°α΄ΚΚα΄Κα΄α΄α΄α΄ Ι’α΄α΄α΄ α΄α΄ΚΙ΄ΙͺΙ΄Ι’β";
            r_text[2] ="βοΈπΊπππ ππππππππ π";
            r_text[3] ="ππΆπππ π»πππππππ π₯°";
            r_text[4] ="πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ";
            r_text[5] ="π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π";
            r_text[6] ="πΌππππ πππ‘ππππ πΆ";
            r_text[7] ="πβΌβββ πβββ‘ββββ π₯°";
          
        
            var i = Math.floor(8*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        asena.addCommand({pattern: 'gn', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "πHΙͺ Mα΄α΄Κα΄Κα΄ AΚα΄ Sα΄ΚΙͺΙ΄ UΚα΄α΄α΄α΄α΄ Vα΄Κα΄Ι΄Ι΄α΄ π EΚΚα΄Κα΄α΄α΄α΄ π«Gα΄α΄α΄ Ι΄ΙͺΙ’α΄Κβ¨";
                r_text[2] ="π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨";
                r_text[3] ="πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π";
                r_text[4] ="πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π";
                r_text[5] ="πααͺαͺα πααααΌα’ π«β¨";
        
              
            
                var i = Math.floor(6*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
                asena.addCommand({pattern: 'gm', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "πΚΙͺ α΄α΄ α΄α΄α΄ α΄ΚΚα΄Κα΄α΄β βAΚα΄ sα΄Κα΄Κα΄Ι΄Ι’Ιͺ α΄Ι΄Ι΄α΄α΄α΄  βπ₯°α΄ΚΚα΄Κα΄α΄α΄α΄ Ι’α΄α΄α΄ α΄α΄ΚΙ΄ΙͺΙ΄Ι’β";
                    r_text[2] ="βοΈπΊπππ ππππππππ π";
                    r_text[3] ="ππΆπππ π»πππππππ π₯°";
                    r_text[4] ="πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ";
                    r_text[5] ="π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π";
                    r_text[6] ="πΌππππ πππ‘ππππ πΆ";
                    r_text[7] ="πβΌβββ πβββ‘ββββ π₯°";
                  
                
                    var i = Math.floor(8*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                asena.addCommand({pattern: 'gn', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
                        var r_text = new Array ();
                    
                        r_text[1] = "πHΙͺ Mα΄α΄Κα΄Κα΄ AΚα΄ Sα΄ΚΙͺΙ΄ UΚα΄α΄α΄α΄α΄ Vα΄Κα΄Ι΄Ι΄α΄ π EΚΚα΄Κα΄α΄α΄α΄ π«Gα΄α΄α΄ Ι΄ΙͺΙ’α΄Κβ¨";
                        r_text[2] ="π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨";
                        r_text[3] ="πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π";
                        r_text[4] ="πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π";
                        r_text[5] ="πααͺαͺα πααααΌα’ π«β¨";
                
                      
                    
                        var i = Math.floor(6*Math.random())
                    
                        await message.client.sendMessage(
                            message.jid,(r_text[i]), MessageType.text);
                    
                        }));
}   
