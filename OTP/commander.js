const fs = require("fs");

const key = fs.readFileSync("./key");
let keyOffset = 0;

function encrypt(plaintext) {
    if (plaintext.length + keyOffset > key.length) {
        return console.error(`Key length not enough ot encrypt this message.`);
    }
    const cipherText = Buffer.alloc(plaintext.length);

    for (let i = 0; i < plaintext.length; ++i) {
        cipherText[i] = plaintext[i] ^ key[keyOffset + i];
        key[keyOffset + i] = 0;
    }

    keyOffset = keyOffset + plaintext.length;

    return cipherText;
}


const msg1 = Buffer.from("Commander Ross: Stand by to launch.");

const msg1Encrypted = encrypt(msg1);
console.log(msg1Encrypted);

fs.writeFileSync("./message", msg1Encrypted)