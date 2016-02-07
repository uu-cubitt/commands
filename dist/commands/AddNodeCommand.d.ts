import * as Common from "cubitt-common";
import { AddCommand } from "./AddCommand";
export declare class AddNodeCommand extends AddCommand {
    modelId: Common.Guid;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, elementType: string, elementProperties: Common.Dictionary<any>, modelId: Common.Guid);
}
