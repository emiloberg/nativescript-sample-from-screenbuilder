'use strict';
var frame = require("ui/frame");

function backTap() {
    frame.topmost().goBack();
}
exports.backTap = backTap;
