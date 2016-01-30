"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require("./Command");
var SetPropertyCommand = (function (_super) {
    __extends(SetPropertyCommand, _super);
    function SetPropertyCommand(id, requestId, sessionId, type, elementId, propertyName, propertyValue) {
        _super.call(this, id, requestId, sessionId, type);
        this.elementId = elementId;
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
    return SetPropertyCommand;
}(Command_1.Command));
exports.SetPropertyCommand = SetPropertyCommand;
