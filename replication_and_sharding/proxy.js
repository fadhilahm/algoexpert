'use strict';

// import from node modules
const axios = require(`axios`);
const express = require(`express`);

const SHARD_ADRESSES = [
    `http://localhost:3000`,
    `http://localhost:3001`
];
const SHARD_COUNT = SHARD_ADRESSES.length;

const app = express();
app.use(express.json());

const getShardEndpoint = (key) => {
    const shardNumber = key.charCodeAt(0) % SHARD_COUNT;
    const shardAddress = SHARD_ADRESSES[shardNumber];
    return `${shardAddress}/${key}`;
};

app.post(`/:key`, (req, res) => {
    const shardEndpoint = getShardEndpoint(req.params.key);
    console.log(`Forwarding to: ${shardEndpoint}`);
    axios
    .post(shardEndpoint, req.body)
    .then(() => {
        res.send()
    });
});

app.get(`/:key`, (req, res) => {
    const shardEndpoint = getShardEndpoint(req.params.key);
    console.log(`Forwarding to: ${shardEndpoint}`);
    axios
    .get(shardEndpoint)
    .then(({ data }) => {
        if (data) {
            return res.send(data);
        }
        res.send(`null`);
        return;
    })
});

app.listen(8000, () => {
    console.log(`Listening on port 8000!`);
});