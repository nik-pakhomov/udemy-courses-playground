const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Nikita.');
fs.appendFileSync('notes.txt', '\nMy surname is Pakhomov');