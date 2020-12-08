const axios = require(`axios`);
const WebSocket = require(`ws`);

const createMessagingSocket = () => new WebSocket(`ws://localhost:3001/messages`);

const getMessages = () => axios.get(`http://localhost:3001/messages`).then(res => res.data);

const sendMessage = (message) => axios.post(`http://localhost:3001/messages`, message);

module.exports = {
    createMessagingSocket,
    getMessages,
    sendMessage
};
