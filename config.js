const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SUPUN-MD=aJlTnIoJ#PQlW0As-0l_8JLp_b0ttlukqjL2fBfDsJ1vZTG_pTfY", // session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/5xzWmSxn/20250224-094453.png",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true,false
ANTI_DELETE: process.env.ANTI_DELETE || "true", // true,false
MODE: process.env.MODE || "public", // public,private,groups,inbox
AUTO_READ_STATUS: process.env.ALLWAYS_OFFLINE || "false", // true,false
LANG: process.env.LANG || "EN",





};
