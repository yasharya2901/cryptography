const crypto = require("crypto");

const cipher = "aes-128-ecb";

// our key - 128 bits
const key = Buffer.from("4e2ba6d34baff532ee26bbbb16d34baf", "hex");

function encrypt(plaintext) {
    const encryptor = crypto.createCipheriv(cipher, key, null);
    const cipherText = Buffer.concat([
        encryptor.update(plaintext),
        encryptor.final(),
    ]);

    return cipherText;
}


function decrypt(ciphertext) {
    const decryptor = crypto.createDecipheriv(cipher, key, null);
    const plaintext = Buffer.concat([
        decryptor.update(ciphertext),
        decryptor.final(),
    ]);

    return plaintext;
}

const plaintext = Buffer.from("My password is hHF2346%62nvFW.");

const cipherText = encrypt(plaintext);

const decryptedPlainText = decrypt(cipherText);

console.log("Plaintext:", plaintext.toString("utf-8"));
console.log("Ciphertext:", cipherText.toString("utf-8"));
console.log("Decrypted Plaintext:", decryptedPlainText.toString("utf-8"));