"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SetPropertyCommand_1 = require("./SetPropertyCommand");
var CommandType_1 = require("../CommandType");
var SetEdgePropertyCommand = (function (_super) {
    __extends(SetEdgePropertyCommand, _super);
    function SetEdgePropertyCommand(id, requestId, sessionId, type, elementId, propertyName, propertyValue) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.SetConnectorProperty, elementId, propertyName, propertyValue);
    }
    return SetEdgePropertyCommand;
}(SetPropertyCommand_1.SetPropertyCommand));
exports.SetEdgePropertyCommand = SetEdgePropertyCommand;
