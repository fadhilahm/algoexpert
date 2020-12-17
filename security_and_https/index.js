const { encrypt, decrypt} = require(`aes256`);

const key = `special-key-1`;
const otherKey = `special-key-2`;

const plainText = `SystemExpert is great!`;

const encrypted = encrypt(key, plainText);
console.log(`Encrypted:`, encrypted);

const decrypted = decrypt(key, encrypted);
console.log(`Decrypted:`, decrypted);

const failedDecrypted = decrypt(otherKey, encrypted);
console.log(`Failed Decrypted:`, failedDecrypted);
