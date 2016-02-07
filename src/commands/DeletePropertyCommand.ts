import * as Common from "cubitt-common";

import {Command} from "./Command";
import {CommandType} from "../CommandType";

/**
 * Base command that deletes some property from some element
 */
export abstract class DeletePropertyCommand extends Command {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the element with the property that has to be deleted
	 * @param propertyName The name of the property that has to be deleted
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType,
		/**
		 * The RFC4122 v4 compliant ID of the element that has to be deleted
		 */
		public elementId: Common.Guid,
		/**
		 * The name of the property that has to be deleted
		 */
		public propertyName: string
	) {
		super(id, requestId, sessionId, type);
	}

	/**
	 * @inheritdoc
	 */
	protected parseCommand(jsonObject : Object) : Object {
		var obj = super.parseCommand(jsonObject);

		// ElementId
		if (jsonObject['elementId'] == undefined) {
			throw new Error("Element Identifier is missing");
		}
		var elementId = Common.Guid.parse(jsonObject['elementId']);
		if (elementId == null) {
			throw new Error("Invalid Element Identifier format");
		}
		obj['elementId'] = elementId;

		// Validate propertyName
		if (jsonObject['propertyName'] == undefined || jsonObject['propertyName'].toString().trim().length == 0) {
			throw new Error("Property Name is missing or empty");
		}
		obj['propertyName'] = jsonObject['propertyName'];

		return obj;
	}
}
