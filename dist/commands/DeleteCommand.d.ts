import * as Common from "cubitt-common";
import { Command } from "./Command";
import { CommandType } from "../CommandType";
export declare abstract class DeleteCommand extends Command {
    elementId: Common.Guid;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType, elementId: Common.Guid);
}
