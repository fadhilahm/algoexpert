'use strict';
const { emitMapResult } = require(`./map_reduce`);

const { getMapInput } = require(`./map_reduce`);

const mapInput = getMapInput(`latencies.txt`);

// Immediately Invocable Function Expressions (IIFE).
(function map(text) {
    const lines = text.split(`\n`);
    for (const line of lines) {
        const latency = parseInt(line);
        latency < 10000 ? emitMapResult(`under_10_seconds`, 1) : emitMapResult(`over_10_seconds`, 1);
    }
}(mapInput));
