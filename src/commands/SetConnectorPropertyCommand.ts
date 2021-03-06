import * as Common from "cubitt-common";

import {SetPropertyCommand} from "./SetPropertyCommand";
import {CommandType} from "./../CommandType";

/**
 * A command to set a property of a connector.
 */
export class SetConnectorPropertyCommand extends SetPropertyCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command.
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command.
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command.
	 * @param elementId The RFC4122 v4 compliant ID of the connector with the property that has to be set.
	 * @param propertyName The name of the property that has to be set.
	 * @param propertyValue The value of the property that has to be set.
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		propertyName: string,
		propertyValue: any
	) {
		super(id, requestId, sessionId, CommandType.SetConnectorProperty, elementId, propertyName, propertyValue);
	}
}
