"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove an item from a list, in place.
 */
function pull(xs, x) {
    const idx = xs.indexOf(x);
    if (idx > -1) {
        xs.splice(idx, 1);
    }
}
exports.pull = pull;
