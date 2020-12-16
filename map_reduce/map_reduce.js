'use strict';
const fs = require(`fs`);

const HOST = process.env.HOST;

module.exports = {
    getMapInput: (fileName) => {
        const path = `${HOST}/${fileName}`;
        return fs.readFileSync(path, `utf-8`);
    },

    emitMapResult: (key, value) => {
        const fileName = `${HOST}/map_results/${key}.txt`;
        fs.appendFileSync(fileName, value + `\n`);
    },

    getReduceInputs: () => {
        const fileNames = fs.readdirSync(`map_results`, `utf-8`);
        const inputs = [];
        for (const fileName of fileNames) {
            const key = fileName.split(`.`)[0];
            const contents = fs.readFileSync(`map_results/${fileName}`, `utf-8`);
            inputs.push([key, contents.split(`\n`).filter(value => value !== ``)]);
        }
        return inputs;
    },

    emitReduceResult: (key, value) => {
        const fileName = `reduce_results/results.txt`;
        fs.appendFileSync(fileName, `${key} ${value} \n`);
    }
};
