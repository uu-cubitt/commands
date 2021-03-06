import * as Common from "cubitt-common";

import {CommandType} from "./../CommandType";

/**
 * Base command.
 */
export abstract class Command {
	/**
	 * The RFC4122 v4 compliant ID of this command.
	 */
	public id: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the request that created this command.
	 */
	public requestId: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the session that created this command.
	 */
	public sessionId: Common.Guid;

	/**
	 * The type of this command.
	 */
	public type: CommandType;

	/**
	 * @param id The RFC4122 v4 compliant ID of this command.
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command.
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command.
	 * @param type The type of this command.
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		type: CommandType
	) {
		this.id = id;
		this.requestId = requestId;
		this.sessionId = sessionId;
		this.type = type;
	}

	/**
	 * Returns JSON representation of this command
	 */
	public toJson(): string {
		return JSON.stringify(this);
	}
}
