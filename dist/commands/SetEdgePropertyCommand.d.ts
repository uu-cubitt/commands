import * as Common from "cubitt-common";
import { SetPropertyCommand } from "./SetPropertyCommand";
export declare class SetEdgePropertyCommand extends SetPropertyCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, propertyName: string, propertyValue: any);
}
