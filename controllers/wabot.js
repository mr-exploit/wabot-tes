const { Client, LocalAuth, LegacySessionAuth } = require('whatsapp-web.js');

const client = new Client();

const deviceConnect = async(req, res) => {
    console.log("cek req qr");
    try {
        client.on('qr', qr => {
            // qrcode.generate(qr, {small: true});
            console.log("cek qr", qr);
            res.json({qr});
        });
        client.on('ready', () => {
            console.log('Client is ready!');
        });
         
        client.on('message', message => {
            console.log(message.body);
        });
        
        client.on('message', message => {
            if(message.body === '!ping') {
                client.sendMessage(message.from, 'halo test');
            }
        });
 
        
        client.initialize();
         
    } catch (error) {
        console.log("cek error", error);
    }
   
    
}


module.exports ={
    deviceConnect,
}