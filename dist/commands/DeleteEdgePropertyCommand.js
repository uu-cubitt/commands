"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeletePropertyCommand_1 = require("./DeletePropertyCommand");
var CommandType_1 = require("../CommandType");
var DeleteEdgePropertyCommand = (function (_super) {
    __extends(DeleteEdgePropertyCommand, _super);
    function DeleteEdgePropertyCommand(id, requestId, sessionId, elementId, propertyName) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteEdgeProperty, elementId, propertyName);
    }
    DeleteEdgePropertyCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new DeleteEdgePropertyCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['propertyName'].toString());
    };
    return DeleteEdgePropertyCommand;
}(DeletePropertyCommand_1.DeletePropertyCommand));
exports.DeleteEdgePropertyCommand = DeleteEdgePropertyCommand;
