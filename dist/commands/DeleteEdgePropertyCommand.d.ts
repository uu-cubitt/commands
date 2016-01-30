import * as Common from "cubitt-common";
import { DeletePropertyCommand } from "./DeletePropertyCommand";
export declare class DeleteEdgePropertyCommand extends DeletePropertyCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, propertyName: string);
}
