import * as Common from "cubitt-common";

import {Command} from "./Command";
import {CommandType} from "../CommandType";

/**
 * Base command that deletes some element from the graph
 */
export abstract class DeleteCommand extends Command {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the element that has to be deleted
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType,
		public elementId: Common.Guid
	) {
		super(id, requestId, sessionId, type);
	}
}
