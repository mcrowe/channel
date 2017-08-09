"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
class Channel {
    constructor() {
        this.listeners = [];
    }
    subscribe(fn) {
        this.listeners.push(fn);
        // Return an unsubscribe function.
        return () => {
            util_1.pull(this.listeners, fn);
        };
    }
    publish(val) {
        this.listeners.forEach(fn => {
            fn(val);
        });
    }
}
exports.default = Channel;
