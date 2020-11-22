'use strict';

const database = {
    [`index.html`]: `<html>ハローハッピーワールド</html>`
};

module.exports = {
    get: (key, callback) => {
        setTimeout(() => {
            callback(database[key]);
        }, 3000);
    }
}
