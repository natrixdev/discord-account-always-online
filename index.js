const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris("YOUR DISCORD ACCOUNT TOKEN"); //your can put your token in a .env file to secure it
 
bot.connect();
