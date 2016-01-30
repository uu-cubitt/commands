import * as Common from "cubitt-common";
import { CommandType } from "../CommandType";
export declare abstract class Command {
    id: Common.Guid;
    requestId: Common.Guid;
    sessionId: Common.Guid;
    type: CommandType;
    constructor(id: Common.Guid, requestId: Common.Guid, sessionId: Common.Guid, type: CommandType);
    toJson(): string;
}
