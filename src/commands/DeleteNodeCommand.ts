import * as Common from "cubitt-common";

import {DeleteCommand} from "./DeleteCommand";
import {CommandType} from "./../CommandType";

/**
 * A command to delete a node.
 */
export class DeleteNodeCommand extends DeleteCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command.
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command.
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command.
	 * @param elementId The RFC4122 v4 compliant ID of the node that has to be deleted.
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.DeleteNode, elementId);
	}
}
