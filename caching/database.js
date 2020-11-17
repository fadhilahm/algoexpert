const database = {
    [`index.html`]: `<html>ハローハッピーワール!</html>`
};

module.exports.get = (key, callback) => {
    setTimeout(() => {
        callback(database[key]);
    }, 3000);
}