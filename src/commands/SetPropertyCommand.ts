import * as Common from "cubitt-common";

import {Command} from "./Command";
import {CommandType} from "../CommandType";

/**
 * Base command that deletes some property from some element
 */
export abstract class SetPropertyCommand extends Command {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the element with the property that has to be set
	 * @param propertyName The name of the property that has to be set
	 * @param propertyValue The value of the property that has to be set
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType,
		public elementId: Common.Guid,
		public propertyName: string,
		public propertyValue: any
	) {
		super(id, requestId, sessionId, type);
	}
}
