import * as Common from "cubitt-common";
import { SetPropertyCommand } from "./SetPropertyCommand";
import { CommandType } from "../CommandType";
export declare class SetConnectorPropertyCommand extends SetPropertyCommand {
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType, elementId: Common.Guid, propertyName: string, propertyValue: any);
}
