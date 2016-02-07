import * as Common from "cubitt-common";

import {Command} from "./Command";
import {DeletePropertyCommand} from "./DeletePropertyCommand";
import {CommandType} from "../CommandType";

/**
 * A command to delete a property of a connector
 */
export class DeleteConnectorPropertyCommand extends DeletePropertyCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the connector with the property that has to be deleted
	 * @param propertyName The name of the property that has to be deleted
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		propertyName: string
	) {
		super(id, requestId, sessionId, CommandType.DeleteConnectorProperty, elementId, propertyName);
	}
}
