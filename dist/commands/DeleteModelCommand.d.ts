import * as Common from "cubitt-common";
import { DeleteCommand } from "./DeleteCommand";
export declare class DeleteModelCommand extends DeleteCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid);
}
