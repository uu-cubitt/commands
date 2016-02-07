import * as Common from "cubitt-common";
import { Command } from "./Command";
import { DeleteCommand } from "./DeleteCommand";
export declare class DeleteEdgeCommand extends DeleteCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid);
    parse(jsonObject: Object): Command;
}
