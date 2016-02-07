"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Common = require("cubitt-common");
var AddCommand_1 = require("./AddCommand");
var CommandType_1 = require("../CommandType");
var AddNodeCommand = (function (_super) {
    __extends(AddNodeCommand, _super);
    function AddNodeCommand(id, requestId, sessionId, elementId, elementType, elementProperties, modelId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.AddNode, elementId, elementType, elementProperties);
        this.modelId = modelId;
    }
    AddNodeCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        if (jsonObject['modelId'] == undefined) {
            throw new Error("Model Identifier is missing");
        }
        var modelId = Common.Guid.parse(jsonObject['modelId']);
        if (modelId == null) {
            throw new Error("Invalid ModelId Identifier format");
        }
        return new AddNodeCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['elementType'].toString(), obj['properties'], modelId);
    };
    return AddNodeCommand;
}(AddCommand_1.AddCommand));
exports.AddNodeCommand = AddNodeCommand;
