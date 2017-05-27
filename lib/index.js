"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pull(xs, x) {
    const idx = xs.indexOf(x);
    if (idx > -1) {
        xs.splice(idx, 1);
    }
}
class Channel {
    constructor() {
        this.listeners = [];
    }
    subscribe(fn) {
        this.listeners.push(fn);
        // Return an unsubscribe function.
        return () => {
            pull(this.listeners, fn);
        };
    }
    broadcast(val) {
        this.listeners.forEach(fn => {
            fn(val);
        });
    }
}
exports.default = Channel;
