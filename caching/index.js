const express = require(`express`);
const database = require(`./database`);

const app = express();
const cache = {};

app.listen(3001, () => console.log(`Listening on port 3001!`));

app.get(`/nocache/index.html`, (_, res) => {
    database.get(`index.html`, (page) => {
        res.send(page);
    })
});

app.get(`/cache/index.html`, (_, res) => {
    if (`index.html` in cache) {
        res.send(cache[`index.html`]);
        return;
    }

    database.get(`index.html`, (page) => {
        cache[`index.html`] = page;
        res.send(page);
    })
});
