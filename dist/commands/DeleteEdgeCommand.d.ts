import * as Common from "cubitt-common";
import { DeleteCommand } from "./DeleteCommand";
export declare class DeleteEdgeCommand extends DeleteCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid);
}
