"use strict";
var Common = require("cubitt-common");
var CommandType_1 = require("./CommandType");
var AddConnectorCommand_1 = require("./commands/AddConnectorCommand");
var AddEdgeCommand_1 = require("./commands/AddEdgeCommand");
var AddModelCommand_1 = require("./commands/AddModelCommand");
var AddNodeCommand_1 = require("./commands/AddNodeCommand");
var DeleteConnectorCommand_1 = require("./commands/DeleteConnectorCommand");
var DeleteEdgeCommand_1 = require("./commands/DeleteEdgeCommand");
var DeleteModelCommand_1 = require("./commands/DeleteModelCommand");
var DeleteNodeCommand_1 = require("./commands/DeleteNodeCommand");
var DeleteConnectorPropertyCommand_1 = require("./commands/DeleteConnectorPropertyCommand");
var DeleteEdgePropertyCommand_1 = require("./commands/DeleteEdgePropertyCommand");
var DeleteModelPropertyCommand_1 = require("./commands/DeleteModelPropertyCommand");
var DeleteNodePropertyCommand_1 = require("./commands/DeleteNodePropertyCommand");
var SetConnectorPropertyCommand_1 = require("./commands/SetConnectorPropertyCommand");
var SetEdgePropertyCommand_1 = require("./commands/SetEdgePropertyCommand");
var SetModelPropertyCommand_1 = require("./commands/SetModelPropertyCommand");
var SetNodePropertyCommand_1 = require("./commands/SetNodePropertyCommand");
var CommandFactory = (function () {
    function CommandFactory() {
    }
    CommandFactory.parse = function (jsonObject) {
        if (jsonObject == undefined) {
            throw new Error("Empty command");
        }
        var typeString = jsonObject['type'];
        if (typeString == undefined) {
            throw new Error("Missing command type");
        }
        var type = CommandFactory.getCommandType(typeString);
        var keys = {
            id: ValidationType.Guid,
            requestId: ValidationType.Guid,
            sessionId: ValidationType.Guid
        };
        switch (type) {
            case CommandType_1.CommandType.AddConnector:
                return CommandFactory.parseAddConnectorCommand(jsonObject, keys);
            case CommandType_1.CommandType.AddEdge:
                return CommandFactory.parseAddEdgeCommand(jsonObject, keys);
            case CommandType_1.CommandType.AddModel:
                return CommandFactory.parseAddModelCommand(jsonObject, keys);
            case CommandType_1.CommandType.AddNode:
                return CommandFactory.parseAddNodeCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteConnector:
                return CommandFactory.parseDeleteConnectorCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteEdge:
                return CommandFactory.parseDeleteEdgeCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteModel:
                return CommandFactory.parseDeleteModelCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteNode:
                return CommandFactory.parseDeleteNodeCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteConnectorProperty:
                return CommandFactory.parseDeleteConnectorPropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteEdgeProperty:
                return CommandFactory.parseDeleteEdgePropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteModelProperty:
                return CommandFactory.parseDeleteModelPropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.DeleteNodeProperty:
                return CommandFactory.parseDeleteNodePropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.SetConnectorProperty:
                return CommandFactory.parseSetConnectorPropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.SetEdgeProperty:
                return CommandFactory.parseSetEdgePropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.SetModelProperty:
                return CommandFactory.parseSetModelPropertyCommand(jsonObject, keys);
            case CommandType_1.CommandType.SetNodeProperty:
                return CommandFactory.parseSetNodePropertyCommand(jsonObject, keys);
        }
        throw new Error("Invalid state");
    };
    CommandFactory.parseAddConnectorCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["nodeId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys);
        return new AddConnectorCommand_1.AddConnectorCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject['elementType'].toString(), properties, Common.Guid.parse(jsonObject['nodeId']));
    };
    CommandFactory.parseAddEdgeCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["modelId"] = ValidationType.Guid;
        keys["startConnectorId"] = ValidationType.Guid;
        keys["endConnectorId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys);
        return new AddEdgeCommand_1.AddEdgeCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject['elementType'].toString(), properties, Common.Guid.parse(jsonObject['modelId']), Common.Guid.parse(jsonObject['startConnectorId']), Common.Guid.parse(jsonObject['endConnectorId']));
    };
    CommandFactory.parseAddModelCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys);
        return new AddModelCommand_1.AddModelCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject['elementType'].toString(), properties);
    };
    CommandFactory.parseAddNodeCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["modelId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys);
        return new AddNodeCommand_1.AddNodeCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject['elementType'].toString(), properties, Common.Guid.parse(jsonObject['modelId']));
    };
    CommandFactory.parseDeleteConnectorCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteConnectorCommand_1.DeleteConnectorCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']));
    };
    CommandFactory.parseDeleteEdgeCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteEdgeCommand_1.DeleteEdgeCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']));
    };
    CommandFactory.parseDeleteModelCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteModelCommand_1.DeleteModelCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']));
    };
    CommandFactory.parseDeleteNodeCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteNodeCommand_1.DeleteNodeCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']));
    };
    CommandFactory.parseDeleteConnectorPropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteConnectorPropertyCommand_1.DeleteConnectorPropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString());
    };
    CommandFactory.parseDeleteEdgePropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteEdgePropertyCommand_1.DeleteEdgePropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString());
    };
    CommandFactory.parseDeleteModelPropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteModelPropertyCommand_1.DeleteModelPropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString());
    };
    CommandFactory.parseDeleteNodePropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys);
        return new DeleteNodePropertyCommand_1.DeleteNodePropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString());
    };
    CommandFactory.parseSetConnectorPropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys);
        return new SetConnectorPropertyCommand_1.SetConnectorPropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString(), jsonObject["propertyValue"]);
    };
    CommandFactory.parseSetEdgePropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys);
        return new SetEdgePropertyCommand_1.SetEdgePropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString(), jsonObject["propertyValue"]);
    };
    CommandFactory.parseSetModelPropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys);
        return new SetModelPropertyCommand_1.SetModelPropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString(), jsonObject["propertyValue"]);
    };
    CommandFactory.parseSetNodePropertyCommand = function (jsonObject, keys) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys);
        return new SetNodePropertyCommand_1.SetNodePropertyCommand(Common.Guid.parse(jsonObject['id']), Common.Guid.parse(jsonObject['requestId']), Common.Guid.parse(jsonObject['sessionId']), Common.Guid.parse(jsonObject['elementId']), jsonObject["propertyName"].toString(), jsonObject["propertyValue"]);
    };
    CommandFactory.validateObject = function (object, keysWithType) {
        for (var key in keysWithType) {
            var type = keysWithType[key];
            var val = object[key];
            if (val == undefined) {
                throw new Error("Missing " + key);
            }
            switch (type) {
                case ValidationType.Guid:
                    var guid = Common.Guid.parse(val);
                    if (guid == null) {
                        throw new Error(key + " is not a valid GUID");
                    }
                    break;
                case ValidationType.String:
                    if (val.toString().trim().length == 0) {
                        throw new Error(key + " is missing or empty");
                    }
                    break;
                case ValidationType.Any:
                    break;
            }
        }
    };
    CommandFactory.parseProperties = function (properties) {
        if (properties == undefined) {
            return {};
        }
        if (properties['type'] != undefined) {
            delete properties['type'];
        }
        return properties;
    };
    CommandFactory.getCommandType = function (type) {
        var t = type.toLowerCase();
        switch (t) {
            case "addconnector":
                return CommandType_1.CommandType.AddConnector;
            case "addedge":
                return CommandType_1.CommandType.AddEdge;
            case "addmodel":
                return CommandType_1.CommandType.AddModel;
            case "addnode":
                return CommandType_1.CommandType.AddNode;
            case "deleteconnector":
                return CommandType_1.CommandType.DeleteConnector;
            case "deleteedge":
                return CommandType_1.CommandType.DeleteEdge;
            case "deletemodel":
                return CommandType_1.CommandType.DeleteModel;
            case "deletenode":
                return CommandType_1.CommandType.DeleteNode;
            case "setconnectorproperty":
                return CommandType_1.CommandType.SetConnectorProperty;
            case "setedgeproperty":
                return CommandType_1.CommandType.SetEdgeProperty;
            case "setmodelproperty":
                return CommandType_1.CommandType.SetModelProperty;
            case "setnodeproperty":
                return CommandType_1.CommandType.SetNodeProperty;
            case "deleteconnectorproperty":
                return CommandType_1.CommandType.DeleteConnectorProperty;
            case "deleteedgeproperty":
                return CommandType_1.CommandType.DeleteEdgeProperty;
            case "deletemodelproperty":
                return CommandType_1.CommandType.DeleteModelProperty;
            case "deletenodeproperty":
                return CommandType_1.CommandType.DeleteNodeProperty;
            default:
                throw new Error("Invalid CommandType");
        }
    };
    return CommandFactory;
}());
exports.CommandFactory = CommandFactory;
(function (ValidationType) {
    ValidationType[ValidationType["Guid"] = 0] = "Guid";
    ValidationType[ValidationType["String"] = 1] = "String";
    ValidationType[ValidationType["Properties"] = 2] = "Properties";
    ValidationType[ValidationType["Any"] = 3] = "Any";
})(exports.ValidationType || (exports.ValidationType = {}));
var ValidationType = exports.ValidationType;
