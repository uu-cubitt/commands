"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddCommand_1 = require("./AddCommand");
var CommandType_1 = require("../CommandType");
var AddEdgeCommand = (function (_super) {
    __extends(AddEdgeCommand, _super);
    function AddEdgeCommand(id, requestId, sessionId, elementId, elementType, elementProperties, modelId, startConnectorId, endConnectorId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.AddEdge, elementId, elementType, elementProperties);
        this.modelId = modelId;
        this.startConnectorId = startConnectorId;
        this.endConnectorId = endConnectorId;
    }
    return AddEdgeCommand;
}(AddCommand_1.AddCommand));
exports.AddEdgeCommand = AddEdgeCommand;
