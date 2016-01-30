import * as Common from "cubitt-common";
import { Command } from "./Command";
import { CommandType } from "../CommandType";
export declare abstract class AddCommand extends Command {
    elementId: Common.Guid;
    elementType: string;
    elementProperties: Common.Dictionary<any>;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType, elementId: Common.Guid, elementType: string, elementProperties: Common.Dictionary<any>);
}
