import * as Common from "cubitt-common";
import { CommandType } from "./CommandType";
import { Command } from "./commands/Command";
import { AddConnectorCommand } from "./commands/AddConnectorCommand";
import { AddEdgeCommand } from "./commands/AddEdgeCommand";
import { AddModelCommand } from "./commands/AddModelCommand";
import { AddNodeCommand } from "./commands/AddNodeCommand";
import { DeleteConnectorCommand } from "./commands/DeleteConnectorCommand";
import { DeleteEdgeCommand } from "./commands/DeleteEdgeCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteNodeCommand } from "./commands/DeleteNodeCommand";
import { DeleteConnectorPropertyCommand } from "./commands/DeleteConnectorPropertyCommand";
import { DeleteEdgePropertyCommand } from "./commands/DeleteEdgePropertyCommand";
import { DeleteModelPropertyCommand } from "./commands/DeleteModelPropertyCommand";
import { DeleteNodePropertyCommand } from "./commands/DeleteNodePropertyCommand";
import { SetConnectorPropertyCommand } from "./commands/SetConnectorPropertyCommand";
import { SetEdgePropertyCommand } from "./commands/SetEdgePropertyCommand";
import { SetModelPropertyCommand } from "./commands/SetModelPropertyCommand";
import { SetNodePropertyCommand } from "./commands/SetNodePropertyCommand";
export declare class CommandFactory {
    static parse(jsonObject: Object): Command;
    protected static parseAddConnectorCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): AddConnectorCommand;
    protected static parseAddEdgeCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): AddEdgeCommand;
    protected static parseAddModelCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): AddModelCommand;
    protected static parseAddNodeCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): AddNodeCommand;
    protected static parseDeleteConnectorCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteConnectorCommand;
    protected static parseDeleteEdgeCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteEdgeCommand;
    protected static parseDeleteModelCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteModelCommand;
    protected static parseDeleteNodeCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteNodeCommand;
    protected static parseDeleteConnectorPropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteConnectorPropertyCommand;
    protected static parseDeleteEdgePropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteEdgePropertyCommand;
    protected static parseDeleteModelPropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteModelPropertyCommand;
    protected static parseDeleteNodePropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): DeleteNodePropertyCommand;
    protected static parseSetConnectorPropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): SetConnectorPropertyCommand;
    protected static parseSetEdgePropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): SetEdgePropertyCommand;
    protected static parseSetModelPropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): SetModelPropertyCommand;
    protected static parseSetNodePropertyCommand(jsonObject: Object, keys: Common.Dictionary<ValidationType>): SetNodePropertyCommand;
    protected static validateObject(object: Object, keysWithType: Common.Dictionary<ValidationType>): void;
    protected static parseProperties(properties: Object): Common.Dictionary<any>;
    protected static getCommandType(type: string): CommandType;
}
export declare enum ValidationType {
    Guid = 0,
    String = 1,
    Properties = 2,
    Any = 3,
}
