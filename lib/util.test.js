"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const util_1 = require("./util");
ava_1.default('index', t => {
    const list = [1, 2, 3];
    util_1.pull(list, 2);
    t.deepEqual(list, [1, 3]);
});
