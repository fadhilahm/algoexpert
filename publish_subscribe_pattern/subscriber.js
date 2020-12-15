const messagingApi = require(`./messaging_api`);

const TOPIC_ID = process.env.TOPIC_ID;

const displayMessage = message => console.log(`> ${message.name}: ${message.text}`);

const streamMessages = () => {
    const messagingSocket = messagingApi.subscribe(TOPIC_ID);

    messagingSocket.on(`message`, data => {
        const message = JSON.parse(data);
        displayMessage(message);
    });
};

streamMessages();
