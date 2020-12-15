'use strict';

const axios = require(`axios`);
const WebSocket = require(`ws`);

module.exports = {
    publish: (message, topicId) => {
        return axios.post(`http://localhost:3001/${topicId}`, message);
    },

    subscribe: (topicId) => {
        return new WebSocket(`ws://localhost:3001/${topicId}`);
    }
}
