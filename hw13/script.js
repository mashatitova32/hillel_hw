const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let key = "";
    while (key.length < length) {
        key += characters[Math.floor(Math.random() * characters.length)];
    }
    return console.log(key);
}
generateKey(16,characters);

