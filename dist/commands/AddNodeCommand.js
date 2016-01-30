"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddCommand_1 = require("./AddCommand");
var CommandType_1 = require("../CommandType");
var AddNodeCommand = (function (_super) {
    __extends(AddNodeCommand, _super);
    function AddNodeCommand(id, requestId, sessionId, elementId, elementType, elementProperties, modelId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.AddNode, elementId, elementType, elementProperties);
        this.modelId = modelId;
    }
    return AddNodeCommand;
}(AddCommand_1.AddCommand));
exports.AddNodeCommand = AddNodeCommand;
