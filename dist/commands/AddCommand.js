"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require("./Command");
var AddCommand = (function (_super) {
    __extends(AddCommand, _super);
    function AddCommand(id, requestId, sessionId, type, elementId, elementType, elementProperties) {
        _super.call(this, id, requestId, sessionId, type);
        this.elementId = elementId;
        this.elementType = elementType;
        this.elementProperties = elementProperties;
    }
    return AddCommand;
}(Command_1.Command));
exports.AddCommand = AddCommand;
