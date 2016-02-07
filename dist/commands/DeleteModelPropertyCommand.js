"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeletePropertyCommand_1 = require("./DeletePropertyCommand");
var CommandType_1 = require("../CommandType");
var DeleteModelPropertyCommand = (function (_super) {
    __extends(DeleteModelPropertyCommand, _super);
    function DeleteModelPropertyCommand(id, requestId, sessionId, elementId, propertyName) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteModelProperty, elementId, propertyName);
    }
    DeleteModelPropertyCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new DeleteModelPropertyCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['propertyName'].toString());
    };
    return DeleteModelPropertyCommand;
}(DeletePropertyCommand_1.DeletePropertyCommand));
exports.DeleteModelPropertyCommand = DeleteModelPropertyCommand;
