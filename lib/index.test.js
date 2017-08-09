"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const _1 = require("./");
ava_1.default('subscribe/publish', t => {
    const channel = new _1.default();
    let calls = 0;
    channel.subscribe(() => {
        calls += 1;
    });
    channel.publish({});
    t.is(calls, 1);
});
