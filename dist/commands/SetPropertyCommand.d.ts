import * as Common from "cubitt-common";
import { Command } from "./Command";
import { CommandType } from "../CommandType";
export declare abstract class SetPropertyCommand extends Command {
    elementId: Common.Guid;
    propertyName: string;
    propertyValue: any;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType, elementId: Common.Guid, propertyName: string, propertyValue: any);
    protected parseCommand(jsonObject: Object): Object;
}
