import * as Common from "cubitt-common";
import { AddCommand } from "./AddCommand";
export declare class AddEdgeCommand extends AddCommand {
    modelId: Common.Guid;
    startConnectorId: Common.Guid;
    endConnectorId: Common.Guid;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, elementType: string, elementProperties: Common.Dictionary<any>, modelId: Common.Guid, startConnectorId: Common.Guid, endConnectorId: Common.Guid);
}
