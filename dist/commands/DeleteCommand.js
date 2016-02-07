"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require("./Command");
var DeleteCommand = (function (_super) {
    __extends(DeleteCommand, _super);
    function DeleteCommand(id, requestId, sessionId, type, elementId) {
        _super.call(this, id, requestId, sessionId, type);
        this.elementId = elementId;
    }
    return DeleteCommand;
}(Command_1.Command));
exports.DeleteCommand = DeleteCommand;
