import * as Common from "cubitt-common";

import {Command} from "./Command";
import {CommandType} from "../CommandType";

/**
 * Base command that adds some element to the graph
 */
export abstract class AddCommand extends Command {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the new element
	 * @param elementType The type of the new element
	 * @param elementProperties The properties of the new element
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType,
		public elementId: Common.Guid,
		public elementType: string,
		public elementProperties: Common.Dictionary<any>
	) {
		super(id, requestId, sessionId, type);
	}

	/**
	 * @inheritdoc
	 */
	protected parseCommand(jsonObject: Object) : Object {
		var obj = super.parseCommand(jsonObject);

		// ElementId
		if (jsonObject['elementId'] == undefined) {
			throw new Error("Element Identifier is missing");
		}
		var elementId = Common.Guid.parse(jsonObject['elementId']);
		if (elementId == null) {
			throw new Error("Invalid Element Identifier format");
		}

		// Element Type
		if (jsonObject['elementType'] == undefined || jsonObject['elementType'].toString().trim().length == 0) {
			throw new Error("Element Type is missing or empty");
		}
		var elementType = jsonObject['elementType'];

		// Optional properties
		var properties = {};
		if (jsonObject['properties'] != undefined) {
			properties = jsonObject['properties'];
			// Ensure 'type' is not set in the properties array
			delete properties["type"];
		}
		obj["elementId"] = elementId;
		obj["elementType"] = elementType;
		obj["properties"] = properties;
		return obj;
	}
}
