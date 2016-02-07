"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddCommand_1 = require("./AddCommand");
var CommandType_1 = require("../CommandType");
var AddConnectorCommand = (function (_super) {
    __extends(AddConnectorCommand, _super);
    function AddConnectorCommand(id, requestId, sessionId, elementId, elementType, elementProperties, nodeId) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.AddConnector, elementId, elementType, elementProperties);
        this.nodeId = nodeId;
    }
    return AddConnectorCommand;
}(AddCommand_1.AddCommand));
exports.AddConnectorCommand = AddConnectorCommand;
