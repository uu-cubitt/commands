"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeletePropertyCommand_1 = require("./DeletePropertyCommand");
var CommandType_1 = require("../CommandType");
var DeleteConnectorPropertyCommand = (function (_super) {
    __extends(DeleteConnectorPropertyCommand, _super);
    function DeleteConnectorPropertyCommand(id, requestId, sessionId, elementId, propertyName) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteConnectorProperty, elementId, propertyName);
    }
    DeleteConnectorPropertyCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new DeleteConnectorPropertyCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['propertyName'].toString());
    };
    return DeleteConnectorPropertyCommand;
}(DeletePropertyCommand_1.DeletePropertyCommand));
exports.DeleteConnectorPropertyCommand = DeleteConnectorPropertyCommand;
