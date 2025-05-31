import fetch from 'node-fetch'
//const fetch = require('node-fetch');

async function callServer() {
    const response = await fetch('http://localhost:3000/user/submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Test Client' })
    });

    const data = await response.json();
    console.log('Response from server:', data.message, '\nsecond response:', data.othermessage);
}

callServer();