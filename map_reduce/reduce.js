'use strict';

const { 
    emitReduceResult,
    getReduceInputs
} = require(`./map_reduce`);

const reduce = (key, values) => {
    const valuesCount = values.length;
    emitReduceResult(key, valuesCount);
};

const reduceInputs = getReduceInputs();
for (const input of reduceInputs) {
    reduce(input[0], input[1]);
};
