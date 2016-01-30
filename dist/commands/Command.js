"use strict";
var Command = (function () {
    function Command(id, requestId, sessionId, type) {
        this.id = id;
        this.requestId = requestId;
        this.sessionId = sessionId;
        this.type = type;
    }
    Command.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Command;
}());
exports.Command = Command;
