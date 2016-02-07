"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Common = require("cubitt-common");
var Command_1 = require("./Command");
var AddCommand = (function (_super) {
    __extends(AddCommand, _super);
    function AddCommand(id, requestId, sessionId, type, elementId, elementType, elementProperties) {
        _super.call(this, id, requestId, sessionId, type);
        this.elementId = elementId;
        this.elementType = elementType;
        this.elementProperties = elementProperties;
    }
    AddCommand.prototype.parseCommand = function (jsonObject) {
        var obj = _super.prototype.parseCommand.call(this, jsonObject);
        if (jsonObject['elementId'] == undefined) {
            throw new Error("Element Identifier is missing");
        }
        var elementId = Common.Guid.parse(jsonObject['elementId']);
        if (elementId == null) {
            throw new Error("Invalid Element Identifier format");
        }
        if (jsonObject['elementType'] == undefined || jsonObject['elementType'].toString().trim().length == 0) {
            throw new Error("Element Type is missing or empty");
        }
        var elementType = jsonObject['elementType'];
        var properties = {};
        if (jsonObject['properties'] != undefined) {
            properties = jsonObject['properties'];
            delete properties["type"];
        }
        obj["elementId"] = elementId;
        obj["elementType"] = elementType;
        obj["properties"] = properties;
        return obj;
    };
    return AddCommand;
}(Command_1.Command));
exports.AddCommand = AddCommand;
