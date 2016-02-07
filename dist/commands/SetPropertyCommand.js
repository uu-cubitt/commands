"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Common = require("cubitt-common");
var Command_1 = require("./Command");
var SetPropertyCommand = (function (_super) {
    __extends(SetPropertyCommand, _super);
    function SetPropertyCommand(id, requestId, sessionId, type, elementId, propertyName, propertyValue) {
        _super.call(this, id, requestId, sessionId, type);
        this.elementId = elementId;
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
    SetPropertyCommand.prototype.parseCommand = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        if (jsonObject['elementId'] == undefined) {
            throw new Error("Element Identifier is missing");
        }
        var elementId = Common.Guid.parse(jsonObject['elementId']);
        if (elementId == null) {
            throw new Error("Invalid Element Identifier format");
        }
        obj['elementId'] = elementId;
        if (jsonObject['propertyName'] == undefined || jsonObject['propertyName'].toString().trim().length == 0) {
            throw new Error("Property Name is missing or empty");
        }
        obj['propertyName'] = jsonObject['propertyName'];
        if (jsonObject['propertyValue'] == undefined) {
            throw new Error("Property value is missing");
        }
        obj['propertyValue'] = jsonObject['propertyValue'];
        return obj;
    };
    return SetPropertyCommand;
}(Command_1.Command));
exports.SetPropertyCommand = SetPropertyCommand;
