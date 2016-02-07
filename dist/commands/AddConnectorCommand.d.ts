import * as Common from "cubitt-common";
import { Command } from "./Command";
import { AddCommand } from "./AddCommand";
export declare class AddConnectorCommand extends AddCommand {
    nodeId: Common.Guid;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, elementType: string, elementProperties: Common.Dictionary<any>, nodeId: Common.Guid);
    parse(jsonObject: Object): Command;
}
