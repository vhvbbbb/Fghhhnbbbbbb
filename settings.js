const fs = require('fs');

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Configuration object
module.exports = {
    // Bot name
    BOT_NAME: 'Ganesha-MD',

    // Session ID (required)
    SESSION_ID: 'put your session id',

    // Command prefix
    PREFIX: '.',

    // Footer text
    FOOTER: '*✦𝐆𝐚𝐧𝐞𝐬𝐡𝐚 𝐌𝐃✦*',

    // Alive image URL
    ALIVE_IMG: 'https://files.catbox.moe/za6ytm.jpg',

    // Port for the bot to run on
    PORT: '8000',

    // Heart reaction (true/false)
    HEART_REACT: convertToBool('false'),

    // Sudo users (admin numbers)
    SUDO: '+94741252876,+94712345678',

    // Alive message
    ALIVE_MSG: '*Hello, I am alive now!!*',

    // Auto read status (true/false)
    AUTO_READ_STATUS: convertToBool('true'),

    // Bot mode (public/private)
    MODE: 'public',

    // Anti-bad words (true/false)
    ANTI_BAD: convertToBool('false'),

    // Anti-links (true/false)
    ANTI_LINK: convertToBool('false'),

    // Anti-calls (true/false)
    ANTI_CALL: convertToBool('false'),

    // Anti-delete (true/false)
    ANTI_DELETE: convertToBool('false'),

    // Anti-bot (true/false)
    ANTI_BOT: convertToBool('false'),

    // Read commands (true/false)
    READ_CMD: convertToBool('false'),

    // Recording (true/false)
    RECORDING: convertToBool('false'),

    // AI chat (true/false)
    AI_CHAT: convertToBool('false'),

    // Auto song sender (true/false)
    AUTO_SONG_SENDER: convertToBool('false'),

    // Encryption key (32 characters long)
    ENCRYPTION_KEY: 'your-32-character-encryption-key'
};

// Encryption and decryption functions
const crypto = require('crypto');
const IV_LENGTH = 16; // AES block size

// Function to encrypt data
function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH); // Random initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(module.exports.ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`; // IV + encrypted data
}

// Function to decrypt data
function decrypt(text) {
    const [ivHex, encryptedText] = text.split(':'); // Split IV and encrypted data
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(module.exports.ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage of encryption and decryption
const apiKey = 'your-api-key-here'; // Replace with your actual API key
const encryptedKey = encrypt(apiKey); // Encrypt the API key
console.log('Encrypted API Key:', encryptedKey);

const decryptedKey = decrypt(encryptedKey); // Decrypt the API key
console.log('Decrypted API Key:', decryptedKey);
