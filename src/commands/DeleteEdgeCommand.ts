import * as Common from "cubitt-common";

import {Command} from "./Command";
import {DeleteCommand} from "./DeleteCommand";
import {CommandType} from "../CommandType";

/**
 * A command to delete an edge
 */
export class DeleteEdgeCommand extends DeleteCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the edge that has to be deleted
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.DeleteConnector, elementId)
	}

	/**
	 * @inheritdoc
	 */
	public parse(jsonObject : Object) : Command {
		var obj = super.parseCommand(jsonObject);
		return new DeleteEdgeCommand(
			<Common.Guid>obj['id'],
			<Common.Guid>obj['requestId'],
			<Common.Guid>obj['sessionId'],
			<Common.Guid>obj['elementId']
		);
	}
}
