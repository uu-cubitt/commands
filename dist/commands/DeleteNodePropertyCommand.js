"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeletePropertyCommand_1 = require("./DeletePropertyCommand");
var CommandType_1 = require("../CommandType");
var DeleteNodePropertyCommand = (function (_super) {
    __extends(DeleteNodePropertyCommand, _super);
    function DeleteNodePropertyCommand(id, requestId, sessionId, elementId, propertyName) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteNodeProperty, elementId, propertyName);
    }
    return DeleteNodePropertyCommand;
}(DeletePropertyCommand_1.DeletePropertyCommand));
exports.DeleteNodePropertyCommand = DeleteNodePropertyCommand;
