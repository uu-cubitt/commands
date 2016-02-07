"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SetPropertyCommand_1 = require("./SetPropertyCommand");
var CommandType_1 = require("../CommandType");
var SetModelPropertyCommand = (function (_super) {
    __extends(SetModelPropertyCommand, _super);
    function SetModelPropertyCommand(id, requestId, sessionId, elementId, propertyName, propertyValue) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.SetConnectorProperty, elementId, propertyName, propertyValue);
    }
    SetModelPropertyCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new SetModelPropertyCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['propertyName'].toString(), obj['propertyValue']);
    };
    return SetModelPropertyCommand;
}(SetPropertyCommand_1.SetPropertyCommand));
exports.SetModelPropertyCommand = SetModelPropertyCommand;
