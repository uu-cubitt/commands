"use strict";
(function (CommandType) {
    CommandType[CommandType["AddConnector"] = 0] = "AddConnector";
    CommandType[CommandType["AddEdge"] = 1] = "AddEdge";
    CommandType[CommandType["AddModel"] = 2] = "AddModel";
    CommandType[CommandType["AddNode"] = 3] = "AddNode";
    CommandType[CommandType["DeleteConnector"] = 4] = "DeleteConnector";
    CommandType[CommandType["DeleteEdge"] = 5] = "DeleteEdge";
    CommandType[CommandType["DeleteModel"] = 6] = "DeleteModel";
    CommandType[CommandType["DeleteNode"] = 7] = "DeleteNode";
    CommandType[CommandType["SetConnectorProperty"] = 8] = "SetConnectorProperty";
    CommandType[CommandType["SetEdgeProperty"] = 9] = "SetEdgeProperty";
    CommandType[CommandType["SetModelProperty"] = 10] = "SetModelProperty";
    CommandType[CommandType["SetNodeProperty"] = 11] = "SetNodeProperty";
    CommandType[CommandType["DeleteConnectorProperty"] = 12] = "DeleteConnectorProperty";
    CommandType[CommandType["DeleteEdgeProperty"] = 13] = "DeleteEdgeProperty";
    CommandType[CommandType["DeleteModelProperty"] = 14] = "DeleteModelProperty";
    CommandType[CommandType["DeleteNodeProperty"] = 15] = "DeleteNodeProperty";
})(exports.CommandType || (exports.CommandType = {}));
var CommandType = exports.CommandType;
var CommandTypes = (function () {
    function CommandTypes() {
    }
    CommandTypes.fromString = function (com) {
        var com = com.toLowerCase();
        switch (com) {
            case "addconnector":
                return CommandType.AddConnector;
            case "addedge":
                return CommandType.AddEdge;
            case "addmodel":
                return CommandType.AddModel;
            case "addnode":
                return CommandType.AddNode;
            case "deleteconnector":
                return CommandType.DeleteConnector;
            case "deleteedge":
                return CommandType.DeleteEdge;
            case "deletemodel":
                return CommandType.DeleteModel;
            case "deletenode":
                return CommandType.DeleteNode;
            case "setconnectorproperty":
                return CommandType.SetConnectorProperty;
            case "setedgeproperty":
                return CommandType.SetEdgeProperty;
            case "setmodelproperty":
                return CommandType.SetModelProperty;
            case "setnodeproperty":
                return CommandType.SetNodeProperty;
            case "deleteconnectorproperty":
                return CommandType.DeleteConnectorProperty;
            case "deleteedgeproperty":
                return CommandType.DeleteEdgeProperty;
            case "deletemodelproperty":
                return CommandType.DeleteModelProperty;
            case "deletenodeproperty":
                return CommandType.DeleteNodeProperty;
            default:
                throw new Error("Invalid CommandType");
        }
    };
    return CommandTypes;
}());
exports.CommandTypes = CommandTypes;
