"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeleteCommand_1 = require("./DeleteCommand");
var CommandType_1 = require("../CommandType");
var DeleteModelCommand = (function (_super) {
    __extends(DeleteModelCommand, _super);
    function DeleteModelCommand(id, requestId, sessionId, elementId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteConnector, elementId);
    }
    DeleteModelCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new DeleteModelCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId']);
    };
    return DeleteModelCommand;
}(DeleteCommand_1.DeleteCommand));
exports.DeleteModelCommand = DeleteModelCommand;
