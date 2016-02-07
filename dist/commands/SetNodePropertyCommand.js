"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SetPropertyCommand_1 = require("./SetPropertyCommand");
var CommandType_1 = require("../CommandType");
var SetNodePropertyCommand = (function (_super) {
    __extends(SetNodePropertyCommand, _super);
    function SetNodePropertyCommand(id, requestId, sessionId, elementId, propertyName, propertyValue) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.SetConnectorProperty, elementId, propertyName, propertyValue);
    }
    SetNodePropertyCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new SetNodePropertyCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['propertyName'].toString(), obj['propertyValue']);
    };
    return SetNodePropertyCommand;
}(SetPropertyCommand_1.SetPropertyCommand));
exports.SetNodePropertyCommand = SetNodePropertyCommand;
