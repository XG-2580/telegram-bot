const TelegramBot = require('node-telegram-bot-api');
const token = "5249310272:AAFBJb-zjOUQeDbl0xUz-95gN6lDaT7mD1E"
const bot = new TelegramBot(token, {polling: true});
const request = require('request');


bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message');
});