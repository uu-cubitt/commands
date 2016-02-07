import * as Common from "cubitt-common";

import {CommandType} from "./CommandType";
import {Command} from "./commands/Command";
import {AddCommand} from "./commands/AddCommand";
import {DeleteCommand} from "./commands/DeleteCommand";
import {SetPropertyCommand} from "./commands/SetPropertyCommand";
import {DeletePropertyCommand} from "./commands/DeletePropertyCommand";
import {AddConnectorCommand} from "./commands/AddConnectorCommand";
import {AddEdgeCommand} from "./commands/AddEdgeCommand";
import {AddModelCommand} from "./commands/AddModelCommand";
import {AddNodeCommand} from "./commands/AddNodeCommand";
import {DeleteConnectorCommand} from "./commands/DeleteConnectorCommand";
import {DeleteEdgeCommand} from "./commands/DeleteEdgeCommand";
import {DeleteModelCommand} from "./commands/DeleteModelCommand";
import {DeleteNodeCommand} from "./commands/DeleteNodeCommand";
import {DeleteConnectorPropertyCommand} from "./commands/DeleteConnectorPropertyCommand";
import {DeleteEdgePropertyCommand} from "./commands/DeleteEdgePropertyCommand";
import {DeleteModelPropertyCommand} from "./commands/DeleteModelPropertyCommand";
import {DeleteNodePropertyCommand} from "./commands/DeleteNodePropertyCommand";
import {SetConnectorPropertyCommand} from "./commands/SetConnectorPropertyCommand";
import {SetEdgePropertyCommand} from "./commands/SetEdgePropertyCommand";
import {SetModelPropertyCommand} from "./commands/SetModelPropertyCommand";
import {SetNodePropertyCommand} from "./commands/SetNodePropertyCommand";

/**
 * Factory for creation of Commands from JSON objects
 *
 */
export class CommandFactory {

    public static parse(jsonObject: Object) : Command {
        if (jsonObject == undefined) {
            throw new Error("Empty command");
        }
        //Get the CommandType
        var typeString = jsonObject['type'];
        if (typeString == undefined) {
            throw new Error("Missing command type");
        }
        var type = CommandFactory.getCommandType(typeString);

        var keys : Common.Dictionary<ValidationType> = {
            id : ValidationType.Guid,
            requestId: ValidationType.Guid,
            sessionId: ValidationType.Guid
        }

        switch(type) {
            case CommandType.AddConnector:
                return CommandFactory.parseAddConnectorCommand(jsonObject, keys);
            case CommandType.AddEdge:
                return CommandFactory.parseAddEdgeCommand(jsonObject,keys);
            case CommandType.AddModel:
                return CommandFactory.parseAddModelCommand(jsonObject, keys);
            case CommandType.AddNode:
                return CommandFactory.parseAddNodeCommand(jsonObject, keys);
            case CommandType.DeleteConnector:
                return CommandFactory.parseDeleteConnectorCommand(jsonObject, keys);
            case CommandType.DeleteEdge:
                return CommandFactory.parseDeleteEdgeCommand(jsonObject, keys);
            case CommandType.DeleteModel:
                return CommandFactory.parseDeleteModelCommand(jsonObject, keys);
            case CommandType.DeleteNode:
                return CommandFactory.parseDeleteNodeCommand(jsonObject, keys);
            case CommandType.DeleteConnectorProperty:
                return CommandFactory.parseDeleteConnectorPropertyCommand(jsonObject, keys);
            case CommandType.DeleteEdgeProperty:
                return CommandFactory.parseDeleteEdgePropertyCommand(jsonObject, keys);
            case CommandType.DeleteModelProperty:
                return CommandFactory.parseDeleteModelPropertyCommand(jsonObject, keys);
            case CommandType.DeleteNodeProperty:
                return CommandFactory.parseDeleteNodePropertyCommand(jsonObject, keys);
            case CommandType.SetConnectorProperty:
                return CommandFactory.parseSetConnectorPropertyCommand(jsonObject, keys);
            case CommandType.SetEdgeProperty:
                return CommandFactory.parseSetEdgePropertyCommand(jsonObject, keys);
            case CommandType.SetModelProperty:
                return CommandFactory.parseSetModelPropertyCommand(jsonObject, keys);
            case CommandType.SetNodeProperty:
                return CommandFactory.parseSetNodePropertyCommand(jsonObject, keys);
        }
        throw new Error("Invalid state");
    }

    /**
     * Attempts to create an AddConnectorCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseAddConnectorCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["nodeId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new AddConnectorCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject['elementType'].toString(),
            properties,
            Common.Guid.parse(jsonObject['nodeId'])
        );
    }

    /**
     * Attempts to create an addEdgeCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseAddEdgeCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["modelId"] = ValidationType.Guid;
        keys["startConnectorId"] = ValidationType.Guid;
        keys["endConnectorId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new AddEdgeCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject['elementType'].toString(),
            properties,
            Common.Guid.parse(jsonObject['modelId']),
            Common.Guid.parse(jsonObject['startConnectorId']),
            Common.Guid.parse(jsonObject['endConnectorId'])
        );
    }

    /**
     * Attempts to create an addModelCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseAddModelCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new AddModelCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject['elementType'].toString(),
            properties
        );
    }

    /**
     * Attempts to create an AddNodeCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseAddNodeCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["elementType"] = ValidationType.String;
        keys["modelId"] = ValidationType.Guid;
        var properties = CommandFactory.parseProperties(jsonObject['properties']);
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new AddNodeCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject['elementType'].toString(),
            properties,
            Common.Guid.parse(jsonObject['modelId'])
        );
    }

    /**
     * Attempts to create an DeleteConnectorCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteConnectorCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteConnectorCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId'])
        );
    }

    /**
     * Attempts to create an DeleteEdgeCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteEdgeCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteEdgeCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId'])
        );
    }

    /**
     * Attempts to create an DeleteModelCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteModelCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteModelCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId'])
        );
    }

    /**
     * Attempts to create an DeleteNodeCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteNodeCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteNodeCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId'])
        );
    }

    /**
     * Attempts to create a DeleteConnectorPropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteConnectorPropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteConnectorPropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString()
        );
    }

    /**
     * Attempts to create a DeleteEdgePropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteEdgePropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteEdgePropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString()
        );
    }

    /**
     * Attempts to create a DeleteModelPropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteModelPropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteModelPropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString()
        );
    }

    /**
     * Attempts to create a DeleteNodePropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseDeleteNodePropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new DeleteNodePropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString()
        );
    }

    /**
     * Attempts to create a SetConnectorPropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseSetConnectorPropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new SetConnectorPropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString(),
            jsonObject["propertyValue"]
        );
    }

    /**
     * Attempts to create a SetEdgePropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseSetEdgePropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new SetEdgePropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString(),
            jsonObject["propertyValue"]
        );
    }

    /**
     * Attempts to create a SetModelPropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseSetModelPropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new SetModelPropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString(),
            jsonObject["propertyValue"]
        );
    }

    /**
     * Attempts to create a SetNodePropertyCommand
     *
     * @param jsonObject JSON Object representing the Command
     * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes
     */
    protected static parseSetNodePropertyCommand(jsonObject : Object, keys : Common.Dictionary<ValidationType>) {
        keys["elementId"] = ValidationType.Guid;
        keys["propertyName"] = ValidationType.String;
        keys["propertyValue"] = ValidationType.Any;
        CommandFactory.validateObject(jsonObject, keys)
        // No Errors thrown, so return the command
        return new SetNodePropertyCommand(
            Common.Guid.parse(jsonObject['id']),
            Common.Guid.parse(jsonObject['requestId']),
            Common.Guid.parse(jsonObject['sessionId']),
            Common.Guid.parse(jsonObject['elementId']),
            jsonObject["propertyName"].toString(),
            jsonObject["propertyValue"]
        );
    }

    /**
     * Validates the keys of the passed objects against the passed ValidationTypes
     *
     * @param object Object that should be validated
     * @param keysWithType Dictionary of the keys that will be validated, with as value the type of validation
     */
    protected static validateObject(object: Object, keysWithType: Common.Dictionary<ValidationType>) {
        for (var key in keysWithType) {
            var type = keysWithType[key];
            var val = object[key];
            if (val == undefined) {
                throw new Error("Missing " + key);
            }
            switch(type) {
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
                    break; //Nothing to validate, it is not undefined so it is right
            }
        }
    }


    /**
     * Parses a properties object and returns a valid properties object
     *
     * @param properties
     */
     protected static parseProperties(properties: Object) : Common.Dictionary<any> {
         if (properties == undefined) {
             return {};
         }
         if (properties['type'] != undefined) {
             delete properties['type'];
         }
         return properties;
     }

    /**
     * Attempts to create a CommandType from a string
     *
     * @param type string containing a CommandType text
     */
    protected static getCommandType(type: string) : CommandType {
        var t  = type.toLowerCase();
		switch(t) {
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
    }

}

export enum ValidationType {
    Guid,
    String,
    Properties,
    Any
}
