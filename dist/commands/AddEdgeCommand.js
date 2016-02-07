"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Common = require("cubitt-common");
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
    AddEdgeCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        if (jsonObject['modelId'] == undefined) {
            throw new Error("Model Identifier is missing");
        }
        var modelId = Common.Guid.parse(jsonObject['modelId']);
        if (modelId == null) {
            throw new Error("Invalid ModelId Identifier format");
        }
        if (jsonObject['startConnectorId'] == undefined) {
            throw new Error("StartConnector Identifier is missing");
        }
        var startConnectorId = Common.Guid.parse(jsonObject['startConnectorId']);
        if (startConnectorId == null) {
            throw new Error("Invalid StartConnector Identifier format");
        }
        if (jsonObject['endConnectorId'] == undefined) {
            throw new Error("EndConnector Identifier is missing");
        }
        var endConnectorId = Common.Guid.parse(jsonObject['endConnectorId']);
        if (endConnectorId == null) {
            throw new Error("Invalid EndConnector Identifier format");
        }
        return new AddEdgeCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['elementType'].toString(), obj['properties'], modelId, startConnectorId, endConnectorId);
    };
    return AddEdgeCommand;
}(AddCommand_1.AddCommand));
exports.AddEdgeCommand = AddEdgeCommand;
