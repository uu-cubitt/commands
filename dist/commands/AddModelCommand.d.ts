import * as Common from "cubitt-common";
import { Command } from "./Command";
import { AddCommand } from "./AddCommand";
export declare class AddModelCommand extends AddCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, elementType: string, elementProperties: Common.Dictionary<any>);
    parse(jsonObject: Object): Command;
}
