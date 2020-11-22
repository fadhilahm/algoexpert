const database = require(`./database`);
const express = require(`express`);
const redis = require(`redis`).createClient();

const app = express();

app.listen(3001, () => console.log(`Listening on port 3001!`));

app.get(`/nocache/index.html`, (_, res) => {
    database.get(`index.html`, page => {
        res.send(page);
        return;
    });
});

app.get(`/cache/index.html`, (_, res) => {
    redis.get(`index.html`, (_, redisRes) => {
        if (redisRes) {
            res.send(redisRes);
            return;
        }

        database.get(`index.html`, page => {
            redis.set(`index.html`, page, `EX`, 10);
            res.send(page);
            return;
        })
    })
})