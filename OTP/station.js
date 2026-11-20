const fs = require("fs");

const key = fs.readFileSync("./key");
let keyOffset = 0;

function decrypt(ciphertext) {
    if (ciphertext.length + keyOffset > key.length) {
        return console.error(`Key length not enough ot decrypt this message.`);
    }
    const plaintext = Buffer.alloc(ciphertext.length);

    for (let i = 0; i < ciphertext.length; ++i) {
        plaintext[i] = ciphertext[i] ^ key[keyOffset + i];
        key[keyOffset + i] = 0;
    }

    keyOffset = keyOffset + ciphertext.length;
    
    return plaintext;
}


const message = fs.readFileSync("./message");
console.log(decrypt(message).toString("utf-8"));