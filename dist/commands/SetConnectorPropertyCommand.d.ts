import * as Common from "cubitt-common";
import { Command } from "./Command";
import { SetPropertyCommand } from "./SetPropertyCommand";
export declare class SetConnectorPropertyCommand extends SetPropertyCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, elementId: Common.Guid, propertyName: string, propertyValue: any);
    parse(jsonObject: Object): Command;
}
