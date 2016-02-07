import * as Common from "cubitt-common";

import {DeletePropertyCommand} from "./DeletePropertyCommand";
import {CommandType} from "../CommandType";

/**
 * A command to delete a property of an edge
 */
export class DeleteEdgePropertyCommand extends DeletePropertyCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the edge with the property that has to be deleted
	 * @param propertyName The name of the property that has to be deleted
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		propertyName: string
	) {
		super(id, requestId, sessionId, CommandType.DeleteEdgeProperty, elementId, propertyName);
	}
}
