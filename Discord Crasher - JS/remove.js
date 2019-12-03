const request = require('request');
const fs = require('fs');

const token = fs.readFileSync('./token.txt', 'utf-8');

request({
    method: 'DELETE',
    url: `https://discordapp.com/api/v6/users/@me/connections/contacts/133337`,
    json: true,
    gzip: true,
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
        'authorization': token,
    },
    body: {
        "name": "Fix Your Stuff Discord!",
        "visibility": 1
    }
})

console.log('Done! Crasher Removed From Profile.');