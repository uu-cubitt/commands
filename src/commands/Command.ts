import * as Common from "cubitt-common";

import {CommandType,CommandTypes} from "../CommandType";


/**
 * Base command
 */
export abstract class Command {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param type The type of this command
	 */
	constructor(
		/**
		 * The type of this command
		 */
		public id: Common.Guid,
		/**
		 * The RFC4122 v4 compliant ID of the request that created this command
		 */
		public requestId: Common.Guid,
		/**
		 * The RFC4122 v4 compliant ID of the session that created this command
		 */
		public sessionId: Common.Guid,
		/**
		 * The RFC4122 v4 compliant ID of this command
		 */
		public type: CommandType
	) {

	}

	/**
	 * Returns JSON representation of this command
	 */
	toJson(): string {
		return JSON.stringify(this);
	}

	/**
	 * Attempts to create a Command from a JSON Object
	 *
	 * @param jsonObject Plain javascript object
	 */
	public abstract parse(jsonObject : Object) : Command;

	/**
	 * Method that validates the required command properties
	 *
	 * @param jsonObject plain javascript object
	 */
	protected parseCommand(jsonObject: Object) : Object {
		if (jsonObject == undefined) {
			throw new Error("Empty command");
		}
		// Command Identifier
		if (jsonObject['id'] == undefined) {
			throw new Error("Command Identifier is missing");
		}
		var guid = Common.Guid.parse(jsonObject['id']);
		if (guid == null) {
			throw new Error("Invalid Command Identifier format");
		}
		// Request Identifier

		if (jsonObject['requestId'] == undefined) {
			throw new Error("Request Identifier is missing");
		}
		var requestId = Common.Guid.parse(jsonObject['requestId']);
		if (requestId == null) {
			throw new Error("Invalid Request Identifier format");
		}

		// Session Identifier
		if (jsonObject['sessionId'] == undefined) {
			throw new Error("Session Identifier is missing");
		}
		var sessionId = Common.Guid.parse(jsonObject['sessionId']);
		if (sessionId == null) {
			throw new Error("Invalid Session Identifier format");
		}

		// Validate type
		if (jsonObject['type'] == undefined) {
			throw new Error("Invalid Command Type");
		}
		var type = CommandTypes.fromString(jsonObject['type']);
		return {
			id: guid,
			requestId: requestId,
			sessionId: sessionId
		};
	}
}
