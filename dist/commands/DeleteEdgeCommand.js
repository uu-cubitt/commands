"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeleteCommand_1 = require("./DeleteCommand");
var CommandType_1 = require("../CommandType");
var DeleteEdgeCommand = (function (_super) {
    __extends(DeleteEdgeCommand, _super);
    function DeleteEdgeCommand(id, requestId, sessionId, elementId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.DeleteConnector, elementId);
    }
    return DeleteEdgeCommand;
}(DeleteCommand_1.DeleteCommand));
exports.DeleteEdgeCommand = DeleteEdgeCommand;
