const crypto = require("crypto");
const fs = require("fs");

const key = crypto.randomBytes(100); // 100 bytes random buffer

fs.writeFileSync("./key", key);

