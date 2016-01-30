import * as Common from "cubitt-common";

import {SetPropertyCommand} from "./SetPropertyCommand";
import {CommandType} from "../CommandType";

/**
 * A command to set a property of a model
 */
export class SetModelPropertyCommand extends SetPropertyCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the model with the property that has to be set
	 * @param propertyName The name of the property that has to be set
	 * @oaram propertyValue The value of the property that has to be set
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType,
		elementId: Common.Guid,
		propertyName: string,
		propertyValue: any
	) {
		super(id, requestId, sessionId, CommandType.SetConnectorProperty, elementId, propertyName, propertyValue);
	}
}
