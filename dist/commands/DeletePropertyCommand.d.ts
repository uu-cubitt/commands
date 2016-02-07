import * as Common from "cubitt-common";
import { Command } from "./Command";
import { CommandType } from "../CommandType";
export declare abstract class DeletePropertyCommand extends Command {
    elementId: Common.Guid;
    propertyName: string;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType, elementId: Common.Guid, propertyName: string);
    protected parseCommand(jsonObject: Object): Object;
}
