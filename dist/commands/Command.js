"use strict";
var Common = require("cubitt-common");
var CommandType_1 = require("../CommandType");
var Command = (function () {
    function Command(id, requestId, sessionId, type) {
        this.id = id;
        this.requestId = requestId;
        this.sessionId = sessionId;
        this.type = type;
    }
    Command.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    Command.prototype.parseCommand = function (jsonObject) {
        if (jsonObject == undefined) {
            throw new Error("Empty command");
        }
        if (jsonObject['id'] == undefined) {
            throw new Error("Command Identifier is missing");
        }
        var guid = Common.Guid.parse(jsonObject['id']);
        if (guid == null) {
            throw new Error("Invalid Command Identifier format");
        }
        if (jsonObject['requestId'] == undefined) {
            throw new Error("Request Identifier is missing");
        }
        var requestId = Common.Guid.parse(jsonObject['requestId']);
        if (requestId == null) {
            throw new Error("Invalid Request Identifier format");
        }
        if (jsonObject['sessionId'] == undefined) {
            throw new Error("Session Identifier is missing");
        }
        var sessionId = Common.Guid.parse(jsonObject['sessionId']);
        if (sessionId == null) {
            throw new Error("Invalid Session Identifier format");
        }
        if (jsonObject['type'] == undefined) {
            throw new Error("Invalid Command Type");
        }
        var type = CommandType_1.CommandTypes.fromString(jsonObject['type']);
        return {
            id: guid,
            requestId: requestId,
            sessionId: sessionId
        };
    };
    return Command;
}());
exports.Command = Command;
