require('dotenv').config(); // .env file එක load කරනවා

const http = require('http');

const PORT = process.env.PORT || 3000;
const SESSION_ID = process.env.SESSION_ID || 'your-default-session-id';
const API_KEY = process.env.API_KEY || 'your-default-api-key';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: "Server is running successfully!",
        session_id: SESSION_ID,
        api_key: API_KEY,
        port: PORT
    }, null, 2));
});

server.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
