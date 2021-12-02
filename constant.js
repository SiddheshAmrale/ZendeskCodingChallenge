const dontenv = require("dotenv");
dontenv.config();

module.exports = {
    TOKEN: process.env.TOKEN,
    GET_ALL_TICKETS : '1',
    GET_TICKET_BY_ID: '2',
    MENU: 'menu',
    EXIT: 'exit'

}