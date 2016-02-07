"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddCommand_1 = require("./AddCommand");
var CommandType_1 = require("../CommandType");
var AddModelCommand = (function (_super) {
    __extends(AddModelCommand, _super);
    function AddModelCommand(id, requestId, sessionId, elementId, elementType, elementProperties) {
        _super.call(this, id, requestId, sessionId, CommandType_1.CommandType.AddModel, elementId, elementType, elementProperties);
    }
    AddModelCommand.prototype.parse = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        return new AddModelCommand(obj['id'], obj['requestId'], obj['sessionId'], obj['elementId'], obj['elementType'].toString(), obj['properties']);
    };
    return AddModelCommand;
}(AddCommand_1.AddCommand));
exports.AddModelCommand = AddModelCommand;
